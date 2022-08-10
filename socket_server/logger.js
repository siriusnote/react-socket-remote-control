const {createLogger, format, transports} = require("winston");
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'socket_server' }),
        timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: './logs/error.log', level: 'error' }),
        new transports.File({ filename: './logs/combined.log' }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(
            format.colorize(),
            format.simple(),
            logFormat
        )
    }));
}

module.exports = logger