import { Subscription } from "./Subscription";

export class Settings {
    subscriptions: Subscription[]

    constructor( subscriptions: Array<Subscription>) {
        this.subscriptions = subscriptions
    }
}

