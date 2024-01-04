const log = (message: string, level = 0, type: "component" | "other" = "component") => {
	let styling = "padding: 0.15rem; background: #04406B; color: #FCFADB";

	if (type === "other") {
		styling = "padding: 0.15rem; background: #210957; color: #EDE6B2";
	}

	const indent = "■■ ".repeat(level);

	console.log(`%c${indent}${message}`, styling);
};

export { log };
