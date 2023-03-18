import { CommandInteraction, MessageComponentInteraction, ModalSubmitInteraction, TextInputStyle } from "discord.js";
import { Narrow } from "ts-toolbelt/out/Function/Narrow";
import { ModalButtonConfig, ModalConfig } from "./ModalConfig";
type ModalInput = {
    name: string;
    label: string;
    defaultValue: string;
    placeholder?: string;
    required: boolean;
    style: TextInputStyle;
    minLength?: number;
    maxLength?: number;
    shouldShow?: (interaction: MessageComponentInteraction | CommandInteraction) => boolean;
};
type ModalValues<TInputs extends ModalInput[]> = {
    [K in TInputs[number]['name']]?: string;
};
export declare const defineModal: <TInputs extends ModalInput[], TButtonConfig extends ModalButtonConfig | null>(id: string, title: string, buttonConfig: TButtonConfig, inputs: Narrow<TInputs>, getCurrentValues: (interaction: MessageComponentInteraction | CommandInteraction) => Promise<ModalValues<TInputs>>, onSubmit: (values: ModalValues<TInputs>, interaction: ModalSubmitInteraction) => void) => ModalConfig<TButtonConfig extends null ? false : true>;
export {};
