import React from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { StrictMode } from "react";
import { Root, createRoot } from "react-dom/client";
import { ReactView } from "./ReactView";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
	root: Root | null = null;
	icon: string;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
		this.icon = "messages-square";
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "ObsiChat";
	}

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<ReactView />
			</StrictMode>,
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
