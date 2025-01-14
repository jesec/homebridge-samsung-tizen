class BaseError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}



class TvOfflineError extends BaseError {
    constructor(message) { super(message || 'TV is offline') }
}



class InvalidAppIdError extends BaseError {
    constructor(message, appId) { super(message || `No application found with this id (${appId})`) }
}

class InvalidChannelError extends BaseError {
    constructor(message, channel) { super(message || `Invalid channel number (${channel})`) }
}



class SocketOpenError extends BaseError {
    constructor(message, response) {
        super((message || 'Failed to open socket') + (response ? ' ' + JSON.stringify(response) : ''));

        this.response = response;
    }
}

class SocketSendError extends BaseError {
    constructor(message) { super(message || 'Failed to send request to socket') }
}

class SocketResponseError extends BaseError {
    constructor(message) { super(message) }
}



class ArtSocketOpenError extends BaseError {
    constructor(message, response) {
        super((message || 'Failed to open art socket') + (response ? ' ' + JSON.stringify(response) : ''));

        this.response = response;
    }
}



class WoLFailedError extends BaseError {
    constructor(message) { super(message || 'Failed to power on the TV') }
}

class PairFailedError extends BaseError {
    constructor(message) { super(message || `Failed to pair! Make sure TV is online and you click "Allow" on the popup`) }
}



class SmartThingsNotSet extends BaseError {
    constructor(message) { super(message || 'You are trying to use a feature that require SmartThings API! Read https://bit.ly/3KvqHak for how to setup the API.') }
}

class SmartThingsResponse extends BaseError {
    constructor(message) { super(message || 'Failed to execute your request') }
}



module.exports = {
    TvOfflineError,

    InvalidAppIdError,
    InvalidChannelError,

    SocketOpenError,
    SocketSendError,
    SocketResponseError,

    ArtSocketOpenError,

    WoLFailedError,
    PairFailedError,

    SmartThingsNotSet,
    SmartThingsResponse
};