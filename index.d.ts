declare class BattleEyeClient {
    socket: dgram.Socket;
    messageHandler: (message: string) => void;
    timeoutHandler: () => void;
    loggedIn: boolean;
    error: boolean;

    /**
     * Create a new BattleEyeClient instance, does not connect to the server
     *
     * @param ip BattlEye server IP
     * @param port BattlEye server port
     * @param password BattlEye server password
     */
    constructor(ip: string, port: number, password: string, messageTimeout: number): void;

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
    close(): void;
}

export = BattleEyeClient;
