import * as dgram from 'dgram';

declare class BattleEyeClient {
    socket: dgram.Socket;
    loggedIn: boolean;
    error: boolean;
    ip: string;
    port: number;
    password: string;
    sequenceNumber: number;
    lastResponse: number;
    lastCommand: number;
    interval: NodeJS.Timeout;
    multipacket: Array<number, string>;
    messageTimeout: number;

    messageHandler: (message: string) => void;
    timeoutHandler: () => void;

    /**
     * Create a new BattleEyeClient instance, does not connect to the server
     *
     * @param ip BattlEye server IP
     * @param port BattlEye server port
     * @param password BattlEye server password
     */
    constructor(ip: string, port: number, password: string, messageTimeout: number);

    /**
     * Connect to the BattlEye server
     */
    public connect(): void;

    /**
     * Send a command to the BattlEye server
     *
     * @param command Command to send
     */
    public sendCommand(command: string): void;

    /**
     * Close the connection to the BattlEye server
     */
    public close(): void;
}

export = BattleEyeClient;
