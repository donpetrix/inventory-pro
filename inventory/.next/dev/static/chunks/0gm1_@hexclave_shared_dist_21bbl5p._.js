(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/helpers/vault/client-side.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptValue",
    ()=>decryptValue,
    "encryptValue",
    ()=>encryptValue,
    "hashKey",
    ()=>hashKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/crypto.js [app-client] (ecmascript)");
;
;
//#region src/helpers/vault/client-side.ts
const hashPurpose = "stack-data-vault-client-side-encryption-key-hash";
const encryptionSecretPurpose = "stack-data-vault-client-side-encryption-value-encryption-key-hash";
const encryptionValuePurpose = "stack-data-vault-client-side-encryption-value-encryption-value-encryption";
async function getDerivedKey(secret, key) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratedHash"])({
        purpose: encryptionSecretPurpose,
        extra: secret,
        value: key,
        iterations: 1e5
    });
}
/**
* Use to hash the key so the server cannot infer it.
*/ async function hashKey(secret, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])({
        purpose: hashPurpose,
        extra: secret,
        value: await getDerivedKey(secret, key)
    }));
}
/**
* Use to encrypt the value so that the server cannot read the value without knowing the key.
*/ async function encryptValue(secret, key, value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encrypt"])({
        purpose: encryptionValuePurpose,
        secret: await getDerivedKey(secret, key),
        value: new TextEncoder().encode(value)
    }));
}
/**
* Use to decrypt the value. See encryptValue.
*/ async function decryptValue(secret, key, encryptedValue) {
    const bytesResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decrypt"])({
        purpose: encryptionValuePurpose,
        secret: await getDerivedKey(secret, key),
        cipher: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encryptedValue)
    });
    if (bytesResult.status === "error") throw new Error("Data vault client-side decryption failed. Are you sure you're using the correct secret?", {
        cause: bytesResult.error
    });
    return new TextDecoder().decode(bytesResult.data);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/hooks/use-async-callback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAsyncCallback",
    ()=>useAsyncCallback,
    "useAsyncCallbackWithLoggedError",
    ()=>useAsyncCallbackWithLoggedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
//#region src/hooks/use-async-callback.tsx
function useAsyncCallback(callback, deps) {
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(void 0);
    const [loadingCount, setLoadingCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
            "useAsyncCallback.useCallback": async (...args)=>{
                setLoadingCount({
                    "useAsyncCallback.useCallback": (c)=>c + 1
                }["useAsyncCallback.useCallback"]);
                try {
                    return await callback(...args);
                } catch (e) {
                    setError(e);
                    throw e;
                } finally{
                    setLoadingCount({
                        "useAsyncCallback.useCallback": (c)=>c - 1
                    }["useAsyncCallback.useCallback"]);
                }
            }
        }["useAsyncCallback.useCallback"], deps),
        loadingCount > 0,
        error
    ];
}
function useAsyncCallbackWithLoggedError(callback, deps) {
    const [newCallback, loading] = useAsyncCallback({
        "useAsyncCallbackWithLoggedError.useAsyncCallback": async (...args)=>{
            try {
                return await callback(...args);
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("async-callback", e);
                throw e;
            }
        }
    }["useAsyncCallbackWithLoggedError.useAsyncCallback"], deps);
    return [
        newCallback,
        loading
    ];
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$admin$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/admin-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$client$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/client-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$server$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/server-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
;
;
;
;
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/admin-interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveAdminInterface",
    ()=>HexclaveAdminInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$server$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/server-interface.js [app-client] (ecmascript)");
;
;
;
;
//#region src/interface/admin-interface.ts
var HexclaveAdminInterface = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$server$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveServerInterface"] {
    constructor(options){
        super(options);
        this.options = options;
    }
    async sendAdminRequest(path, options, session, requestType = "admin") {
        return await this.sendServerRequest(path, {
            ...options,
            headers: {
                "x-hexclave-super-secret-admin-key": "superSecretAdminKey" in this.options ? this.options.superSecretAdminKey : "",
                ...options.headers
            }
        }, session, requestType);
    }
    async sendAdminRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await this.sendAdminRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
    }
    async getProject() {
        return await (await this.sendAdminRequest("/internal/projects/current", {
            method: "GET"
        }, null)).json();
    }
    async updateProject(update) {
        return await (await this.sendAdminRequest("/internal/projects/current", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, null)).json();
    }
    async createInternalApiKey(options) {
        return await (await this.sendAdminRequest("/internal/api-keys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async listInternalApiKeys() {
        return (await (await this.sendAdminRequest("/internal/api-keys", {}, null)).json()).items;
    }
    async revokeInternalApiKeyById(id) {
        await this.sendAdminRequest(`/internal/api-keys/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                revoked: true
            })
        }, null);
    }
    async getInternalApiKey(id, session) {
        return await (await this.sendAdminRequest(`/internal/api-keys/${id}`, {}, session)).json();
    }
    async listInternalEmailTemplates() {
        return (await (await this.sendAdminRequest(`/internal/email-templates`, {}, null)).json()).templates;
    }
    async listWorkflows() {
        return (await (await this.sendAdminRequest(`/internal/workflows`, {}, null)).json()).workflows;
    }
    async createWorkflow(options) {
        return await (await this.sendAdminRequest(`/internal/workflows`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async updateWorkflowSource(workflowId, source) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}/source`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                source
            })
        }, null)).json();
    }
    async setWorkflowPaused(workflowId, isPaused) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                is_paused: isPaused
            })
        }, null)).json();
    }
    async deleteWorkflow(workflowId) {
        await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}`, {
            method: "DELETE"
        }, null);
    }
    async listWorkflowVersions(workflowId) {
        return (await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}/versions`, {}, null)).json()).versions;
    }
    async listWorkflowRuns(workflowId, filter = {}) {
        const params = new URLSearchParams();
        if (filter.state !== void 0) params.set("state", filter.state);
        if (filter.version !== void 0) params.set("version", String(filter.version));
        if (filter.run_key !== void 0) params.set("run_key", filter.run_key);
        if (filter.cursor !== void 0) params.set("cursor", filter.cursor);
        if (filter.limit !== void 0) params.set("limit", String(filter.limit));
        if (filter.include_state !== void 0) params.set("include_state", String(filter.include_state));
        const query = params.toString();
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}/runs` + (query ? `?${query}` : ""), {}, null)).json();
    }
    async getWorkflowRun(runId) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/runs/${runId}`, {}, null)).json();
    }
    async cancelWorkflowRuns(workflowId, filter) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}/runs/cancel`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(filter)
        }, null)).json();
    }
    async upgradeWorkflowRuns(workflowId, options) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/${workflowId}/runs/upgrade`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async retryWorkflowRun(runId) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/workflows/runs/${runId}/retry`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async sendWorkflowEvent(name, data) {
        return await (await this.sendAdminRequest(`/internal/workflows/events`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                data
            })
        }, null)).json();
    }
    async listInternalEmailDrafts() {
        return (await (await this.sendAdminRequest(`/internal/email-drafts`, {}, null)).json()).drafts;
    }
    async createEmailDraft(options) {
        return await (await this.sendAdminRequest(`/internal/email-drafts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async updateEmailDraft(id, data) {
        await this.sendAdminRequest(`/internal/email-drafts/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null);
    }
    async deleteEmailDraft(id) {
        await this.sendAdminRequest(`/internal/email-drafts/${id}`, {
            method: "DELETE"
        }, null);
    }
    async listEmailThemes() {
        return (await (await this.sendAdminRequest(`/internal/email-themes`, {}, null)).json()).themes;
    }
    async listTeamPermissionDefinitions() {
        return (await (await this.sendAdminRequest(`/team-permission-definitions`, {}, null)).json()).items;
    }
    async listTeamPermissionDefinitionsPaginated(options) {
        const params = new URLSearchParams();
        params.set("limit", String(options.limit));
        if (options.cursor) params.set("cursor", options.cursor);
        if (options.query) params.set("query", options.query);
        const result = await (await this.sendAdminRequest(`/team-permission-definitions?${params.toString()}`, {}, null)).json();
        return {
            items: result.items,
            nextCursor: result.pagination?.next_cursor ?? null
        };
    }
    async createTeamPermissionDefinition(data) {
        return await (await this.sendAdminRequest("/team-permission-definitions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateTeamPermissionDefinition(permissionId, data) {
        return await (await this.sendAdminRequest(`/team-permission-definitions/${permissionId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteTeamPermissionDefinition(permissionId) {
        await this.sendAdminRequest(`/team-permission-definitions/${permissionId}`, {
            method: "DELETE"
        }, null);
    }
    async listProjectPermissionDefinitions() {
        return (await (await this.sendAdminRequest(`/project-permission-definitions`, {}, null)).json()).items;
    }
    async createProjectPermissionDefinition(data) {
        return await (await this.sendAdminRequest("/project-permission-definitions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateProjectPermissionDefinition(permissionId, data) {
        return await (await this.sendAdminRequest(`/project-permission-definitions/${permissionId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteProjectPermissionDefinition(permissionId) {
        await this.sendAdminRequest(`/project-permission-definitions/${permissionId}`, {
            method: "DELETE"
        }, null);
    }
    async getSvixToken() {
        return await (await this.sendAdminRequest("/webhooks/svix-token", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async deleteProject() {
        await this.sendAdminRequest("/internal/projects/current", {
            method: "DELETE"
        }, null);
    }
    async getMetrics(includeAnonymous = false, filters) {
        const params = new URLSearchParams();
        if (includeAnonymous) params.append("include_anonymous", "true");
        if (filters?.country_code) params.append("filter_country_code", filters.country_code);
        if (filters?.referrer) params.append("filter_referrer", filters.referrer);
        if (filters?.browser) params.append("filter_browser", filters.browser);
        if (filters?.os) params.append("filter_os", filters.os);
        if (filters?.device) params.append("filter_device", filters.device);
        if (filters?.since) params.append("filter_since", filters.since);
        if (filters?.until) params.append("filter_until", filters.until);
        const queryString = params.toString();
        const body = await (await this.sendAdminRequest(`/internal/metrics${queryString ? `?${queryString}` : ""}`, {
            method: "GET"
        }, null)).json();
        const rawBody = body;
        const rawAnalytics = body.analytics_overview;
        return {
            ...body,
            live_users: rawBody.live_users ?? 0,
            hourly_users: rawBody.hourly_users ?? [],
            hourly_active_users: rawBody.hourly_active_users ?? [],
            analytics_overview: {
                ...body.analytics_overview,
                hourly_page_views: rawAnalytics.hourly_page_views ?? [],
                hourly_active_users: rawAnalytics.hourly_active_users ?? [],
                hourly_visitors: rawAnalytics.hourly_visitors ?? [],
                daily_anonymous_visitors_fallback: rawAnalytics.daily_anonymous_visitors_fallback ?? [],
                anonymous_visitors_fallback: rawAnalytics.anonymous_visitors_fallback ?? 0,
                top_regions: rawAnalytics.top_regions ?? [],
                bounce_rate: rawAnalytics.bounce_rate ?? 0,
                daily_bounce_rate: rawAnalytics.daily_bounce_rate ?? [],
                daily_avg_session_seconds: rawAnalytics.daily_avg_session_seconds ?? [],
                top_browsers: rawAnalytics.top_browsers ?? [],
                top_operating_systems: rawAnalytics.top_operating_systems ?? [],
                top_devices: rawAnalytics.top_devices ?? []
            }
        };
    }
    async getPlanUsage() {
        return await (await this.sendAdminRequest("/internal/plan-usage", {
            method: "GET"
        }, null)).json();
    }
    async getUserActivity(userId) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/internal/user-activity?user_id=${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async getAnalyticsClickmap(options) {
        return await (await this.sendAdminRequest("/internal/analytics/clickmap", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async createAnalyticsClickmapToken(options) {
        return await (await this.sendAdminRequest("/internal/analytics/clickmap-token", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async getMetricsUserCounts() {
        return await (await this.sendAdminRequest("/internal/metrics/user-counts", {
            method: "GET"
        }, null)).json();
    }
    async sendTestEmail(data) {
        return await (await this.sendAdminRequest(`/internal/send-test-email`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async sendTestWebhook(data) {
        return await (await this.sendAdminRequest(`/internal/send-test-webhook`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listSentEmails() {
        return await (await this.sendAdminRequest("/internal/emails", {
            method: "GET"
        }, null)).json();
    }
    async setupManagedEmailProvider(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/setup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async checkManagedEmailStatus(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/check", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listManagedEmailDomains() {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/list", {
            method: "GET"
        }, null)).json();
    }
    async deleteManagedEmailDomain(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/delete", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async applyManagedEmailProvider(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/apply", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async sendSignInInvitationEmail(email, callbackUrl) {
        await this.sendAdminRequest("/internal/send-sign-in-invitation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, null);
    }
    async saveChatMessage(threadId, message) {
        await this.sendAdminRequest(`/internal/ai-chat/${threadId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        }, null);
    }
    async listChatMessages(threadId) {
        return await (await this.sendAdminRequest(`/internal/ai-chat/${threadId}`, {
            method: "GET"
        }, null)).json();
    }
    async renderEmailPreview(options) {
        return await (await this.sendAdminRequest(`/emails/render-email`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                theme_id: options.themeId,
                theme_tsx_source: options.themeTsxSource,
                template_id: options.templateId,
                template_tsx_source: options.templateTsxSource,
                editable_markers: options.editableMarkers,
                editable_source: options.editableSource
            })
        }, null)).json();
    }
    async rewriteTemplateSourceWithAI(templateTsxSource) {
        return await (await this.sendAdminRequest(`/internal/rewrite-template-source`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                template_tsx_source: templateTsxSource
            })
        }, null)).json();
    }
    async createEmailTheme(displayName) {
        return await (await this.sendAdminRequest(`/internal/email-themes`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                display_name: displayName
            })
        }, null)).json();
    }
    async getEmailTheme(id) {
        return await (await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "GET"
        }, null)).json();
    }
    async updateEmailTheme(id, tsxSource) {
        await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                tsx_source: tsxSource
            })
        }, null);
    }
    async deleteEmailTheme(id) {
        await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "DELETE"
        }, null);
    }
    async updateEmailTemplate(id, tsxSource, themeId) {
        return await (await this.sendAdminRequest(`/internal/email-templates/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                tsx_source: tsxSource,
                theme_id: themeId
            })
        }, null)).json();
    }
    async getConfig() {
        return await (await this.sendAdminRequest(`/internal/config`, {
            method: "GET"
        }, null)).json();
    }
    async getConfigOverride(level) {
        return await (await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "GET"
        }, null)).json();
    }
    async setConfigOverride(level, configOverride, source) {
        await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_string: JSON.stringify(configOverride),
                ...source && {
                    source
                }
            })
        }, null);
    }
    async updateConfigOverride(level, configOverrideOverride) {
        await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_override_string: JSON.stringify(configOverrideOverride)
            })
        }, null);
    }
    async getPushedConfigSource() {
        return (await (await this.sendAdminRequest(`/internal/config/source`, {
            method: "GET"
        }, null)).json()).source;
    }
    async unlinkPushedConfigSource() {
        await this.sendAdminRequest(`/internal/config/source`, {
            method: "DELETE"
        }, null);
    }
    /**
	* Reads a specific config-agent run's state (or `null`) for the linked GitHub
	* repo. Polled by the dashboard — using the id returned by `applyConfigViaAgent`
	* — for live progress and the review diff. Runs are independent, so each is
	* addressed by its own id rather than "the" run on the branch.
	*/ async getConfigAgentRun(runId) {
        return (await (await this.sendAdminRequest(`/internal/config/github/run?run_id=${encodeURIComponent(runId)}`, {
            method: "GET"
        }, null)).json()).agent_run ?? null;
    }
    /**
	* Applies a dashboard config change to the linked GitHub repo by running the
	* config agent in a sandbox (server-side). Returns immediately with the new run's
	* `id`; poll `getConfigAgentRun(id)` for progress. The GitHub access token is the
	* caller's own OAuth token and is used transiently server-side.
	*/ async applyConfigViaAgent(options) {
        return await (await this.sendAdminRequest(`/internal/config/github/apply`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                github_access_token: options.githubAccessToken,
                config_update_string: JSON.stringify(options.configUpdate)
            })
        }, null)).json();
    }
    /**
	* Cancels a specific in-flight agent-driven config write: hard-stops the sandbox
	* so the agent stops mid-work. Also cancels runs in `awaiting_review`. No revert
	* — if the agent already pushed, the commit stays. Returns `not-running` if the
	* run is gone or already terminal.
	*/ async cancelConfigAgentRun(runId) {
        return await (await this.sendAdminRequest(`/internal/config/github/cancel`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                run_id: runId
            })
        }, null)).json();
    }
    /**
	* Commits a specific run's reviewed change to GitHub. Only valid when that run is in
	* `awaiting_review` status; the change (diff + base commit) was captured at apply time
	* and is rebuilt + pushed via the GitHub API here, so no live sandbox is involved.
	* Returns `not-awaiting-review` if the run isn't in a committable state.
	*/ async commitConfigAgentRun(runId, options) {
        return await (await this.sendAdminRequest(`/internal/config/github/commit`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                run_id: runId,
                github_access_token: options.githubAccessToken,
                ...options.commitMessage ? {
                    commit_message: options.commitMessage
                } : {}
            })
        }, null)).json();
    }
    async resetConfigOverrideKeys(level, keys) {
        await this.sendAdminRequest(`/internal/config/override/${level}/reset-keys`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                keys
            })
        }, null);
    }
    async createEmailTemplate(displayName) {
        return await (await this.sendAdminRequest(`/internal/email-templates`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                display_name: displayName
            })
        }, null)).json();
    }
    async deleteEmailTemplate(id) {
        await this.sendAdminRequest(`/internal/email-templates/${id}`, {
            method: "DELETE"
        }, null);
    }
    async setupPayments() {
        return await (await this.sendAdminRequest("/internal/payments/setup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async getStripeAccountInfo() {
        const response = await this.sendAdminRequestAndCatchKnownError("/internal/payments/stripe/account-info", {}, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].StripeAccountInfoNotFound
        ]);
        if (response.status === "error") return null;
        return await response.data.json();
    }
    async getPaymentMethodConfigs() {
        const response = await this.sendAdminRequestAndCatchKnownError("/internal/payments/method-configs", {
            method: "GET"
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].StripeAccountInfoNotFound
        ]);
        if (response.status === "error") return null;
        const data = await response.data.json();
        return {
            configId: data.config_id,
            methods: data.methods
        };
    }
    async updatePaymentMethodConfigs(configId, updates) {
        await this.sendAdminRequest("/internal/payments/method-configs", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_id: configId,
                updates
            })
        }, null);
    }
    async createStripeWidgetAccountSession() {
        return await (await this.sendAdminRequest("/internal/payments/stripe-widgets/account-session", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async listTransactions(params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        if (params?.type) qs.set("type", params.type);
        if (params?.customerType) qs.set("customer_type", params.customerType);
        if (params?.customerId) qs.set("customer_id", params.customerId);
        const json = await (await this.sendAdminRequest(`/internal/payments/transactions${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
        return {
            transactions: json.transactions,
            nextCursor: json.next_cursor
        };
    }
    async refundTransaction(options) {
        const json = await (await this.sendAdminRequest("/internal/payments/transactions/refund", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                type: options.type,
                id: options.id,
                ...options.invoiceId !== void 0 ? {
                    invoice_id: options.invoiceId
                } : {},
                amount_usd: options.amountUsd,
                ...options.endAction !== void 0 ? {
                    end_action: options.endAction
                } : {}
            })
        }, null)).json();
        return {
            success: json.success,
            refundTransactionId: json.refund_transaction_id
        };
    }
    async previewAffectedUsersByOnboardingChange(onboarding, limit) {
        return await (await this.sendAdminRequest(`/internal/onboarding/preview-affected-users${limit ? `?limit=${limit}` : ""}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                onboarding
            })
        }, null)).json();
    }
    async listOutboxEmails(options) {
        const qs = new URLSearchParams();
        if (options?.status) qs.set("status", options.status);
        if (options?.simple_status) qs.set("simple_status", options.simple_status);
        if (options?.user_id) qs.set("user_id", options.user_id);
        if (options?.limit !== void 0) qs.set("limit", options.limit.toString());
        if (options?.cursor) qs.set("cursor", options.cursor);
        return await (await this.sendServerRequest(`/emails/outbox${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getOutboxEmail(id) {
        return await (await this.sendServerRequest(`/emails/outbox/${id}`, {
            method: "GET"
        }, null)).json();
    }
    async updateOutboxEmail(id, data) {
        return await (await this.sendServerRequest(`/emails/outbox/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listDeploymentServices() {
        return (await (await this.sendAdminRequest("/deployments/services", {
            method: "GET"
        }, null)).json()).items;
    }
    async listProjectSecrets() {
        return (await (await this.sendAdminRequest("/project-secrets", {
            method: "GET"
        }, null)).json()).items;
    }
    async setProjectSecret(key, value) {
        await this.sendAdminRequest("/project-secrets", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                key,
                value
            })
        }, null);
    }
    async deleteProjectSecret(key) {
        await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/project-secrets/${key}`, {
            method: "DELETE"
        }, null);
    }
    async listDeployments(options) {
        return (await (await this.sendAdminRequest(`/deployments/deployments` + (options?.limit !== void 0 ? `?limit=${options.limit}` : ""), {
            method: "GET"
        }, null)).json()).items;
    }
    async getDeployment(deploymentId) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/deployments/${deploymentId}`, {
            method: "GET"
        }, null)).json();
    }
    async getDeploymentBuildLogs(deploymentId, options) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/deployments/${deploymentId}/logs`, {
            method: "GET",
            signal: options?.signal
        }, null)).text();
    }
    /**
	* Follows a service's runtime logs, calling `onLine` for each line as it arrives.
	*
	* The endpoint streams NDJSON and follows for a few minutes before closing, so
	* this resolves when the server stops following rather than when the service
	* stops running — there is no end to a runtime log. Resume by calling again
	* with the largest `at_millis` seen; omit it to start at the tail.
	*
	* Rejects if the stream ends in an error, AFTER delivering everything that
	* arrived before it: the lines already handed to `onLine` are real output and
	* the caller should keep them.
	*/ async getDeploymentServiceLogs(serviceId, options) {
        const params = new URLSearchParams();
        if (options.sinceMillis !== void 0) params.set("since_millis", String(options.sinceMillis));
        if (options.follow === false) params.set("follow", "false");
        const query = params.toString();
        const response = await this.sendAdminRequest(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/services/${serviceId}/logs`}${query === "" ? "" : `?${query}`}`, {
            method: "GET",
            signal: options.signal
        }, null);
        if (response.body === null) return;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        const stream = {
            error: null
        };
        const handleLine = (raw)=>{
            if (raw === "") return;
            let parsed;
            try {
                parsed = JSON.parse(raw);
            } catch  {
                return;
            }
            if (parsed === null || typeof parsed !== "object") return;
            const errorMessage = parsed._error;
            if (typeof errorMessage === "string") {
                stream.error = errorMessage;
                return;
            }
            if (typeof parsed.at_millis !== "number") return;
            options.onLine(parsed);
        };
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                while(true){
                    const newlineIndex = buffer.indexOf("\n");
                    if (newlineIndex < 0) break;
                    handleLine(buffer.slice(0, newlineIndex));
                    buffer = buffer.slice(newlineIndex + 1);
                }
            }
            buffer += decoder.decode();
            handleLine(buffer);
        } finally{
            reader.releaseLock();
        }
        if (stream.error !== null) throw new Error(stream.error);
    }
    async addDeploymentServiceDomain(serviceId, hostname, options) {
        await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/services/${serviceId}/domains`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hostname,
                ...options?.isPrimary ? {
                    is_primary: true
                } : {}
            })
        }, null);
    }
    async getDeploymentServiceDomain(serviceId, hostname) {
        return await (await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/services/${serviceId}/domains/${hostname}`, {
            method: "GET"
        }, null)).json();
    }
    async deleteDeploymentServiceDomain(serviceId, hostname) {
        await this.sendAdminRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/deployments/services/${serviceId}/domains/${hostname}`, {
            method: "DELETE"
        }, null);
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/client-interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiUrlsFailedError",
    ()=>ApiUrlsFailedError,
    "HexclaveClientInterface",
    ()=>HexclaveClientInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/crypto.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
//#region ../../node_modules/.pnpm/oauth4webapi@3.8.5/node_modules/oauth4webapi/build/index.js
let USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) USER_AGENT = `oauth4webapi/v3.8.5`;
function looseInstanceOf(input, expected) {
    if (input == null) return false;
    try {
        return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
    } catch  {
        return false;
    }
}
const ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
const ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
function CodedTypeError(message, code, cause) {
    const err = new TypeError(message, {
        cause
    });
    Object.assign(err, {
        code
    });
    return err;
}
const allowInsecureRequests = Symbol();
const clockSkew = Symbol();
const clockTolerance = Symbol();
const customFetch = Symbol();
const jweDecrypt = Symbol();
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function buf(input) {
    if (typeof input === "string") return encoder.encode(input);
    return decoder.decode(input);
}
let encodeBase64Url;
if (Uint8Array.prototype.toBase64) encodeBase64Url = (input)=>{
    if (input instanceof ArrayBuffer) input = new Uint8Array(input);
    return input.toBase64({
        alphabet: "base64url",
        omitPadding: true
    });
};
else {
    const CHUNK_SIZE = 32768;
    encodeBase64Url = (input)=>{
        if (input instanceof ArrayBuffer) input = new Uint8Array(input);
        const arr = [];
        for(let i = 0; i < input.byteLength; i += CHUNK_SIZE)arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
        return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
}
let decodeBase64Url;
if (Uint8Array.fromBase64) decodeBase64Url = (input)=>{
    try {
        return Uint8Array.fromBase64(input, {
            alphabet: "base64url"
        });
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
else decodeBase64Url = (input)=>{
    try {
        const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
        const bytes = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
        return bytes;
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
function b64u(input) {
    if (typeof input === "string") return decodeBase64Url(input);
    return encodeBase64Url(input);
}
var UnsupportedOperationError = class extends Error {
    code;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = UNSUPPORTED_OPERATION;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var OperationProcessingError = class extends Error {
    code;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        if (options?.code) this.code = options?.code;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
function OPE(message, code, cause) {
    return new OperationProcessingError(message, {
        code,
        cause
    });
}
function isJsonObject(input) {
    if (input === null || typeof input !== "object" || Array.isArray(input)) return false;
    return true;
}
function prepareHeaders(input) {
    if (looseInstanceOf(input, Headers)) input = Object.fromEntries(input.entries());
    const headers = new Headers(input ?? {});
    if (USER_AGENT && !headers.has("user-agent")) headers.set("user-agent", USER_AGENT);
    if (headers.has("authorization")) throw CodedTypeError("\"options.headers\" must not include the \"authorization\" header name", ERR_INVALID_ARG_VALUE);
    return headers;
}
function signal(url, value) {
    if (value !== void 0) {
        if (typeof value === "function") value = value(url.href);
        if (!(value instanceof AbortSignal)) throw CodedTypeError("\"options.signal\" must return or be an instance of AbortSignal", ERR_INVALID_ARG_TYPE);
        return value;
    }
}
function assertNumber(input, allow0, it, code, cause) {
    try {
        if (typeof input !== "number" || !Number.isFinite(input)) throw CodedTypeError(`${it} must be a number`, ERR_INVALID_ARG_TYPE, cause);
        if (input > 0) return;
        if (allow0) {
            if (input !== 0) throw CodedTypeError(`${it} must be a non-negative number`, ERR_INVALID_ARG_VALUE, cause);
            return;
        }
        throw CodedTypeError(`${it} must be a positive number`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
        if (code) throw OPE(err.message, code, cause);
        throw err;
    }
}
function assertString(input, it, code, cause) {
    try {
        if (typeof input !== "string") throw CodedTypeError(`${it} must be a string`, ERR_INVALID_ARG_TYPE, cause);
        if (input.length === 0) throw CodedTypeError(`${it} must not be empty`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
        if (code) throw OPE(err.message, code, cause);
        throw err;
    }
}
function assertApplicationJson(response) {
    assertContentType(response, "application/json");
}
function notJson(response, ...types) {
    let msg = "\"response\" content-type must be ";
    if (types.length > 2) {
        const last = types.pop();
        msg += `${types.join(", ")}, or ${last}`;
    } else if (types.length === 2) msg += `${types[0]} or ${types[1]}`;
    else msg += types[0];
    return OPE(msg, RESPONSE_IS_NOT_JSON, response);
}
function assertContentType(response, contentType) {
    if (getContentType(response) !== contentType) throw notJson(response, contentType);
}
function getClockSkew(client) {
    const skew = client?.[clockSkew];
    return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
}
function getClockTolerance(client) {
    const tolerance = client?.[clockTolerance];
    return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
}
function epochTime() {
    return Math.floor(Date.now() / 1e3);
}
function assertAs(as) {
    if (typeof as !== "object" || as === null) throw CodedTypeError("\"as\" must be an object", ERR_INVALID_ARG_TYPE);
    assertString(as.issuer, "\"as.issuer\"");
}
function assertClient(client) {
    if (typeof client !== "object" || client === null) throw CodedTypeError("\"client\" must be an object", ERR_INVALID_ARG_TYPE);
    assertString(client.client_id, "\"client.client_id\"");
}
function ClientSecretPost(clientSecret) {
    assertString(clientSecret, "\"clientSecret\"");
    return (_as, client, body, _headers)=>{
        body.set("client_id", client.client_id);
        body.set("client_secret", clientSecret);
    };
}
const URLParse = URL.parse ? (url, base)=>URL.parse(url, base) : (url, base)=>{
    try {
        return new URL(url, base);
    } catch  {
        return null;
    }
};
function checkProtocol(url, enforceHttps) {
    if (enforceHttps && url.protocol !== "https:") throw OPE("only requests to HTTPS are allowed", HTTP_REQUEST_FORBIDDEN, url);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw OPE("only HTTP and HTTPS requests are allowed", REQUEST_PROTOCOL_FORBIDDEN, url);
}
function validateEndpoint(value, endpoint, useMtlsAlias, enforceHttps) {
    let url;
    if (typeof value !== "string" || !(url = URLParse(value))) throw OPE(`authorization server metadata does not contain a valid ${useMtlsAlias ? `"as.mtls_endpoint_aliases.${endpoint}"` : `"as.${endpoint}"`}`, value === void 0 ? MISSING_SERVER_METADATA : INVALID_SERVER_METADATA, {
        attribute: useMtlsAlias ? `mtls_endpoint_aliases.${endpoint}` : endpoint
    });
    checkProtocol(url, enforceHttps);
    return url;
}
function resolveEndpoint(as, endpoint, useMtlsAlias, enforceHttps) {
    if (useMtlsAlias && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias, enforceHttps);
    return validateEndpoint(as[endpoint], endpoint, useMtlsAlias, enforceHttps);
}
var ResponseBodyError = class extends Error {
    cause;
    code;
    error;
    status;
    error_description;
    response;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = RESPONSE_BODY_ERROR;
        this.cause = options.cause;
        this.error = options.cause.error;
        this.status = options.response.status;
        this.error_description = options.cause.error_description;
        Object.defineProperty(this, "response", {
            enumerable: false,
            value: options.response
        });
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var AuthorizationResponseError = class extends Error {
    cause;
    code;
    error;
    error_description;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = AUTHORIZATION_RESPONSE_ERROR;
        this.cause = options.cause;
        this.error = options.cause.get("error");
        this.error_description = options.cause.get("error_description") ?? void 0;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var WWWAuthenticateChallengeError = class extends Error {
    cause;
    code;
    response;
    status;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = WWW_AUTHENTICATE_CHALLENGE;
        this.cause = options.cause;
        this.status = options.response.status;
        this.response = options.response;
        Object.defineProperty(this, "response", {
            enumerable: false
        });
        Error.captureStackTrace?.(this, this.constructor);
    }
};
const schemeRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)");
const quotedParamRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)\\s*=\\s*\"((?:[^\"\\\\]|\\\\[\\s\\S])*)\"[,\\s]*(.*)");
const unquotedParamRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)\\s*=\\s*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)[,\\s]*(.*)");
const token68ParamRE = /* @__PURE__ */ new RegExp("^([a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2})(?:$|[,\\s])(.*)");
function parseWwwAuthenticateChallenges(response) {
    if (!looseInstanceOf(response, Response)) throw CodedTypeError("\"response\" must be an instance of Response", ERR_INVALID_ARG_TYPE);
    const header = response.headers.get("www-authenticate");
    if (header === null) return;
    const challenges = [];
    let rest = header;
    while(rest){
        let match = rest.match(schemeRE);
        const scheme = match?.["1"].toLowerCase();
        if (!scheme) return;
        const afterScheme = rest.substring(match[0].length);
        if (afterScheme && !afterScheme.match(/^[\s,]/)) return;
        const spaceMatch = afterScheme.match(/^\s+(.*)$/);
        const hasParameters = !!spaceMatch;
        rest = spaceMatch ? spaceMatch[1] : void 0;
        const parameters = {};
        let token68;
        if (hasParameters) while(rest){
            let key;
            let value;
            if (match = rest.match(quotedParamRE)) {
                [, key, value, rest] = match;
                if (value.includes("\\")) try {
                    value = JSON.parse(`"${value}"`);
                } catch  {}
                parameters[key.toLowerCase()] = value;
                continue;
            }
            if (match = rest.match(unquotedParamRE)) {
                [, key, value, rest] = match;
                parameters[key.toLowerCase()] = value;
                continue;
            }
            if (match = rest.match(token68ParamRE)) {
                if (Object.keys(parameters).length) break;
                [, token68, rest] = match;
                break;
            }
            return;
        }
        else rest = afterScheme || void 0;
        const challenge = {
            scheme,
            parameters
        };
        if (token68) challenge.token68 = token68;
        challenges.push(challenge);
    }
    if (!challenges.length) return;
    return challenges;
}
async function parseOAuthResponseErrorBody(response) {
    if (response.status > 399 && response.status < 500) {
        assertReadableResponse(response);
        assertApplicationJson(response);
        try {
            const json = await response.clone().json();
            if (isJsonObject(json) && typeof json.error === "string" && json.error.length) return json;
        } catch  {}
    }
}
async function checkOAuthBodyError(response, expected, label) {
    if (response.status !== expected) {
        checkAuthenticationChallenges(response);
        let err;
        if (err = await parseOAuthResponseErrorBody(response)) {
            await response.body?.cancel();
            throw new ResponseBodyError("server responded with an error in the response body", {
                cause: err,
                response
            });
        }
        throw OPE(`"response" is not a conform ${label} response (unexpected HTTP status code)`, RESPONSE_IS_NOT_CONFORM, response);
    }
}
function assertDPoP(option) {
    if (!branded.has(option)) throw CodedTypeError("\"options.DPoP\" is not a valid DPoPHandle", ERR_INVALID_ARG_VALUE);
}
function getContentType(input) {
    return input.headers.get("content-type")?.split(";")[0];
}
async function authenticatedRequest(as, client, clientAuthentication, url, body, headers, options) {
    await clientAuthentication(as, client, body, headers);
    headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    return (options?.[customFetch] || fetch)(url.href, {
        body,
        headers: Object.fromEntries(headers.entries()),
        method: "POST",
        redirect: "manual",
        signal: signal(url, options?.signal)
    });
}
async function tokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    const url = resolveEndpoint(as, "token_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    parameters.set("grant_type", grantType);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
        assertDPoP(options.DPoP);
        await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, parameters, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
}
async function refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken, options) {
    assertAs(as);
    assertClient(client);
    assertString(refreshToken, "\"refreshToken\"");
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("refresh_token", refreshToken);
    return tokenEndpointRequest(as, client, clientAuthentication, "refresh_token", parameters, options);
}
const idTokenClaims = /* @__PURE__ */ new WeakMap();
const jwtRefs = /* @__PURE__ */ new WeakMap();
function getValidatedIdTokenClaims(ref) {
    if (!ref.id_token) return;
    const claims = idTokenClaims.get(ref);
    if (!claims) throw CodedTypeError("\"ref\" was already garbage collected or did not resolve from the proper sources", ERR_INVALID_ARG_VALUE);
    return claims;
}
async function processGenericAccessTokenResponse(as, client, response, additionalRequiredIdTokenClaims, decryptFn, recognizedTokenTypes) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) throw CodedTypeError("\"response\" must be an instance of Response", ERR_INVALID_ARG_TYPE);
    await checkOAuthBodyError(response, 200, "Token Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.access_token, "\"response\" body \"access_token\" property", INVALID_RESPONSE, {
        body: json
    });
    assertString(json.token_type, "\"response\" body \"token_type\" property", INVALID_RESPONSE, {
        body: json
    });
    json.token_type = json.token_type.toLowerCase();
    if (json.expires_in !== void 0) {
        let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
        assertNumber(expiresIn, true, "\"response\" body \"expires_in\" property", INVALID_RESPONSE, {
            body: json
        });
        json.expires_in = expiresIn;
    }
    if (json.refresh_token !== void 0) assertString(json.refresh_token, "\"response\" body \"refresh_token\" property", INVALID_RESPONSE, {
        body: json
    });
    if (json.scope !== void 0 && typeof json.scope !== "string") throw OPE("\"response\" body \"scope\" property must be a string", INVALID_RESPONSE, {
        body: json
    });
    if (json.id_token !== void 0) {
        assertString(json.id_token, "\"response\" body \"id_token\" property", INVALID_RESPONSE, {
            body: json
        });
        const requiredClaims = [
            "aud",
            "exp",
            "iat",
            "iss",
            "sub"
        ];
        if (client.require_auth_time === true) requiredClaims.push("auth_time");
        if (client.default_max_age !== void 0) {
            assertNumber(client.default_max_age, true, "\"client.default_max_age\"");
            requiredClaims.push("auth_time");
        }
        if (additionalRequiredIdTokenClaims?.length) requiredClaims.push(...additionalRequiredIdTokenClaims);
        const { claims, jwt } = await validateJwt(json.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), decryptFn).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
        if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
            if (claims.azp === void 0) throw OPE("ID Token \"aud\" (audience) claim includes additional untrusted audiences", JWT_CLAIM_COMPARISON, {
                claims,
                claim: "aud"
            });
            if (claims.azp !== client.client_id) throw OPE("unexpected ID Token \"azp\" (authorized party) claim value", JWT_CLAIM_COMPARISON, {
                expected: client.client_id,
                claims,
                claim: "azp"
            });
        }
        if (claims.auth_time !== void 0) assertNumber(claims.auth_time, true, "ID Token \"auth_time\" (authentication time)", INVALID_RESPONSE, {
            claims
        });
        jwtRefs.set(response, jwt);
        idTokenClaims.set(json, claims);
    }
    if (recognizedTokenTypes?.[json.token_type] !== void 0) recognizedTokenTypes[json.token_type](response, json);
    else if (json.token_type !== "dpop" && json.token_type !== "bearer") throw new UnsupportedOperationError("unsupported `token_type` value", {
        cause: {
            body: json
        }
    });
    return json;
}
function checkAuthenticationChallenges(response) {
    let challenges;
    if (challenges = parseWwwAuthenticateChallenges(response)) throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", {
        cause: challenges,
        response
    });
}
async function processRefreshTokenResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
}
function validateAudience(expected, result) {
    if (Array.isArray(result.claims.aud)) {
        if (!result.claims.aud.includes(expected)) throw OPE("unexpected JWT \"aud\" (audience) claim value", JWT_CLAIM_COMPARISON, {
            expected,
            claims: result.claims,
            claim: "aud"
        });
    } else if (result.claims.aud !== expected) throw OPE("unexpected JWT \"aud\" (audience) claim value", JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "aud"
    });
    return result;
}
function validateIssuer(as, result) {
    const expected = as[_expectedIssuer]?.(result) ?? as.issuer;
    if (result.claims.iss !== expected) throw OPE("unexpected JWT \"iss\" (issuer) claim value", JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "iss"
    });
    return result;
}
const branded = /* @__PURE__ */ new WeakSet();
function brand(searchParams) {
    branded.add(searchParams);
    return searchParams;
}
const nopkce = Symbol();
async function authorizationCodeGrantRequest(as, client, clientAuthentication, callbackParameters, redirectUri, codeVerifier, options) {
    assertAs(as);
    assertClient(client);
    if (!branded.has(callbackParameters)) throw CodedTypeError("\"callbackParameters\" must be an instance of URLSearchParams obtained from \"validateAuthResponse()\", or \"validateJwtAuthResponse()", ERR_INVALID_ARG_VALUE);
    assertString(redirectUri, "\"redirectUri\"");
    const code = getURLSearchParameter(callbackParameters, "code");
    if (!code) throw OPE("no authorization code in \"callbackParameters\"", INVALID_RESPONSE);
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("redirect_uri", redirectUri);
    parameters.set("code", code);
    if (codeVerifier !== nopkce) {
        assertString(codeVerifier, "\"codeVerifier\"");
        parameters.set("code_verifier", codeVerifier);
    }
    return tokenEndpointRequest(as, client, clientAuthentication, "authorization_code", parameters, options);
}
const jwtClaimNames = {
    aud: "audience",
    c_hash: "code hash",
    client_id: "client id",
    exp: "expiration time",
    iat: "issued at",
    iss: "issuer",
    jti: "jwt id",
    nonce: "nonce",
    s_hash: "state hash",
    sub: "subject",
    ath: "access token hash",
    htm: "http method",
    htu: "http uri",
    cnf: "confirmation",
    auth_time: "authentication time"
};
function validatePresence(required, result) {
    for (const claim of required)if (result.claims[claim] === void 0) throw OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`, INVALID_RESPONSE, {
        claims: result.claims
    });
    return result;
}
const expectNoNonce = Symbol();
const skipAuthTimeCheck = Symbol();
async function processAuthorizationCodeResponse(as, client, response, options) {
    if (typeof options?.expectedNonce === "string" || typeof options?.maxAge === "number" || options?.requireIdToken) return processAuthorizationCodeOpenIDResponse(as, client, response, options.expectedNonce, options.maxAge, options[jweDecrypt], options.recognizedTokenTypes);
    return processAuthorizationCodeOAuth2Response(as, client, response, options?.[jweDecrypt], options?.recognizedTokenTypes);
}
async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge, decryptFn, recognizedTokenTypes) {
    const additionalRequiredClaims = [];
    switch(expectedNonce){
        case void 0:
            expectedNonce = expectNoNonce;
            break;
        case expectNoNonce:
            break;
        default:
            assertString(expectedNonce, "\"expectedNonce\" argument");
            additionalRequiredClaims.push("nonce");
    }
    maxAge ??= client.default_max_age;
    switch(maxAge){
        case void 0:
            maxAge = skipAuthTimeCheck;
            break;
        case skipAuthTimeCheck:
            break;
        default:
            assertNumber(maxAge, true, "\"maxAge\" argument");
            additionalRequiredClaims.push("auth_time");
    }
    const result = await processGenericAccessTokenResponse(as, client, response, additionalRequiredClaims, decryptFn, recognizedTokenTypes);
    assertString(result.id_token, "\"response\" body \"id_token\" property", INVALID_RESPONSE, {
        body: result
    });
    const claims = getValidatedIdTokenClaims(result);
    if (maxAge !== skipAuthTimeCheck) {
        const now = epochTime() + getClockSkew(client);
        const tolerance = getClockTolerance(client);
        if (claims.auth_time + maxAge < now - tolerance) throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance,
            claim: "auth_time"
        });
    }
    if (expectedNonce === expectNoNonce) {
        if (claims.nonce !== void 0) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
            expected: void 0,
            claims,
            claim: "nonce"
        });
    } else if (claims.nonce !== expectedNonce) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
        expected: expectedNonce,
        claims,
        claim: "nonce"
    });
    return result;
}
async function processAuthorizationCodeOAuth2Response(as, client, response, decryptFn, recognizedTokenTypes) {
    const result = await processGenericAccessTokenResponse(as, client, response, void 0, decryptFn, recognizedTokenTypes);
    const claims = getValidatedIdTokenClaims(result);
    if (claims) {
        if (client.default_max_age !== void 0) {
            assertNumber(client.default_max_age, true, "\"client.default_max_age\"");
            const now = epochTime() + getClockSkew(client);
            const tolerance = getClockTolerance(client);
            if (claims.auth_time + client.default_max_age < now - tolerance) throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, {
                claims,
                now,
                tolerance,
                claim: "auth_time"
            });
        }
        if (claims.nonce !== void 0) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
            expected: void 0,
            claims,
            claim: "nonce"
        });
    }
    return result;
}
const WWW_AUTHENTICATE_CHALLENGE = "OAUTH_WWW_AUTHENTICATE_CHALLENGE";
const RESPONSE_BODY_ERROR = "OAUTH_RESPONSE_BODY_ERROR";
const UNSUPPORTED_OPERATION = "OAUTH_UNSUPPORTED_OPERATION";
const AUTHORIZATION_RESPONSE_ERROR = "OAUTH_AUTHORIZATION_RESPONSE_ERROR";
const PARSE_ERROR = "OAUTH_PARSE_ERROR";
const INVALID_RESPONSE = "OAUTH_INVALID_RESPONSE";
const RESPONSE_IS_NOT_JSON = "OAUTH_RESPONSE_IS_NOT_JSON";
const RESPONSE_IS_NOT_CONFORM = "OAUTH_RESPONSE_IS_NOT_CONFORM";
const HTTP_REQUEST_FORBIDDEN = "OAUTH_HTTP_REQUEST_FORBIDDEN";
const REQUEST_PROTOCOL_FORBIDDEN = "OAUTH_REQUEST_PROTOCOL_FORBIDDEN";
const JWT_TIMESTAMP_CHECK = "OAUTH_JWT_TIMESTAMP_CHECK_FAILED";
const JWT_CLAIM_COMPARISON = "OAUTH_JWT_CLAIM_COMPARISON_FAILED";
const MISSING_SERVER_METADATA = "OAUTH_MISSING_SERVER_METADATA";
const INVALID_SERVER_METADATA = "OAUTH_INVALID_SERVER_METADATA";
function assertReadableResponse(response) {
    if (response.bodyUsed) throw CodedTypeError("\"response\" body has been used already", ERR_INVALID_ARG_VALUE);
}
async function validateJwt(jws, checkAlg, clockSkew, clockTolerance, decryptJwt) {
    let { 0: protectedHeader, 1: payload, length } = jws.split(".");
    if (length === 5) if (decryptJwt !== void 0) {
        jws = await decryptJwt(jws);
        ({ 0: protectedHeader, 1: payload, length } = jws.split("."));
    } else throw new UnsupportedOperationError("JWE decryption is not configured", {
        cause: jws
    });
    if (length !== 3) throw OPE("Invalid JWT", INVALID_RESPONSE, jws);
    let header;
    try {
        header = JSON.parse(buf(b64u(protectedHeader)));
    } catch (cause) {
        throw OPE("failed to parse JWT Header body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(header)) throw OPE("JWT Header must be a top level object", INVALID_RESPONSE, jws);
    checkAlg(header);
    if (header.crit !== void 0) throw new UnsupportedOperationError("no JWT \"crit\" header parameter extensions are supported", {
        cause: {
            header
        }
    });
    let claims;
    try {
        claims = JSON.parse(buf(b64u(payload)));
    } catch (cause) {
        throw OPE("failed to parse JWT Payload body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(claims)) throw OPE("JWT Payload must be a top level object", INVALID_RESPONSE, jws);
    const now = epochTime() + clockSkew;
    if (claims.exp !== void 0) {
        if (typeof claims.exp !== "number") throw OPE("unexpected JWT \"exp\" (expiration time) claim type", INVALID_RESPONSE, {
            claims
        });
        if (claims.exp <= now - clockTolerance) throw OPE("unexpected JWT \"exp\" (expiration time) claim value, expiration is past current timestamp", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance: clockTolerance,
            claim: "exp"
        });
    }
    if (claims.iat !== void 0) {
        if (typeof claims.iat !== "number") throw OPE("unexpected JWT \"iat\" (issued at) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    if (claims.iss !== void 0) {
        if (typeof claims.iss !== "string") throw OPE("unexpected JWT \"iss\" (issuer) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    if (claims.nbf !== void 0) {
        if (typeof claims.nbf !== "number") throw OPE("unexpected JWT \"nbf\" (not before) claim type", INVALID_RESPONSE, {
            claims
        });
        if (claims.nbf > now + clockTolerance) throw OPE("unexpected JWT \"nbf\" (not before) claim value", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance: clockTolerance,
            claim: "nbf"
        });
    }
    if (claims.aud !== void 0) {
        if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) throw OPE("unexpected JWT \"aud\" (audience) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    return {
        header,
        claims,
        jwt: jws
    };
}
function checkSigningAlgorithm(client, issuer, fallback, header) {
    if (client !== void 0) {
        if (typeof client === "string" ? header.alg !== client : !client.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: client,
            reason: "client configuration"
        });
        return;
    }
    if (Array.isArray(issuer)) {
        if (!issuer.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: issuer,
            reason: "authorization server metadata"
        });
        return;
    }
    if (fallback !== void 0) {
        if (typeof fallback === "string" ? header.alg !== fallback : typeof fallback === "function" ? !fallback(header.alg) : !fallback.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: fallback,
            reason: "default value"
        });
        return;
    }
    throw OPE("missing client or server configuration to verify used JWT \"alg\" header parameter", void 0, {
        client,
        issuer,
        fallback
    });
}
function getURLSearchParameter(parameters, name) {
    const { 0: value, length } = parameters.getAll(name);
    if (length > 1) throw OPE(`"${name}" parameter must be provided only once`, INVALID_RESPONSE);
    return value;
}
const skipStateCheck = Symbol();
const expectNoState = Symbol();
function validateAuthResponse(as, client, parameters, expectedState) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) parameters = parameters.searchParams;
    if (!(parameters instanceof URLSearchParams)) throw CodedTypeError("\"parameters\" must be an instance of URLSearchParams, or URL", ERR_INVALID_ARG_TYPE);
    if (getURLSearchParameter(parameters, "response")) throw OPE("\"parameters\" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()", INVALID_RESPONSE, {
        parameters
    });
    const iss = getURLSearchParameter(parameters, "iss");
    const state = getURLSearchParameter(parameters, "state");
    if (!iss && as.authorization_response_iss_parameter_supported) throw OPE("response parameter \"iss\" (issuer) missing", INVALID_RESPONSE, {
        parameters
    });
    if (iss && iss !== as.issuer) throw OPE("unexpected \"iss\" (issuer) response parameter value", INVALID_RESPONSE, {
        expected: as.issuer,
        parameters
    });
    switch(expectedState){
        case void 0:
        case expectNoState:
            if (state !== void 0) throw OPE("unexpected \"state\" response parameter encountered", INVALID_RESPONSE, {
                expected: void 0,
                parameters
            });
            break;
        case skipStateCheck:
            break;
        default:
            assertString(expectedState, "\"expectedState\" argument");
            if (state !== expectedState) throw OPE(state === void 0 ? "response parameter \"state\" missing" : "unexpected \"state\" response parameter value", INVALID_RESPONSE, {
                expected: expectedState,
                parameters
            });
    }
    if (getURLSearchParameter(parameters, "error")) throw new AuthorizationResponseError("authorization response from the server is an error", {
        cause: parameters
    });
    const id_token = getURLSearchParameter(parameters, "id_token");
    const token = getURLSearchParameter(parameters, "token");
    if (id_token !== void 0 || token !== void 0) throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
    return brand(new URLSearchParams(parameters));
}
async function getResponseJsonBody(response, check = assertApplicationJson) {
    let json;
    try {
        json = await response.json();
    } catch (cause) {
        check(response);
        throw OPE("failed to parse \"response\" body as JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(json)) throw OPE("\"response\" body must be a top level object", INVALID_RESPONSE, {
        body: json
    });
    return json;
}
const _expectedIssuer = Symbol();
//#endregion
//#region src/interface/client-interface.ts
var ApiUrlsFailedError = class extends AggregateError {
    constructor(urlFailures){
        const primaryFailure = urlFailures[0] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("ApiUrlsFailedError requires at least one URL failure");
        super(urlFailures.map(({ error })=>error), `All API URLs failed; primary URL ${primaryFailure.url} failed: ${primaryFailure.error.message}`, {
            cause: primaryFailure.error
        });
        this.name = "ApiUrlsFailedError";
        this.urlFailures = urlFailures;
        if ("digest" in primaryFailure.error) Object.defineProperty(this, "digest", {
            value: primaryFailure.error.digest,
            enumerable: true
        });
    }
};
const botChallengeKnownErrors = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeRequired,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeFailed
];
function isBotChallengeKnownError(error) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeRequired.isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].BotChallengeFailed.isInstance(error);
}
function getBotChallengeRequestFields(botChallenge, context) {
    if (botChallenge?.unavailable) {
        if (botChallenge.token != null || botChallenge.phase != null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`${context} bot challenge unavailability cannot be combined with a token or phase.`);
        return {
            bot_challenge_unavailable: "true"
        };
    }
    const challengeToken = botChallenge?.token?.trim() || void 0;
    if (botChallenge?.phase === "visible") {
        if (challengeToken == null) return {
            bot_challenge_unavailable: "true"
        };
        return {
            bot_challenge_token: challengeToken,
            bot_challenge_phase: "visible"
        };
    }
    if (challengeToken == null) {
        if (botChallenge?.phase != null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`${context} bot challenge phase options require a token.`);
        return {};
    }
    if (botChallenge?.phase == null) return {
        bot_challenge_token: challengeToken
    };
    return {
        bot_challenge_token: challengeToken,
        bot_challenge_phase: "invisible"
    };
}
async function encodeGzipJsonBody(jsonBody, options) {
    if (options.keepalive) return {
        body: jsonBody,
        contentType: "application/json"
    };
    const CompressionStreamCtor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].CompressionStream;
    if (typeof CompressionStreamCtor !== "function" || typeof Blob === "undefined" || typeof Response === "undefined") return {
        body: jsonBody,
        contentType: "application/json"
    };
    try {
        const stream = new Blob([
            jsonBody
        ]).stream().pipeThrough(new CompressionStreamCtor("gzip"));
        const buffer = await new Response(stream).arrayBuffer();
        return {
            body: new Uint8Array(buffer),
            contentType: "application/octet-stream"
        };
    } catch  {
        return {
            body: jsonBody,
            contentType: "application/json"
        };
    }
}
var HexclaveClientInterface = class {
    constructor(options){
        this.options = options;
        this._requestListeners = /* @__PURE__ */ new Set();
        this._currentTargetApiUrl = null;
    }
    addRequestListener(listener) {
        this._requestListeners.add(listener);
        return ()=>{
            this._requestListeners.delete(listener);
        };
    }
    get projectId() {
        return this.options.projectId;
    }
    getApiUrl() {
        return this.options.getBaseUrl() + "/api/v1";
    }
    getApiUrls() {
        return this.options.getApiUrls().map((u)=>u + "/api/v1");
    }
    /**
	* Returns the current target API URL for browser-navigated URLs (e.g. OAuth
	* authorize) where `_withFallback` can't iterate hosts. Falls back to the
	* primary if the remembered URL is no longer in the list.
	*/ getCurrentTargetApiUrl() {
        const apiUrls = this.getApiUrls();
        if (this._currentTargetApiUrl != null && apiUrls.includes(this._currentTargetApiUrl)) return this._currentTargetApiUrl;
        return apiUrls[0];
    }
    /**
	* @deprecated Use {@link getCurrentTargetApiUrl} instead.
	*/ getBestApiUrl() {
        return this.getCurrentTargetApiUrl();
    }
    /**
	* Routes a request through an ordered URL ring with automatic failover.
	*
	* Starts at `_currentTargetApiUrl` (or primary if unset). On an outage-like
	* failure, walks `(start + k) % n` for two full laps. On success, remembers
	* that URL as the new current target. KnownErrors and smart-wrapped 4xx
	* responses are never retried on another host (application-level errors).
	*
	* Single-URL lists skip the ring and use 5-retry behavior directly.
	*/ async _withFallback(cb) {
        const apiUrls = this.getApiUrls();
        if (apiUrls.length <= 1) return await cb(apiUrls[0], {
            maxAttempts: 5,
            skipDiagnostics: false
        });
        const start = Math.max(0, this._currentTargetApiUrl != null ? apiUrls.indexOf(this._currentTargetApiUrl) : 0);
        const errorsByUrl = /* @__PURE__ */ new Map();
        for(let k = 0; k < apiUrls.length * 2; k++){
            const i = (start + k) % apiUrls.length;
            try {
                const result = await cb(apiUrls[i], {
                    maxAttempts: 1,
                    skipDiagnostics: true
                });
                this._currentTargetApiUrl = apiUrls[i];
                return result;
            } catch (e) {
                if (this._shouldSkipFallback(e)) {
                    this._currentTargetApiUrl = apiUrls[i];
                    throw e;
                }
                errorsByUrl.set(i, e instanceof Error ? e : new Error(String(e)));
            }
        }
        throw new ApiUrlsFailedError(apiUrls.map((url, i)=>({
                url,
                error: errorsByUrl.get(i) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(`Missing failure for API URL ${url}`)
            })));
    }
    /**
	* Returns true when the error is an application-level response that should
	* not hop to another host. Outages (network TypeError, 5xx, non-smart 4xx)
	* return false so the ring walk continues.
	*/ _shouldSkipFallback(error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownError"]) return true;
        const response = this._getApiResponseFromError(error);
        if (response == null) return false;
        if (response.status >= 500) return false;
        if (response.status >= 400 && response.status < 500) return this._isSmartWrappedResponse(response);
        return false;
    }
    _isSmartWrappedResponse(response) {
        return response.headers.has("x-hexclave-request-id") || response.headers.has("x-stack-request-id") || response.headers.has("x-hexclave-known-error") || response.headers.has("x-stack-known-error");
    }
    _getApiResponseFromError(error, seenErrors = /* @__PURE__ */ new Set()) {
        if (error instanceof Response) return error;
        if (!(error instanceof Error) || seenErrors.has(error)) return null;
        seenErrors.add(error);
        return this._getApiResponseFromError(error.cause, seenErrors);
    }
    getAnalyticsApiUrl() {
        return (this.options.getAnalyticsBaseUrl ?? this.options.getBaseUrl)() + "/api/v1";
    }
    async runNetworkDiagnostics(session, requestType) {
        if (this.pendingNetworkDiagnostics) return await this.pendingNetworkDiagnostics;
        this.pendingNetworkDiagnostics = this._runNetworkDiagnosticsInner(session, requestType);
        try {
            return await this.pendingNetworkDiagnostics;
        } finally{
            this.pendingNetworkDiagnostics = void 0;
        }
    }
    async _runNetworkDiagnosticsInner(session, requestType) {
        const tryRequest = async (cb)=>{
            try {
                await cb();
                return "OK";
            } catch (e) {
                return `${e}`;
            }
        };
        const cfTrace = await tryRequest(async ()=>{
            const res = await fetch("https://1.1.1.1/cdn-cgi/trace");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const baseUrlBackend = await tryRequest(async ()=>{
            const res = await fetch(new URL("/health", this.getApiUrl()));
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const prodDashboard = await tryRequest(async ()=>{
            const res = await fetch("https://app.hexclave.com/health");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const prodBackend = await tryRequest(async ()=>{
            const res = await fetch("https://api.hexclave.com/health");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        return {
            "navigator?.onLine": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].navigator?.onLine,
            cfTrace,
            baseUrlBackend,
            prodDashboard,
            prodBackend
        };
    }
    async _createNetworkError(cause, session, requestType) {
        return new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      Hexclave is unable to connect to the server. Please check your internet connection and try again.

      If the problem persists, please contact support and provide a screenshot of your entire browser console.

      ${cause}

      ${JSON.stringify(await this.runNetworkDiagnostics(session, requestType), null, 2)}
    `, {
            cause
        });
    }
    async _networkRetry(cb, session, requestType, options) {
        const retriedResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].retry(cb, options?.maxAttempts ?? 5, {
            exponentialDelayBase: 1e3
        });
        if (retriedResult.status === "error") {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].navigator && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].navigator.onLine === false) throw new Error("You are offline. Please check your internet connection and try again. (window.navigator.onLine is false)", {
                cause: retriedResult.error
            });
            if (options?.skipDiagnostics) throw retriedResult.error;
            throw await this._createNetworkError(retriedResult.error, session, requestType);
        }
        return retriedResult.data;
    }
    async _networkRetryException(cb, session, requestType, options) {
        return await this._networkRetry(async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromThrowingAsync(cb), session, requestType, options);
    }
    async fetchNewAccessToken(refreshToken) {
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for fetching new access token. Did you try to log in on a StackApp initiated with the admin session?");
        const clientSecret = this.options.publishableClientKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishableClientKeyNotNecessarySentinel"];
        return await this._withFallback(async (apiUrl, retryOptions)=>{
            return await this._fetchNewAccessTokenInner(refreshToken, clientSecret, apiUrl, retryOptions);
        });
    }
    async _fetchNewAccessTokenInner(refreshToken, clientSecret, apiUrl, retryOptions) {
        const tokenEndpoint = apiUrl + "/auth/oauth/token";
        const as = {
            issuer: this.options.getBaseUrl(),
            algorithm: "oauth2",
            token_endpoint: tokenEndpoint
        };
        const client = {
            client_id: this.projectId,
            client_secret: clientSecret
        };
        const clientAuthentication = ClientSecretPost(clientSecret);
        const allowInsecure = tokenEndpoint.startsWith("http://");
        const response = await this._networkRetryException(async ()=>{
            const rawResponse = await refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken.token, {
                ...allowInsecure ? {
                    [allowInsecureRequests]: true
                } : {},
                [customFetch]: (url, options)=>fetch(url, {
                        ...options,
                        headers: {
                            ...options.headers,
                            "X-Hexclave-Random-Nonce": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSecureRandomString"])()
                        },
                        ..."WebSocketPair" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"] ? {} : {
                            cache: "no-store"
                        }
                    })
            });
            const response = await this._processResponse(rawResponse);
            if (response.status === "error") {
                const error = response.error;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].RefreshTokenError.isInstance(error)) return null;
                throw error;
            }
            if (!response.data.ok) {
                const body = await response.data.text();
                throw new Error(`Failed to send refresh token request: ${response.status} ${body}`, {
                    cause: response.data
                });
            }
            return response.data;
        }, void 0, void 0, retryOptions);
        if (!response) return null;
        let result;
        try {
            result = await processRefreshTokenResponse(as, client, response);
        } catch (e) {
            if (e instanceof ResponseBodyError) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("ResponseBodyError when processing refresh token response", {
                cause: e.cause,
                code: e.code,
                error: e.error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected error when processing refresh token response", {
                cause: e
            });
        }
        if (!result.access_token) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Access token not found in token endpoint response, this is weird!");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessToken"].createIfValid(result.access_token) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Access token in fetchNewAccessToken is invalid, looks like the backend is returning an invalid token!", {
            result
        });
    }
    async sendClientRequest(path, requestOptions, session, requestType = "client", apiUrlOverride, retryOptions) {
        session ??= this.createSession({
            refreshToken: null
        });
        if (apiUrlOverride) return await this._networkRetry(()=>this.sendClientRequestInner(path, requestOptions, session, requestType, apiUrlOverride, retryOptions), session, requestType, retryOptions);
        return await this._withFallback(async (apiUrl, fallbackRetryOptions)=>{
            return await this._networkRetry(()=>this.sendClientRequestInner(path, requestOptions, session, requestType, apiUrl, retryOptions), session, requestType, {
                ...fallbackRetryOptions,
                ...retryOptions
            });
        });
    }
    createSession(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalSession"]({
            refreshAccessTokenCallback: async (refreshToken)=>await this.fetchNewAccessToken(refreshToken),
            ...options
        });
    }
    async sendSessionReplayBatch(body, session, options) {
        try {
            const encoded = await encodeGzipJsonBody(body, {
                keepalive: options.keepalive
            });
            const response = await this.sendClientRequest("/session-replays/batch", {
                method: "POST",
                headers: {
                    "Content-Type": encoded.contentType
                },
                body: encoded.body,
                keepalive: options.keepalive
            }, session, "client", this.getAnalyticsApiUrl(), {
                maxAttempts: 1,
                skipDiagnostics: true
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(response);
        } catch (e) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e instanceof Error ? e : new Error(String(e)));
        }
    }
    async sendAnalyticsEventBatch(body, session, options) {
        try {
            const encoded = await encodeGzipJsonBody(body, {
                keepalive: options.keepalive
            });
            const response = await this.sendClientRequest("/analytics/events/batch", {
                method: "POST",
                headers: {
                    "Content-Type": encoded.contentType
                },
                body: encoded.body,
                keepalive: options.keepalive
            }, session, "client", this.getAnalyticsApiUrl(), {
                maxAttempts: 1,
                skipDiagnostics: true
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(response);
        } catch (e) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e instanceof Error ? e : new Error(String(e)));
        }
    }
    async sendClientRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await this.sendClientRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
    }
    async sendClientRequestInner(path, options, session, requestType, apiUrlOverride, innerOptions) {
        /**
		* `tokenObj === null` means the session is invalid/not logged in
		*/ let tokenObj = await session.getOrFetchLikelyValidTokens(2e4, null);
        let adminSession = null;
        let adminTokenObj = null;
        if ("projectOwnerSession" in this.options) {
            const projectOwnerSession = this.options.projectOwnerSession;
            if (typeof projectOwnerSession === "function") {
                const accessTokenString = await projectOwnerSession();
                if (accessTokenString) {
                    const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessToken"].createIfValid(accessTokenString);
                    if (accessToken) adminTokenObj = {
                        accessToken,
                        refreshToken: null
                    };
                }
            } else {
                adminSession = projectOwnerSession;
                adminTokenObj = await projectOwnerSession.getOrFetchLikelyValidTokens(2e4, null);
            }
        }
        await this.options.prepareRequest?.();
        let url = (apiUrlOverride ?? this.getApiUrl()) + path;
        if (url.endsWith("/")) url = url.slice(0, -1);
        const params = {
            /**
			* This fetch may be cross-origin, in which case we don't want to send cookies of the
			* original origin (this is the default behavior of `credentials`).
			*
			* To help debugging, also omit cookies on same-origin, so we don't accidentally
			* implement reliance on cookies anywhere.
			*
			* However, Cloudflare Workers don't actually support `credentials`, so we only set it
			* if Cloudflare-exclusive globals are not detected. https://github.com/cloudflare/workers-sdk/issues/2514
			*/ ..."WebSocketPair" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"] ? {} : {
                credentials: "omit"
            },
            ...options,
            headers: {
                "X-Hexclave-Override-Error-Status": "true",
                "X-Hexclave-Project-Id": this.projectId,
                "X-Hexclave-Access-Type": requestType,
                "X-Hexclave-Client-Version": this.options.clientVersion,
                ...tokenObj ? {
                    "X-Hexclave-Access-Token": tokenObj.accessToken.token
                } : {},
                ...tokenObj?.refreshToken ? {
                    "X-Hexclave-Refresh-Token": tokenObj.refreshToken.token
                } : {},
                "X-Hexclave-Allow-Anonymous-User": "true",
                ..."publishableClientKey" in this.options && this.options.publishableClientKey ? {
                    "X-Hexclave-Publishable-Client-Key": this.options.publishableClientKey
                } : {},
                ...adminTokenObj ? {
                    "X-Hexclave-Admin-Access-Token": adminTokenObj.accessToken.token
                } : {},
                /**
				* Next.js until v15 would cache fetch requests by default, and forcefully disabling it was nearly impossible.
				*
				* This header is used to change the cache key and hence always disable it, because we do our own caching.
				*
				* When we drop support for Next.js <15, we may be able to remove this header, but please make sure that this is
				* the case (I haven't actually tested.)
				*/ "X-Hexclave-Random-Nonce": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSecureRandomString"])(),
                "ngrok-skip-browser-warning": "true",
                ...this.options.extraRequestHeaders,
                ...options.headers
            },
            /**
			* Cloudflare Workers does not support cache, so don't pass it there
			*/ ..."WebSocketPair" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"] ? {} : {
                cache: "no-store"
            }
        };
        const startTime = performance.now();
        let rawRes;
        try {
            rawRes = await fetch(url, params);
        } catch (e) {
            if (this._requestListeners.size > 0) {
                const entry = {
                    path,
                    method: (params.method ?? "GET").toUpperCase(),
                    duration: Math.round(performance.now() - startTime),
                    error: e instanceof Error ? e.message : "Network error"
                };
                this._requestListeners.forEach((l)=>l(entry));
            }
            if (e instanceof TypeError) if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTP_METHODS"][params.method ?? "GET"].idempotent) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            else if (innerOptions?.skipDiagnostics) throw e;
            else throw await this._createNetworkError(e, session, requestType);
            throw e;
        }
        const preprocessedRes = await this._preprocessResponse(rawRes);
        if (this._requestListeners.size > 0) {
            const entry = {
                path,
                method: (params.method ?? "GET").toUpperCase(),
                status: preprocessedRes.status,
                duration: Math.round(performance.now() - startTime)
            };
            this._requestListeners.forEach((l)=>l(entry));
        }
        const processedRes = await this._processResponse(preprocessedRes);
        if (processedRes.status === "error") {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidAccessToken.isInstance(processedRes.error)) {
                if (!tokenObj) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Received invalid access token, but session is not logged in", {
                    tokenObj,
                    processedRes
                });
                session.markAccessTokenExpired(tokenObj.accessToken);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(processedRes.error);
            }
            if (adminSession && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].InvalidAdminAccessToken.isInstance(processedRes.error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ApiKeyNotFound.isInstance(processedRes.error))) {
                if (!adminTokenObj) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Received invalid admin access token, but admin session is not logged in", {
                    adminTokenObj,
                    processedRes
                });
                adminSession.markAccessTokenExpired(adminTokenObj.accessToken);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(processedRes.error);
            }
            throw processedRes.error;
        }
        const res = Object.assign(processedRes.data, {
            usedTokens: tokenObj
        });
        if (res.ok) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(res);
        else if (res.status === 429) {
            const retryAfter = res.headers.get("Retry-After");
            if (retryAfter !== null) {
                console.log(`Rate limited while sending request to ${url}. Will retry after ${retryAfter} seconds...`);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])(Number(retryAfter) * 1e3);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(/* @__PURE__ */ new Error(`Rate limited, retrying after ${retryAfter} seconds`));
            }
            console.log(`Rate limited while sending request to ${url}, no retry-after header received. Retrying with default backoff...`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(/* @__PURE__ */ new Error("Rate limited, no retry-after header received"));
        } else {
            const error = await res.text();
            if (res.status >= 400 && res.status < 500) throw new Error(`Failed to send request to ${url}: ${res.status} ${error}`, {
                cause: res
            });
            const errorObj = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Failed to send request to ${url}: ${res.status} ${error}`, {
                request: params,
                res,
                path
            });
            if (res.status === 508 && error.includes("INFINITE_LOOP_DETECTED")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(errorObj);
            throw errorObj;
        }
    }
    async _preprocessResponse(rawRes) {
        let res = rawRes;
        if (rawRes.headers.has("x-hexclave-actual-status") || rawRes.headers.has("x-stack-actual-status")) {
            const actualStatus = Number(rawRes.headers.get("x-hexclave-actual-status") ?? rawRes.headers.get("x-stack-actual-status"));
            res = new Response(rawRes.body, {
                status: actualStatus,
                statusText: rawRes.statusText,
                headers: rawRes.headers
            });
        }
        return res;
    }
    async _processResponse(res) {
        if (res.headers.has("x-hexclave-known-error") || res.headers.has("x-stack-known-error")) {
            const errorJson = await res.json();
            if ((res.headers.get("x-hexclave-known-error") ?? res.headers.get("x-stack-known-error")) !== errorJson.code) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Mismatch between x-hexclave-known-error/x-stack-known-error header and error code in body; the server's response is invalid");
            const error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownError"].fromJson(errorJson);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(error);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(res);
    }
    async checkFeatureSupport(options) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](await (await this.sendClientRequest("/check-feature-support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).text());
    }
    async consumeBrowserAction(actionId, session = null) {
        const body = await (await this.sendClientRequest("/browser-actions/consume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action_id: actionId
            })
        }, session, "client")).json();
        if (typeof body !== "object" || body === null || !("javascript" in body) || typeof body.javascript !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Browser action endpoint returned an invalid response");
        return {
            javascript: body.javascript
        };
    }
    async sendForgotPasswordEmail(email, callbackUrl) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/send-reset-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].UserNotFound
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async sendVerificationEmail(email, callbackUrl, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/contact-channels/send-verification-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].EmailAlreadyVerified
        ]);
        if (res.status === "error") return res.error;
    }
    async sendMagicLinkEmail(email, callbackUrl, botChallenge) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/otp/send-sign-in-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl,
                ...getBotChallengeRequestFields(botChallenge, "Magic link sign-in")
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].RedirectUrlNotWhitelisted,
            ...botChallengeKnownErrors
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await res.data.json());
    }
    async resetPassword(options) {
        const res = await this.sendClientRequestAndCatchKnownError("onlyVerifyCode" in options ? "/auth/password/reset/check-code" : "/auth/password/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: options.code,
                ..."password" in options ? {
                    password: options.password
                } : {}
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].VerificationCodeError
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async updatePassword(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                old_password: options.oldPassword,
                new_password: options.newPassword
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordConfirmationMismatch,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async setPassword(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/set", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async verifyPasswordResetCode(code) {
        const res = await this.resetPassword({
            code,
            onlyVerifyCode: true
        });
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async verifyEmail(code) {
        const res = await this.sendClientRequestAndCatchKnownError("/contact-channels/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].VerificationCodeError
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async initiatePasskeyRegistration(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, []);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await res.data.json());
    }
    async registerPasskey(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyRegistrationFailed
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async initiatePasskeyAuthentication(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-authentication", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, []);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await res.data.json());
    }
    async sendTeamInvitation(options) {
        await this.sendClientRequest("/team-invitations/send-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: options.email,
                team_id: options.teamId,
                callback_url: options.callbackUrl
            })
        }, options.session);
    }
    async acceptTeamInvitation(options) {
        const res = await this.sendClientRequestAndCatchKnownError(options.type === "check" ? "/team-invitations/accept/check-code" : options.type === "details" ? "/team-invitations/accept/details" : "/team-invitations/accept", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: options.code
            })
        }, options.session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].VerificationCodeError,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].TeamInvitationEmailMismatch
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await res.data.json());
    }
    async totpMfa(attemptCode, totp, session) {
        const result = await (await this.sendClientRequest("/auth/mfa/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: attemptCode,
                type: "totp",
                totp
            })
        }, session)).json();
        return {
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        };
    }
    async signInWithCredential(email, password, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].EmailPasswordMismatch
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signUpWithCredential(email, password, emailVerificationRedirectUrl, session, botChallenge) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/sign-up", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                verification_callback_url: emailVerificationRedirectUrl,
                ...getBotChallengeRequestFields(botChallenge, "Credential sign-up")
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].UserWithEmailAlreadyExists,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ContactChannelAlreadyUsedForAuthBySomeoneElse,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordRequirementsNotMet,
            ...botChallengeKnownErrors
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signUpAnonymously(session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/anonymous/sign-up", {
            method: "POST"
        }, session, []);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signInWithMagicLink(code, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/otp/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].VerificationCodeError
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        });
    }
    async signInWithMfa(totp, code, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/mfa/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "totp",
                totp,
                code
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].VerificationCodeError
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        });
    }
    async signInWithPasskey(body, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasskeyAuthenticationFailed
        ]);
        if (res.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(res.error);
        const result = await res.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async getOAuthUrl(options) {
        const updatedRedirectUrl = new URL(options.redirectUrl);
        for (const key of [
            "code",
            "state"
        ]){
            if (updatedRedirectUrl.searchParams.has(key)) console.warn("Redirect URL already contains " + key + " parameter, removing it as it will be overwritten by the OAuth callback");
            updatedRedirectUrl.searchParams.delete(key);
        }
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for OAuth");
        const clientSecret = this.options.publishableClientKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishableClientKeyNotNecessarySentinel"];
        const url = new URL(this.getCurrentTargetApiUrl() + "/auth/oauth/authorize/" + options.provider.toLowerCase());
        url.searchParams.set("client_id", this.projectId);
        url.searchParams.set("client_secret", clientSecret);
        url.searchParams.set("redirect_uri", updatedRedirectUrl.toString());
        url.searchParams.set("scope", "legacy");
        url.searchParams.set("state", options.state);
        url.searchParams.set("grant_type", "authorization_code");
        url.searchParams.set("code_challenge", options.codeChallenge);
        url.searchParams.set("code_challenge_method", "S256");
        url.searchParams.set("response_type", "code");
        url.searchParams.set("type", options.type);
        url.searchParams.set("error_redirect_url", options.errorRedirectUrl);
        const tokens = await options.session.getOrFetchLikelyValidTokens(45e3, 6e4);
        if (tokens) url.searchParams.set("token", tokens.accessToken.token);
        if (options.afterCallbackRedirectUrl) url.searchParams.set("after_callback_redirect_url", options.afterCallbackRedirectUrl);
        if (options.providerScope) url.searchParams.set("provider_scope", options.providerScope);
        for (const [key, value] of Object.entries(getBotChallengeRequestFields(options.botChallenge, `OAuth ${options.type}`)))url.searchParams.set(key, value);
        return url.toString();
    }
    async authorizeOAuth(options) {
        if (typeof window === "undefined") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("authorizeOAuth can currently only be called in a browser environment");
        await this.options.prepareRequest?.();
        const url = new URL(await this.getOAuthUrl(options));
        url.searchParams.set("hexclave_response_mode", "json");
        url.searchParams.set("stack_response_mode", "json");
        let rawRes;
        try {
            rawRes = await fetch(url, {
                method: "GET"
            });
        } catch (error) {
            if (error instanceof TypeError) throw await this._createNetworkError(error, options.session, "client");
            throw error;
        }
        const processedResponse = await this._processResponse(rawRes);
        if (processedResponse.status === "error") {
            if (isBotChallengeKnownError(processedResponse.error)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(processedResponse.error);
            throw processedResponse.error;
        }
        if (processedResponse.data.status !== 200) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`OAuth authorize returned an unexpected status: ${processedResponse.data.status}`);
        const body = await processedResponse.data.json();
        if (body == null || typeof body !== "object" || Array.isArray(body)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("OAuth authorize response body must be an object", {
            body
        });
        const location = body.location;
        if (typeof location !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("OAuth authorize response is missing a redirect location", {
            body
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(location);
    }
    async callOAuthCallback(options) {
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for OAuth");
        const clientSecret = this.options.publishableClientKey ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishableClientKeyNotNecessarySentinel"];
        return await this._withFallback(async (apiUrl)=>{
            return await this._callOAuthCallbackInner(options, clientSecret, apiUrl);
        });
    }
    async _callOAuthCallbackInner(options, clientSecret, apiUrl) {
        const tokenEndpoint = apiUrl + "/auth/oauth/token";
        const as = {
            issuer: this.options.getBaseUrl(),
            algorithm: "oauth2",
            token_endpoint: tokenEndpoint
        };
        const client = {
            client_id: this.projectId,
            client_secret: clientSecret
        };
        const clientAuthentication = ClientSecretPost(clientSecret);
        const allowInsecure = tokenEndpoint.startsWith("http://");
        let params;
        try {
            params = validateAuthResponse(as, client, options.oauthParams, options.state);
        } catch (e) {
            if (e instanceof AuthorizationResponseError) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Authorization response error when validating outer OAuth response", {
                cause: Object.fromEntries(e.cause),
                code: e.code,
                error: e.error
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected error when validating outer OAuth response", {
                cause: e
            });
        }
        const response = await authorizationCodeGrantRequest(as, client, clientAuthentication, params, options.redirectUri, options.codeVerifier, allowInsecure ? {
            [allowInsecureRequests]: true
        } : void 0);
        let result;
        try {
            result = await processAuthorizationCodeResponse(as, client, response);
        } catch (e) {
            if (e instanceof ResponseBodyError) {
                if (e.cause.code === "MULTI_FACTOR_AUTHENTICATION_REQUIRED") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].MultiFactorAuthenticationRequired(e.cause.details.attempt_code);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Outer OAuth error during authorization code response", {
                    cause: e.cause,
                    code: e.code,
                    error: e.error
                });
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected error when processing authorization code response", {
                cause: e
            });
        }
        return {
            newUser: result.is_new_user,
            afterCallbackRedirectUrl: result.after_callback_redirect_url,
            accessToken: result.access_token,
            refreshToken: result.refresh_token ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Refresh token not found in outer OAuth response")
        };
    }
    async signOut(session) {
        if (await session.getOrFetchLikelyValidTokens(2e4, null)) {
            const resOrError = await this.sendClientRequestAndCatchKnownError("/auth/sessions/current", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            }, session, [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].RefreshTokenError
            ]);
            if (resOrError.status === "error") if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].RefreshTokenError.isInstance(resOrError.error)) {} else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected error", {
                cause: resOrError.error
            });
        }
        session.markInvalid();
    }
    async getClientUserByToken(session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/users/me", {}, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CannotGetOwnUserWithoutUser
        ]);
        if (responseOrError.status === "error") if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CannotGetOwnUserWithoutUser.isInstance(responseOrError.error)) return null;
        else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected uncaught error", {
            cause: responseOrError.error
        });
        const user = await responseOrError.data.json();
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("User endpoint returned null; this should never happen");
        return user;
    }
    async listTeamInvitations(options, session) {
        return (await (await this.sendClientRequest("/team-invitations?" + new URLSearchParams({
            team_id: options.teamId
        }), {}, session)).json()).items;
    }
    async listCurrentUserTeamInvitations(session) {
        return (await (await this.sendClientRequest("/team-invitations?" + new URLSearchParams({
            user_id: "me"
        }), {}, session)).json()).items;
    }
    async acceptTeamInvitationById(invitationId, session) {
        await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-invitations/${invitationId}/accept` + "?" + new URLSearchParams({
            user_id: "me"
        }), {
            method: "POST"
        }, session);
    }
    async revokeTeamInvitation(invitationId, teamId, session) {
        await this.sendClientRequest(`/team-invitations/${invitationId}?team_id=${teamId}`, {
            method: "DELETE"
        }, session);
    }
    async listTeamMemberProfiles(options, session) {
        return (await (await this.sendClientRequest("/team-member-profiles?" + new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            team_id: options.teamId,
            user_id: options.userId
        })), {}, session)).json()).items;
    }
    async getTeamMemberProfile(options, session) {
        return await (await this.sendClientRequest(`/team-member-profiles/${options.teamId}/${options.userId}`, {}, session)).json();
    }
    async leaveTeam(teamId, session) {
        await this.sendClientRequest(`/team-memberships/${teamId}/me`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session);
    }
    async removeUserFromTeam(teamId, userId, session) {
        await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-memberships/${teamId}/${userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session);
    }
    async updateTeamMemberProfile(options, session) {
        await this.sendClientRequest(`/team-member-profiles/${options.teamId}/${options.userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.profile)
        }, session);
    }
    async updateTeam(options, session) {
        await this.sendClientRequest(`/teams/${options.teamId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.data)
        }, session);
    }
    async listCurrentUserTeamPermissions(options, session) {
        return (await (await this.sendClientRequest(`/team-permissions?team_id=${options.teamId}&user_id=me&recursive=${options.recursive}`, {}, session)).json()).items;
    }
    async listCurrentUserProjectPermissions(options, session) {
        return (await (await this.sendClientRequest(`/project-permissions?user_id=me&recursive=${options.recursive}`, {}, session)).json()).items;
    }
    async listCurrentUserTeams(session) {
        return (await (await this.sendClientRequest("/teams?user_id=me", {}, session)).json()).items;
    }
    async getClientProject() {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/projects/current", {}, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ProjectNotFound
        ]);
        if (responseOrError.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(responseOrError.error);
        const project = await responseOrError.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(project);
    }
    async updateClientUser(update, session) {
        await this.sendClientRequest("/users/me", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, session);
    }
    async listProjects(session) {
        const response = await this.sendClientRequest("/internal/projects", {}, session);
        if (!response.ok) throw new Error("Failed to list projects: " + response.status + " " + await response.text());
        return (await response.json()).items;
    }
    async createProject(project, session) {
        const fetchResponse = await this.sendClientRequest("/internal/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(project)
        }, session);
        if (!fetchResponse.ok) throw new Error("Failed to create project: " + fetchResponse.status + " " + await fetchResponse.text());
        return await fetchResponse.json();
    }
    async createProviderAccessToken(provider, scope, session) {
        return await (await this.sendClientRequest(`/connected-accounts/me/${provider}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, session)).json();
    }
    /**
	* Get access token for a specific connected account by provider ID and provider account ID.
	* This is the preferred method when dealing with multiple accounts of the same provider.
	*/ async createProviderAccessTokenByAccount(providerId, providerAccountId, scope, session) {
        return await (await this.sendClientRequest(`/connected-accounts/me/${encodeURIComponent(providerId)}/${encodeURIComponent(providerAccountId)}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, session)).json();
    }
    /**
	* List all connected accounts for the current user.
	*/ async listConnectedAccounts(session) {
        return await (await this.sendClientRequest(`/connected-accounts/me`, {
            method: "GET"
        }, session)).json();
    }
    async createClientTeam(data, session) {
        return await (await this.sendClientRequest("/teams", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async deleteTeam(teamId, session) {
        await this.sendClientRequest(`/teams/${teamId}`, {
            method: "DELETE"
        }, session);
    }
    async deleteCurrentUser(session) {
        await this.sendClientRequest("/users/me", {
            method: "DELETE"
        }, session);
    }
    async createClientContactChannel(data, session) {
        return await (await this.sendClientRequest("/contact-channels", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async updateClientContactChannel(id, data, session) {
        return await (await this.sendClientRequest(`/contact-channels/me/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async deleteClientContactChannel(id, session) {
        await this.sendClientRequest(`/contact-channels/me/${id}`, {
            method: "DELETE"
        }, session);
    }
    async deleteSession(sessionId, session) {
        await this.sendClientRequest(`/auth/sessions/${sessionId}?user_id=me`, {
            method: "DELETE"
        }, session);
    }
    async listSessions(session) {
        return await (await this.sendClientRequest("/auth/sessions?user_id=me", {
            method: "GET"
        }, session)).json();
    }
    async listClientContactChannels(session) {
        return (await (await this.sendClientRequest("/contact-channels?user_id=me", {
            method: "GET"
        }, session)).json()).items;
    }
    async sendCurrentUserContactChannelVerificationEmail(contactChannelId, callbackUrl, session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError(`/contact-channels/me/${contactChannelId}/send-verification-code`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                callback_url: callbackUrl
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].EmailAlreadyVerified
        ]);
        if (responseOrError.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(responseOrError.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async cliLogin(loginCode, refreshToken, session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/auth/cli/complete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login_code: loginCode,
                refresh_token: refreshToken
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].SchemaError
        ]);
        if (responseOrError.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(responseOrError.error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async _getApiKeyRequestInfo(options) {
        if ("user_id" in options && "team_id" in options) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Cannot specify both user_id and team_id in _getApiKeyRequestInfo");
        return {
            endpoint: "team_id" in options ? "/team-api-keys" : "/user-api-keys",
            queryParams: new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefinedOrNull"])(options))
        };
    }
    async listProjectApiKeys(options, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return (await (await sendRequest(`${endpoint}?${queryParams.toString()}`, {
            method: "GET"
        }, session, requestType)).json()).items;
    }
    async createProjectApiKey(data, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint } = await this._getApiKeyRequestInfo(data);
        return await (await sendRequest(`${endpoint}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session, requestType)).json();
    }
    async getProjectApiKey(options, keyId, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return await (await sendRequest(`${endpoint}/${keyId}?${queryParams.toString()}`, {
            method: "GET"
        }, session, requestType)).json();
    }
    async updateProjectApiKey(options, keyId, data, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return await (await sendRequest(`${endpoint}/${keyId}?${queryParams.toString()}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session, requestType)).json();
    }
    async checkProjectApiKey(type, apiKey, session, requestType) {
        const result = await (requestType === "client" ? this.sendClientRequestAndCatchKnownError : this.sendServerRequestAndCatchKnownError).bind(this)(`/${type}-api-keys/check`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                api_key: apiKey
            })
        }, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].ApiKeyNotValid
        ]);
        if (result.status === "error") return null;
        return await result.data.json();
    }
    async listNotificationCategories(session) {
        return (await (await this.sendClientRequest(`/emails/notification-preference/me`, {}, session)).json()).items;
    }
    async setNotificationsEnabled(notificationCategoryId, enabled, session) {
        await this.sendClientRequest(`/emails/notification-preference/me/${notificationCategoryId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                enabled
            })
        }, session);
    }
    async getOAuthProvider(userId, providerId, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "GET"
        }, session)).json();
    }
    async updateOAuthProvider(userId, providerId, data, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async listOAuthProviders(options = {}, session) {
        const queryParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])(options));
        return (await (await this.sendClientRequest(`/oauth-providers${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "GET"
        }, session)).json()).items;
    }
    async deleteOAuthProvider(userId, providerId, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "DELETE"
        }, session)).json();
    }
    async getItem(options, session, requestType = "client") {
        let customerType;
        let customerId;
        if ("userId" in options) {
            customerType = "user";
            customerId = options.userId;
        } else if ("teamId" in options) {
            customerType = "team";
            customerId = options.teamId;
        } else if ("customCustomerId" in options) {
            customerType = "custom";
            customerId = options.customCustomerId;
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("getItem requires one of userId, teamId, or customCustomerId");
        return await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/items/${customerType}/${customerId}/${options.itemId}`, {}, session, requestType)).json();
    }
    async listProducts(options, session, requestType = "client") {
        const queryParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            cursor: options.cursor,
            limit: options.limit !== void 0 ? options.limit.toString() : void 0
        }));
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/products/${options.customer_type}/${options.customer_id}`;
        return await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {}, session, requestType)).json();
    }
    async listInvoices(options, session) {
        const queryParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            cursor: options.cursor,
            limit: options.limit !== void 0 ? options.limit.toString() : void 0
        }));
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/invoices/${options.customer_type}/${options.customer_id}`;
        return await (await this.sendClientRequest(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {}, session)).json();
    }
    async cancelSubscription(options, session) {
        const queryParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            subscription_id: options.subscription_id
        }));
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/products/${options.customer_type}/${options.customer_id}/${options.product_id}`;
        await this.sendClientRequest(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "DELETE"
        }, session);
    }
    async switchSubscription(options, session) {
        await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/products/${options.customer_type}/${options.customer_id}/switch`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                from_product_id: options.from_product_id,
                to_product_id: options.to_product_id,
                price_id: options.price_id,
                quantity: options.quantity
            })
        }, session);
    }
    async createCheckoutUrl(customer_type, customer_id, productIdOrInline, session, returnUrl, requestType = "client") {
        const productBody = typeof productIdOrInline === "string" ? {
            product_id: productIdOrInline
        } : {
            product_inline: productIdOrInline
        };
        const { url } = await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)("/payments/purchases/create-purchase-url", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                customer_type,
                customer_id,
                ...productBody,
                return_url: returnUrl
            })
        }, session, requestType)).json();
        return url;
    }
    async getCustomerBilling(customerType, customerId, session) {
        return await (await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/billing/${customerType}/${customerId}`, {}, session)).json();
    }
    async createCustomerPaymentMethodSetupIntent(customerType, customerId, session) {
        return await (await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/payment-method/${customerType}/${customerId}/setup-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session)).json();
    }
    async setDefaultCustomerPaymentMethodFromSetupIntent(customerType, customerId, setupIntentId, session) {
        return await (await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/payment-method/${customerType}/${customerId}/set-default`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                setup_intent_id: setupIntentId
            })
        }, session)).json();
    }
    async transferProject(internalProjectSession, projectIdToTransfer, newTeamId) {
        if (this.options.projectId !== "internal") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("HexclaveClientInterface.transferProject() is only available for internal projects (please specify the project ID in the constructor)");
        await this.sendClientRequest("/internal/projects/transfer", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                project_id: projectIdToTransfer,
                new_team_id: newTeamId
            })
        }, internalProjectSession);
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/server-interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveServerInterface",
    ()=>HexclaveServerInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/sessions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$client$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/interface/client-interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$helpers$2f$vault$2f$client$2d$side$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/helpers/vault/client-side.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/interface/server-interface.ts
var HexclaveServerInterface = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$interface$2f$client$2d$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveClientInterface"] {
    constructor(options){
        super(options);
        this.options = options;
    }
    async sendServerRequest(path, options, session, requestType = "server") {
        return await this.sendClientRequest(path, {
            ...options,
            headers: {
                "x-hexclave-secret-server-key": "secretServerKey" in this.options ? this.options.secretServerKey : "",
                ...options.headers
            }
        }, session, requestType);
    }
    async getCustomerBilling(customerType, customerId, session) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/billing/${customerType}/${customerId}`, {}, session)).json();
    }
    async createCustomerPaymentMethodSetupIntent(customerType, customerId, session) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/payment-method/${customerType}/${customerId}/setup-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session)).json();
    }
    async setDefaultCustomerPaymentMethodFromSetupIntent(customerType, customerId, setupIntentId, session) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/payment-method/${customerType}/${customerId}/set-default`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                setup_intent_id: setupIntentId
            })
        }, session)).json();
    }
    async sendServerRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(await this.sendServerRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(e);
            throw e;
        }
    }
    async createServerUser(data) {
        return await (await this.sendServerRequest("/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async getServerUserByToken(session) {
        const responseOrError = await this.sendServerRequestAndCatchKnownError("/users/me", {}, session, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CannotGetOwnUserWithoutUser
        ]);
        if (responseOrError.status === "error") if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CannotGetOwnUserWithoutUser.isInstance(responseOrError.error)) return null;
        else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected uncaught error", {
            cause: responseOrError.error
        });
        const user = await responseOrError.data.json();
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("User endpoint returned null; this should never happen");
        return user;
    }
    async getServerUserById(userId) {
        const responseOrError = await this.sendServerRequestAndCatchKnownError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/users/${userId}`, {}, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].UserNotFound
        ]);
        if (responseOrError.status === "error") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(responseOrError.error);
        const user = await responseOrError.data.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(user);
    }
    async listServerTeamInvitations(options) {
        return (await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-invitations?team_id=${options.teamId}`, {}, null)).json()).items;
    }
    async revokeServerTeamInvitation(invitationId, teamId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-invitations/${invitationId}?team_id=${teamId}`, {
            method: "DELETE"
        }, null);
    }
    async listServerTeamMemberProfiles(options) {
        return (await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-member-profiles?team_id=${options.teamId}`, {}, null)).json()).items;
    }
    async getServerTeamMemberProfile(options) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-member-profiles/${options.teamId}/${options.userId}`, {}, null)).json();
    }
    async listServerTeamPermissions(options, session) {
        return (await (await this.sendServerRequest(`/team-permissions?${new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            user_id: options.userId,
            team_id: options.teamId,
            recursive: options.recursive.toString()
        }))}`, {}, session)).json()).items;
    }
    async listServerProjectPermissions(options, session) {
        return (await (await this.sendServerRequest(`/project-permissions?${new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            user_id: options.userId,
            recursive: options.recursive.toString()
        }))}`, {}, session)).json()).items;
    }
    async listServerUsers(options) {
        const searchParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            cursor: options.cursor,
            limit: options.limit?.toString(),
            desc: options.desc?.toString(),
            team_id: options.teamId,
            ...options.orderBy ? {
                order_by: ({
                    signedUpAt: "signed_up_at",
                    lastActiveAt: "last_active_at"
                })[options.orderBy]
            } : {},
            ...options.query ? {
                query: options.query
            } : {},
            ...options.excludedEmailDomains && options.excludedEmailDomains.length > 0 ? {
                excluded_email_domains: options.excludedEmailDomains.join(",")
            } : {},
            ...options.includeRestricted ? {
                include_restricted: "true"
            } : {},
            ...options.includeAnonymous ? {
                include_anonymous: "true"
            } : {},
            ...options.onlyAnonymous ? {
                only_anonymous: "true"
            } : {}
        }));
        return await (await this.sendServerRequest("/users?" + searchParams.toString(), {}, null)).json();
    }
    async listServerTeams(options) {
        return (await this.listServerTeamsPaginated(options)).items;
    }
    async listServerTeamsPaginated(options) {
        return await (await this.sendServerRequest(`/teams?${new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            user_id: options?.userId,
            order_by: options?.orderBy === "createdAt" ? "created_at" : options?.orderBy,
            desc: options?.desc !== void 0 ? String(options.desc) : void 0,
            cursor: options?.cursor,
            limit: options?.limit?.toString(),
            query: options?.query
        }))}`, {}, null)).json();
    }
    async getServerTeam(teamId) {
        return await (await this.sendServerRequest(`/teams/${teamId}`, {}, null)).json();
    }
    async listServerTeamUsers(teamId) {
        return (await (await this.sendServerRequest(`/users?team_id=${teamId}`, {}, null)).json()).items;
    }
    async createServerTeam(data) {
        return await (await this.sendServerRequest("/teams", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateServerTeam(teamId, data) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/teams/${teamId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerTeam(teamId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/teams/${teamId}`, {
            method: "DELETE"
        }, null);
    }
    async addServerUserToTeam(options) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async removeServerUserFromTeam(options) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async listServerUserTeamInvitations(userId) {
        return (await (await this.sendServerRequest("/team-invitations?" + new URLSearchParams({
            user_id: userId
        }), {}, null)).json()).items;
    }
    async acceptServerTeamInvitationById(invitationId, userId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-invitations/${invitationId}/accept` + "?" + new URLSearchParams({
            user_id: userId
        }), {
            method: "POST"
        }, null);
    }
    async updateServerUser(userId, update) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/users/${userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, null)).json();
    }
    async createServerProviderAccessToken(userId, provider, scope) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/connected-accounts/${userId}/${provider}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, null)).json();
    }
    /**
	* Get access token for a specific connected account by provider ID and provider account ID.
	* This is the preferred method when dealing with multiple accounts of the same provider.
	*/ async createServerProviderAccessTokenByAccount(userId, providerId, providerAccountId, scope) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/connected-accounts/${userId}/${providerId}/${providerAccountId}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, null)).json();
    }
    /**
	* List all connected accounts for a user.
	*/ async listServerConnectedAccounts(userId) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/connected-accounts/${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async createServerUserSession(userId, expiresInMillis, isImpersonation) {
        const result = await (await this.sendServerRequest("/auth/sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                expires_in_millis: expiresInMillis,
                is_impersonation: isImpersonation
            })
        }, null)).json();
        return {
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        };
    }
    async leaveServerTeam(options) {
        await this.sendClientRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async updateServerTeamMemberProfile(options) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-member-profiles/${options.teamId}/${options.userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.profile)
        }, null);
    }
    async grantServerTeamUserPermission(teamId, userId, permissionId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-permissions/${teamId}/${userId}/${permissionId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async grantServerProjectPermission(userId, permissionId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/project-permissions/${userId}/${permissionId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async revokeServerTeamUserPermission(teamId, userId, permissionId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/team-permissions/${teamId}/${userId}/${permissionId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async revokeServerProjectPermission(userId, permissionId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/project-permissions/${userId}/${permissionId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async deleteServerUser(userId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/users/${userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async createServerContactChannel(data) {
        return await (await this.sendServerRequest("/contact-channels", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateServerContactChannel(userId, contactChannelId, data) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/contact-channels/${userId}/${contactChannelId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerContactChannel(userId, contactChannelId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/contact-channels/${userId}/${contactChannelId}`, {
            method: "DELETE"
        }, null);
    }
    async listServerContactChannels(userId) {
        return (await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/contact-channels?user_id=${userId}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async listServerNotificationCategories(userId) {
        return (await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/emails/notification-preference/${userId}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async setServerNotificationsEnabled(userId, notificationCategoryId, enabled) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/emails/notification-preference/${userId}/${notificationCategoryId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                enabled
            })
        }, null);
    }
    async sendServerContactChannelVerificationEmail(userId, contactChannelId, callbackUrl) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/contact-channels/${userId}/${contactChannelId}/send-verification-code`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                callback_url: callbackUrl
            })
        }, null);
    }
    async listServerSessions(userId) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/auth/sessions?user_id=${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async deleteServerSession(sessionId) {
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/auth/sessions/${sessionId}`, {
            method: "DELETE"
        }, null);
    }
    async sendServerTeamInvitation(options) {
        await this.sendServerRequest("/team-invitations/send-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: options.email,
                team_id: options.teamId,
                callback_url: options.callbackUrl
            })
        }, null);
    }
    async updatePassword(options) {
        const res = await this.sendServerRequestAndCatchKnownError("/auth/password/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                old_password: options.oldPassword,
                new_password: options.newPassword
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordConfirmationMismatch,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async createServerOAuthProvider(data) {
        return await (await this.sendServerRequest("/oauth-providers", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listServerOAuthProviders(options = {}) {
        const queryParams = new URLSearchParams((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])(options));
        return (await (await this.sendServerRequest(`/oauth-providers${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async updateServerOAuthProvider(userId, providerId, data) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/oauth-providers/${userId}/${providerId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerOAuthProvider(userId, providerId) {
        return await (await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/oauth-providers/${userId}/${providerId}`, {
            method: "DELETE"
        }, null)).json();
    }
    async sendEmail(options) {
        await this.sendServerRequest("/emails/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_ids: options.userIds,
                all_users: options.allUsers,
                emails: options.emails,
                theme_id: options.themeId,
                html: options.html,
                subject: options.subject,
                notification_category_name: options.notificationCategoryName,
                template_id: options.templateId,
                variables: options.variables,
                draft_id: options.draftId,
                scheduled_at_millis: options.scheduledAt?.getTime()
            })
        }, null);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(void 0);
    }
    async getEmailDeliveryInfo() {
        return await (await this.sendServerRequest("/emails/delivery-info", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }, null)).json();
    }
    async activateEmailCapacityBoost() {
        return await (await this.sendServerRequest("/emails/capacity-boost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async queryAnalytics(options) {
        return await (await this.sendServerRequest("/analytics/query", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                query: options.query,
                params: options.params ?? {},
                timeout_ms: options.timeout_ms ?? 1e3,
                include_all_branches: options.include_all_branches ?? false
            })
        }, null)).json();
    }
    async updateItemQuantity(options, data) {
        let customerType;
        let customerId;
        const itemId = options.itemId;
        if ("userId" in options) {
            customerType = "user";
            customerId = options.userId;
        } else if ("teamId" in options) {
            customerType = "team";
            customerId = options.teamId;
        } else if ("customCustomerId" in options) {
            customerType = "custom";
            customerId = options.customCustomerId;
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("updateItemQuantity requires one of userId, teamId, or customCustomerId");
        const queryParams = new URLSearchParams({
            allow_negative: (data.allow_negative ?? false).toString()
        });
        await this.sendServerRequest(`/payments/items/${customerType}/${customerId}/${itemId}/update-quantity?${queryParams.toString()}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                delta: data.delta,
                expires_at: data.expires_at,
                description: data.description
            })
        }, null);
    }
    async grantProduct(options) {
        if (!options.productId && !options.product) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("grantProduct requires either productId or product");
        if (options.productId && options.product) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("grantProduct should not receive both productId and product");
        const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])({
            product_id: options.productId,
            product_inline: options.product,
            quantity: options.quantity
        });
        await this.sendServerRequest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlString"]`/payments/products/${options.customerType}/${options.customerId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        }, null);
    }
    async getDataVaultStoreValue(secret, storeId, key) {
        const hashedKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$helpers$2f$vault$2f$client$2d$side$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(secret, key);
        const response = await this.sendServerRequestAndCatchKnownError(`/data-vault/stores/${storeId}/get`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hashed_key: hashedKey
            })
        }, null, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].DataVaultStoreHashedKeyDoesNotExist
        ]);
        if (response.status === "error") if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].DataVaultStoreHashedKeyDoesNotExist.isInstance(response.error)) return null;
        else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Unexpected uncaught error", {
            cause: response.error
        });
        const encryptedValue = (await response.data.json()).encrypted_value;
        if (typeof encryptedValue !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("encrypted_value is not a string", {
            type: typeof encryptedValue
        });
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$helpers$2f$vault$2f$client$2d$side$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptValue"])(secret, key, encryptedValue);
    }
    async setDataVaultStoreValue(secret, storeId, key, value) {
        const hashedKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$helpers$2f$vault$2f$client$2d$side$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(secret, key);
        const encryptedValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$helpers$2f$vault$2f$client$2d$side$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptValue"])(secret, key, value);
        await this.sendServerRequest(`/data-vault/stores/${storeId}/set`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hashed_key: hashedKey,
                encrypted_value: encryptedValue
            })
        }, null);
    }
    async initiateServerPasskeyRegistration(userId) {
        const { accessToken, refreshToken } = await this.createServerUserSession(userId, 6e4 * 2, false);
        const tempSession = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$sessions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalSession"]({
            accessToken,
            refreshToken,
            refreshAccessTokenCallback: async ()=>null
        });
        return await this.initiatePasskeyRegistration({}, tempSession);
    }
    async listSessionReplays(params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        if (params?.user_ids && params.user_ids.length > 0) qs.set("user_ids", params.user_ids.join(","));
        if (params?.team_ids && params.team_ids.length > 0) qs.set("team_ids", params.team_ids.join(","));
        if (typeof params?.duration_ms_min === "number") qs.set("duration_ms_min", String(params.duration_ms_min));
        if (typeof params?.duration_ms_max === "number") qs.set("duration_ms_max", String(params.duration_ms_max));
        if (typeof params?.last_event_at_from_millis === "number") qs.set("last_event_at_from_millis", String(params.last_event_at_from_millis));
        if (typeof params?.last_event_at_to_millis === "number") qs.set("last_event_at_to_millis", String(params.last_event_at_to_millis));
        if (typeof params?.click_count_min === "number") qs.set("click_count_min", String(params.click_count_min));
        return await (await this.sendServerRequest(`/session-replays${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplay(sessionReplayId) {
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}`, {
            method: "GET"
        }, null)).json();
    }
    async listSessionReplayChunks(sessionReplayId, params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/chunks${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplayChunkEvents(sessionReplayId, chunkId) {
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/chunks/${encodeURIComponent(chunkId)}/events`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplayEvents(sessionReplayId, options) {
        const qs = new URLSearchParams();
        if (typeof options?.offset === "number") qs.set("offset", String(options.offset));
        if (typeof options?.limit === "number") qs.set("limit", String(options.limit));
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/events${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KnownError",
    ()=>KnownError,
    "KnownErrors",
    ()=>KnownErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/functions.js [app-client] (ecmascript)");
;
;
;
//#region src/known-errors.tsx
var KnownError = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusError"] {
    constructor(statusCode, humanReadableMessage, details){
        super(statusCode, humanReadableMessage);
        this.statusCode = statusCode;
        this.humanReadableMessage = humanReadableMessage;
        this.details = details;
        this.__stackKnownErrorBrand = "stack-known-error-brand-sentinel";
        this.name = "KnownError";
    }
    static isKnownError(error) {
        return typeof error === "object" && error !== null && "__stackKnownErrorBrand" in error && error.__stackKnownErrorBrand === "stack-known-error-brand-sentinel";
    }
    getBody() {
        return new TextEncoder().encode(JSON.stringify(this.toDescriptiveJson(), void 0, 2));
    }
    getHeaders() {
        return {
            "Content-Type": [
                "application/json; charset=utf-8"
            ],
            "X-Stack-Known-Error": [
                this.errorCode
            ],
            "X-Hexclave-Known-Error": [
                this.errorCode
            ]
        };
    }
    toDescriptiveJson() {
        return {
            code: this.errorCode,
            ...this.details ? {
                details: this.details
            } : {},
            error: this.humanReadableMessage
        };
    }
    get errorCode() {
        return this.constructor.errorCode ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(`Can't find error code for this KnownError. Is its constructor a KnownErrorConstructor? ${this}`);
    }
    static constructorArgsFromJson(json) {
        return [
            400,
            json.message,
            json
        ];
    }
    static fromJson(json) {
        for (const [_, KnownErrorType] of Object.entries(KnownErrors))if (json.code === KnownErrorType.prototype.errorCode) return new KnownErrorType(...KnownErrorType.constructorArgsFromJson(json));
        throw new Error(`An error occurred. Please update your version of the Hexclave SDK. ${json.code}: ${json.message}`);
    }
};
function createKnownErrorConstructor(SuperClass, errorCode, create, constructorArgsFromJson) {
    const createFn = create === "inherit" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identityArgs"] : create;
    const constructorArgsFromJsonFn = constructorArgsFromJson === "inherit" ? SuperClass.constructorArgsFromJson : constructorArgsFromJson;
    class KnownErrorImpl extends SuperClass {
        static{
            this.errorCode = errorCode;
        }
        constructor(...args){
            super(...createFn(...args));
            this.name = `KnownError<${errorCode}>`;
            this.constructorArgs = args;
        }
        static constructorArgsFromJson(json) {
            return constructorArgsFromJsonFn(json.details);
        }
        static isInstance(error) {
            if (!KnownError.isKnownError(error)) return false;
            let current = error;
            while(true){
                current = Object.getPrototypeOf(current);
                if (!current) break;
                if ("errorCode" in current.constructor && current.constructor.errorCode === errorCode) return true;
            }
            return false;
        }
    }
    return KnownErrorImpl;
}
const UnsupportedError = createKnownErrorConstructor(KnownError, "UNSUPPORTED_ERROR", (originalErrorCode)=>[
        500,
        `An error occurred that is not currently supported (possibly because it was added in a version of Stack that is newer than this client). The original unsupported error code was: ${originalErrorCode}`,
        {
            originalErrorCode
        }
    ], (json)=>[
        json?.originalErrorCode ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("originalErrorCode not found in UnsupportedError details")
    ]);
const BodyParsingError = createKnownErrorConstructor(KnownError, "BODY_PARSING_ERROR", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const SchemaError = createKnownErrorConstructor(KnownError, "SCHEMA_ERROR", (message)=>[
        400,
        message || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("SchemaError requires a message"),
        {
            message
        }
    ], (json)=>[
        json.message
    ]);
const AllOverloadsFailed = createKnownErrorConstructor(KnownError, "ALL_OVERLOADS_FAILED", (overloadErrors)=>[
        400,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      This endpoint has multiple overloads, but they all failed to process the request.

        ${overloadErrors.map((e, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
          Overload ${i + 1}: ${JSON.stringify(e, void 0, 2)}
        `).join("\n\n")}
    `,
        {
            overload_errors: overloadErrors
        }
    ], (json)=>[
        json?.overload_errors ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("overload_errors not found in AllOverloadsFailed details")
    ]);
const ProjectAuthenticationError = createKnownErrorConstructor(KnownError, "PROJECT_AUTHENTICATION_ERROR", "inherit", "inherit");
const InvalidProjectAuthentication = createKnownErrorConstructor(ProjectAuthenticationError, "INVALID_PROJECT_AUTHENTICATION", "inherit", "inherit");
const ProjectKeyWithoutAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "PROJECT_KEY_WITHOUT_ACCESS_TYPE", ()=>[
        400,
        "Either an API key or an admin access token was provided, but the x-hexclave-access-type header is missing. Set it to 'client', 'server', or 'admin' as appropriate. (The legacy x-stack-access-type header is also accepted.)"
    ], ()=>[]);
const InvalidAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_ACCESS_TYPE", (accessType)=>[
        400,
        `The x-hexclave-access-type header must be 'client', 'server', or 'admin', but was '${accessType}'. (The legacy x-stack-access-type header is also accepted.)`
    ], (json)=>[
        json?.accessType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("accessType not found in InvalidAccessType details")
    ]);
const AccessTypeWithoutProjectId = createKnownErrorConstructor(InvalidProjectAuthentication, "ACCESS_TYPE_WITHOUT_PROJECT_ID", (accessType)=>[
        400,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      The x-hexclave-access-type header was '${accessType}', but the x-hexclave-project-id header was not provided. (The legacy x-stack-access-type and x-stack-project-id headers are also accepted.)
      
      For more information, see the docs on REST API authentication: https://docs.hexclave.com/api/overview#authentication
    `,
        {
            request_type: accessType
        }
    ], (json)=>[
        json.request_type
    ]);
const AccessTypeRequired = createKnownErrorConstructor(InvalidProjectAuthentication, "ACCESS_TYPE_REQUIRED", ()=>[
        400,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      You must specify an access level for this Hexclave project. Make sure project API keys are provided (eg. x-hexclave-publishable-client-key) and you set the x-hexclave-access-type header to 'client', 'server', or 'admin'. (The legacy x-stack-* equivalents are also accepted.)
      
      For more information, see the docs on REST API authentication: https://docs.hexclave.com/api/overview#authentication
    `
    ], ()=>[]);
const InsufficientAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "INSUFFICIENT_ACCESS_TYPE", (actualAccessType, allowedAccessTypes)=>[
        401,
        `The x-hexclave-access-type header must be ${allowedAccessTypes.map((s)=>`'${s}'`).join(" or ")}, but was '${actualAccessType}'. (The legacy x-stack-access-type header is also accepted.)`,
        {
            actual_access_type: actualAccessType,
            allowed_access_types: allowedAccessTypes
        }
    ], (json)=>[
        json.actual_access_type,
        json.allowed_access_types
    ]);
const InvalidPublishableClientKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_PUBLISHABLE_CLIENT_KEY", (projectId)=>[
        401,
        `The publishable key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidSecretServerKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_SECRET_SERVER_KEY", (projectId)=>[
        401,
        `The secret server key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidSuperSecretAdminKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_SUPER_SECRET_ADMIN_KEY", (projectId)=>[
        401,
        `The super secret admin key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidAdminAccessToken = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_ADMIN_ACCESS_TOKEN", "inherit", "inherit");
const UnparsableAdminAccessToken = createKnownErrorConstructor(InvalidAdminAccessToken, "UNPARSABLE_ADMIN_ACCESS_TOKEN", ()=>[
        401,
        "Admin access token is not parsable."
    ], ()=>[]);
const AdminAccessTokenExpired = createKnownErrorConstructor(InvalidAdminAccessToken, "ADMIN_ACCESS_TOKEN_EXPIRED", (expiredAt)=>[
        401,
        `Admin access token has expired. Please refresh it and try again.${expiredAt ? ` (The access token expired at ${expiredAt.toISOString()}.)` : ""}`,
        {
            expired_at_millis: expiredAt?.getTime() ?? null
        }
    ], (json)=>[
        json.expired_at_millis ? new Date(json.expired_at_millis) : void 0
    ]);
const InvalidProjectForAdminAccessToken = createKnownErrorConstructor(InvalidAdminAccessToken, "INVALID_PROJECT_FOR_ADMIN_ACCESS_TOKEN", ()=>[
        401,
        "Admin access tokens must be created on the internal project."
    ], ()=>[]);
const AdminAccessTokenIsNotAdmin = createKnownErrorConstructor(InvalidAdminAccessToken, "ADMIN_ACCESS_TOKEN_IS_NOT_ADMIN", ()=>[
        401,
        "Admin access token does not have the required permissions to access this project."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ProjectAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationError, "PROJECT_AUTHENTICATION_REQUIRED", "inherit", "inherit");
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The publishable client key must be provided."
    ], ()=>[]);
const PublishableClientKeyRequiredForProject = createKnownErrorConstructor(ProjectAuthenticationRequired, "PUBLISHABLE_CLIENT_KEY_REQUIRED_FOR_PROJECT", (projectId)=>[
        401,
        "Publishable client keys are required for this project. Create one in Project Keys, or disable this requirement there to allow keyless client access.",
        {
            project_id: projectId ?? null
        }
    ], (json)=>[
        json.project_id ?? void 0
    ]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ServerAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "SERVER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The secret server key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrServerAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_SERVER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key or the secret server key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrAdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key or the super secret admin key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrServerOrAdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_SERVER_OR_ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key, the secret server key, or the super secret admin key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const AdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The super secret admin key must be provided."
    ], ()=>[]);
const ExpectedInternalProject = createKnownErrorConstructor(ProjectAuthenticationError, "EXPECTED_INTERNAL_PROJECT", ()=>[
        401,
        "The project ID is expected to be internal."
    ], ()=>[]);
const SessionAuthenticationError = createKnownErrorConstructor(KnownError, "SESSION_AUTHENTICATION_ERROR", "inherit", "inherit");
const InvalidSessionAuthentication = createKnownErrorConstructor(SessionAuthenticationError, "INVALID_SESSION_AUTHENTICATION", "inherit", "inherit");
const InvalidAccessToken = createKnownErrorConstructor(InvalidSessionAuthentication, "INVALID_ACCESS_TOKEN", "inherit", "inherit");
const UnparsableAccessToken = createKnownErrorConstructor(InvalidAccessToken, "UNPARSABLE_ACCESS_TOKEN", ()=>[
        401,
        "Access token is not parsable."
    ], ()=>[]);
const AccessTokenExpired = createKnownErrorConstructor(InvalidAccessToken, "ACCESS_TOKEN_EXPIRED", (expiredAt, projectId, userId, refreshTokenId)=>[
        401,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      Access token has expired. Please refresh it and try again.${expiredAt ? ` (The access token expired at ${expiredAt.toISOString()}.)` : ""}${projectId ? ` Project ID: ${projectId}.` : ""}${userId ? ` User ID: ${userId}.` : ""}${refreshTokenId ? ` Refresh token ID: ${refreshTokenId}.` : ""}

      Debug info: Most likely, you fetched the access token before it expired (for example, in a server component, pre-rendered page, or on page load), but then didn't refresh it before it expired. If this is the case, and you're using the SDK, make sure you call getAccessToken() every time you need to use the access token. If you're not using the SDK, make sure you refresh the access token with the refresh endpoint.
    `,
        {
            expired_at_millis: expiredAt?.getTime() ?? null,
            project_id: projectId ?? null,
            user_id: userId ?? null,
            refresh_token_id: refreshTokenId ?? null
        }
    ], (json)=>[
        json.expired_at_millis ? new Date(json.expired_at_millis) : void 0,
        json.project_id ?? void 0,
        json.user_id ?? void 0,
        json.refresh_token_id ?? void 0
    ]);
const InvalidProjectForAccessToken = createKnownErrorConstructor(InvalidAccessToken, "INVALID_PROJECT_FOR_ACCESS_TOKEN", (expectedProjectId, actualProjectId)=>[
        401,
        `Access token not valid for this project. Expected project ID ${JSON.stringify(expectedProjectId)}, but the token is for project ID ${JSON.stringify(actualProjectId)}.`,
        {
            expected_project_id: expectedProjectId,
            actual_project_id: actualProjectId
        }
    ], (json)=>[
        json.expected_project_id,
        json.actual_project_id
    ]);
const RefreshTokenError = createKnownErrorConstructor(KnownError, "REFRESH_TOKEN_ERROR", "inherit", "inherit");
const RefreshTokenNotFoundOrExpired = createKnownErrorConstructor(RefreshTokenError, "REFRESH_TOKEN_NOT_FOUND_OR_EXPIRED", ()=>[
        401,
        "Refresh token not found for this project, or the session has expired/been revoked."
    ], ()=>[]);
const CannotDeleteCurrentSession = createKnownErrorConstructor(RefreshTokenError, "CANNOT_DELETE_CURRENT_SESSION", ()=>[
        400,
        "Cannot delete the current session."
    ], ()=>[]);
const ProviderRejected = createKnownErrorConstructor(RefreshTokenError, "PROVIDER_REJECTED", ()=>[
        401,
        "The provider refused to refresh their token. This usually means that the provider used to authenticate the user no longer regards this session as valid, and the user must re-authenticate."
    ], ()=>[]);
const UserWithEmailAlreadyExists = createKnownErrorConstructor(KnownError, "USER_EMAIL_ALREADY_EXISTS", (email, wouldWorkIfEmailWasVerified = false)=>[
        409,
        `A user with email ${JSON.stringify(email)} already exists${wouldWorkIfEmailWasVerified ? " but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method." : "."}`,
        {
            email,
            would_work_if_email_was_verified: wouldWorkIfEmailWasVerified
        }
    ], (json)=>[
        json.email,
        json.would_work_if_email_was_verified ?? false
    ]);
const EmailNotVerified = createKnownErrorConstructor(KnownError, "EMAIL_NOT_VERIFIED", ()=>[
        400,
        "The email is not verified."
    ], ()=>[]);
const CannotGetOwnUserWithoutUser = createKnownErrorConstructor(KnownError, "CANNOT_GET_OWN_USER_WITHOUT_USER", ()=>[
        400,
        "You have specified 'me' as a userId, but did not provide authentication for a user."
    ], ()=>[]);
const UserIdDoesNotExist = createKnownErrorConstructor(KnownError, "USER_ID_DOES_NOT_EXIST", (userId)=>[
        400,
        `The given user with the ID ${userId} does not exist.`,
        {
            user_id: userId
        }
    ], (json)=>[
        json.user_id
    ]);
const UserNotFound = createKnownErrorConstructor(KnownError, "USER_NOT_FOUND", ()=>[
        404,
        "User not found."
    ], ()=>[]);
const RestrictedUserNotAllowed = createKnownErrorConstructor(KnownError, "RESTRICTED_USER_NOT_ALLOWED", (restrictedReason)=>[
        403,
        `The user in the access token is in restricted state. Reason: ${restrictedReason.type}. Please pass the X-Stack-Allow-Restricted-User header if this is intended.`,
        {
            restricted_reason: restrictedReason
        }
    ], (json)=>[
        json.restricted_reason ?? {
            type: "anonymous"
        }
    ]);
const ProjectNotFound = createKnownErrorConstructor(KnownError, "PROJECT_NOT_FOUND", (projectId)=>{
    if (typeof projectId !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("projectId of KnownErrors.ProjectNotFound must be a string");
    return [
        404,
        `Project ${projectId} not found or is not accessible with the current user.`,
        {
            project_id: projectId
        }
    ];
}, (json)=>[
        json.project_id
    ]);
const CurrentProjectNotFound = createKnownErrorConstructor(KnownError, "CURRENT_PROJECT_NOT_FOUND", (projectId)=>[
        400,
        `The current project with ID ${projectId} was not found. Please check the value of the x-hexclave-project-id header. (The legacy x-stack-project-id header is also accepted.)`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const BranchDoesNotExist = createKnownErrorConstructor(KnownError, "BRANCH_DOES_NOT_EXIST", (branchId)=>[
        400,
        `The branch with ID ${branchId} does not exist.`,
        {
            branch_id: branchId
        }
    ], (json)=>[
        json.branch_id
    ]);
const SignUpNotEnabled = createKnownErrorConstructor(KnownError, "SIGN_UP_NOT_ENABLED", ()=>[
        400,
        "Creation of new accounts is not enabled for this project. Please ask the project owner to enable it."
    ], ()=>[]);
const SignUpRejected = createKnownErrorConstructor(KnownError, "SIGN_UP_REJECTED", (message)=>[
        403,
        message ?? "Your sign up was rejected by an administrator's sign-up rule.",
        {
            message: message ?? "Your sign up was rejected by an administrator's sign-up rule."
        }
    ], (json)=>[
        json.message
    ]);
const BotChallengeRequired = createKnownErrorConstructor(KnownError, "BOT_CHALLENGE_REQUIRED", ()=>[
        409,
        "An additional bot challenge is required before sign-up can continue."
    ], ()=>[]);
const BotChallengeFailed = createKnownErrorConstructor(KnownError, "BOT_CHALLENGE_FAILED", (message)=>[
        400,
        message,
        {
            message
        }
    ], (json)=>[
        json.message
    ]);
const PasswordAuthenticationNotEnabled = createKnownErrorConstructor(KnownError, "PASSWORD_AUTHENTICATION_NOT_ENABLED", ()=>[
        400,
        "Password authentication is not enabled for this project."
    ], ()=>[]);
const DataVaultStoreDoesNotExist = createKnownErrorConstructor(KnownError, "DATA_VAULT_STORE_DOES_NOT_EXIST", (storeId)=>[
        400,
        `Data vault store with ID ${storeId} does not exist.`,
        {
            store_id: storeId
        }
    ], (json)=>[
        json.store_id
    ]);
const DataVaultStoreHashedKeyDoesNotExist = createKnownErrorConstructor(KnownError, "DATA_VAULT_STORE_HASHED_KEY_DOES_NOT_EXIST", (storeId, hashedKey)=>[
        400,
        `Data vault store with ID ${storeId} does not contain a key with hash ${hashedKey}.`,
        {
            store_id: storeId,
            hashed_key: hashedKey
        }
    ], (json)=>[
        json.store_id,
        json.hashed_key
    ]);
const PasskeyAuthenticationNotEnabled = createKnownErrorConstructor(KnownError, "PASSKEY_AUTHENTICATION_NOT_ENABLED", ()=>[
        400,
        "Passkey authentication is not enabled for this project."
    ], ()=>[]);
const AnonymousAccountsNotEnabled = createKnownErrorConstructor(KnownError, "ANONYMOUS_ACCOUNTS_NOT_ENABLED", ()=>[
        400,
        "Anonymous accounts are not enabled for this project."
    ], ()=>[]);
const AnonymousAuthenticationNotAllowed = createKnownErrorConstructor(KnownError, "ANONYMOUS_AUTHENTICATION_NOT_ALLOWED", ()=>[
        401,
        "X-Stack-Access-Token is for an anonymous user, but anonymous users are not enabled. Set the X-Stack-Allow-Anonymous-User header of this request to 'true' to allow anonymous users."
    ], ()=>[]);
const EmailPasswordMismatch = createKnownErrorConstructor(KnownError, "EMAIL_PASSWORD_MISMATCH", ()=>[
        400,
        "Wrong e-mail or password."
    ], ()=>[]);
const RedirectUrlNotWhitelisted = createKnownErrorConstructor(KnownError, "REDIRECT_URL_NOT_WHITELISTED", (redirectUrl)=>[
        400,
        "Redirect URL not whitelisted. Did you forget to add this domain to the trusted domains list on the Hexclave dashboard?",
        redirectUrl === void 0 ? void 0 : {
            redirect_url: redirectUrl
        }
    ], (json)=>[
        json?.redirect_url
    ]);
const PasswordRequirementsNotMet = createKnownErrorConstructor(KnownError, "PASSWORD_REQUIREMENTS_NOT_MET", "inherit", "inherit");
const PasswordTooShort = createKnownErrorConstructor(PasswordRequirementsNotMet, "PASSWORD_TOO_SHORT", (minLength)=>[
        400,
        `Password too short. Minimum length is ${minLength}.`,
        {
            min_length: minLength
        }
    ], (json)=>[
        json?.min_length ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("min_length not found in PasswordTooShort details")
    ]);
const PasswordTooLong = createKnownErrorConstructor(PasswordRequirementsNotMet, "PASSWORD_TOO_LONG", (maxLength)=>[
        400,
        `Password too long. Maximum length is ${maxLength}.`,
        {
            maxLength
        }
    ], (json)=>[
        json?.maxLength ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("maxLength not found in PasswordTooLong details")
    ]);
const UserDoesNotHavePassword = createKnownErrorConstructor(KnownError, "USER_DOES_NOT_HAVE_PASSWORD", ()=>[
        400,
        "This user does not have password authentication enabled."
    ], ()=>[]);
const VerificationCodeError = createKnownErrorConstructor(KnownError, "VERIFICATION_ERROR", "inherit", "inherit");
const VerificationCodeNotFound = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_NOT_FOUND", ()=>[
        404,
        "The verification code does not exist for this project."
    ], ()=>[]);
const VerificationCodeExpired = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_EXPIRED", ()=>[
        400,
        "The verification code has expired."
    ], ()=>[]);
const VerificationCodeAlreadyUsed = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_ALREADY_USED", ()=>[
        409,
        "The verification link has already been used."
    ], ()=>[]);
const VerificationCodeMaxAttemptsReached = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_MAX_ATTEMPTS_REACHED", ()=>[
        400,
        "The verification code nonce has reached the maximum number of attempts. This code is not valid anymore."
    ], ()=>[]);
const PasswordConfirmationMismatch = createKnownErrorConstructor(KnownError, "PASSWORD_CONFIRMATION_MISMATCH", ()=>[
        400,
        "Passwords do not match."
    ], ()=>[]);
const EmailAlreadyVerified = createKnownErrorConstructor(KnownError, "EMAIL_ALREADY_VERIFIED", ()=>[
        409,
        "The e-mail is already verified."
    ], ()=>[]);
const EmailNotAssociatedWithUser = createKnownErrorConstructor(KnownError, "EMAIL_NOT_ASSOCIATED_WITH_USER", ()=>[
        400,
        "The e-mail is not associated with a user that could log in with that e-mail."
    ], ()=>[]);
const EmailIsNotPrimaryEmail = createKnownErrorConstructor(KnownError, "EMAIL_IS_NOT_PRIMARY_EMAIL", (email, primaryEmail)=>[
        400,
        `The given e-mail (${email}) must equal the user's primary e-mail (${primaryEmail}).`,
        {
            email,
            primary_email: primaryEmail
        }
    ], (json)=>[
        json.email,
        json.primary_email
    ]);
const PasskeyRegistrationFailed = createKnownErrorConstructor(KnownError, "PASSKEY_REGISTRATION_FAILED", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const PasskeyWebAuthnError = createKnownErrorConstructor(KnownError, "PASSKEY_WEBAUTHN_ERROR", (message, code)=>[
        400,
        message,
        {
            message,
            code
        }
    ], (json)=>[
        json.message,
        json.code
    ]);
const PasskeyAuthenticationFailed = createKnownErrorConstructor(KnownError, "PASSKEY_AUTHENTICATION_FAILED", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const PermissionNotFound = createKnownErrorConstructor(KnownError, "PERMISSION_NOT_FOUND", (permissionId)=>[
        404,
        `Permission "${permissionId}" not found. Make sure you created it on the dashboard.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const PermissionScopeMismatch = createKnownErrorConstructor(KnownError, "WRONG_PERMISSION_SCOPE", (permissionId, expectedScope, actualScope)=>[
        404,
        `Permission ${JSON.stringify(permissionId)} not found. (It was found for a different scope ${JSON.stringify(actualScope)}, but scope ${JSON.stringify(expectedScope)} was expected.)`,
        {
            permission_id: permissionId,
            expected_scope: expectedScope,
            actual_scope: actualScope
        }
    ], (json)=>[
        json.permission_id,
        json.expected_scope,
        json.actual_scope
    ]);
const ContainedPermissionNotFound = createKnownErrorConstructor(KnownError, "CONTAINED_PERMISSION_NOT_FOUND", (permissionId)=>[
        400,
        `Contained permission with ID "${permissionId}" not found. Make sure you created it on the dashboard.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const TeamNotFound = createKnownErrorConstructor(KnownError, "TEAM_NOT_FOUND", (teamId)=>[
        404,
        `Team ${teamId} not found.`,
        {
            team_id: teamId
        }
    ], (json)=>[
        json.team_id
    ]);
createKnownErrorConstructor(KnownError, "TEAM_ALREADY_EXISTS", (teamId)=>[
        409,
        `Team ${teamId} already exists.`,
        {
            team_id: teamId
        }
    ], (json)=>[
        json.team_id
    ]);
const TeamMembershipNotFound = createKnownErrorConstructor(KnownError, "TEAM_MEMBERSHIP_NOT_FOUND", (teamId, userId)=>[
        404,
        `User ${userId} is not found in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId
        }
    ], (json)=>[
        json.team_id,
        json.user_id
    ]);
const TeamInvitationRestrictedUserNotAllowed = createKnownErrorConstructor(KnownError, "TEAM_INVITATION_RESTRICTED_USER_NOT_ALLOWED", (restrictedReason)=>[
        403,
        `Restricted users cannot accept team invitations. Reason: ${restrictedReason.type}. Please complete the onboarding process before accepting team invitations.`,
        {
            restricted_reason: restrictedReason
        }
    ], (json)=>[
        json.restricted_reason ?? {
            type: "anonymous"
        }
    ]);
const TeamInvitationEmailMismatch = createKnownErrorConstructor(KnownError, "TEAM_INVITATION_EMAIL_MISMATCH", ()=>[
        403,
        "This team invitation was sent to a different email address. Sign in with the invited email, or add and verify that email on your account, then try again."
    ], ()=>[]);
const EmailTemplateAlreadyExists = createKnownErrorConstructor(KnownError, "EMAIL_TEMPLATE_ALREADY_EXISTS", ()=>[
        409,
        "Email template already exists."
    ], ()=>[]);
const OAuthConnectionNotConnectedToUser = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_NOT_CONNECTED_TO_USER", ()=>[
        400,
        "The OAuth connection is not connected to any user."
    ], ()=>[]);
const OAuthConnectionAlreadyConnectedToAnotherUser = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_ALREADY_CONNECTED_TO_ANOTHER_USER", ()=>[
        409,
        "The OAuth connection is already connected to another user."
    ], ()=>[]);
const OAuthConnectionDoesNotHaveRequiredScope = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_DOES_NOT_HAVE_REQUIRED_SCOPE", ()=>[
        400,
        "The OAuth connection does not have the required scope."
    ], ()=>[]);
const OAuthAccessTokenNotAvailable = createKnownErrorConstructor(KnownError, "OAUTH_ACCESS_TOKEN_NOT_AVAILABLE", (provider, details)=>[
        400,
        `Failed to retrieve an OAuth access token for the connected account (provider: ${provider}). ${details}`,
        {
            provider,
            details
        }
    ], (json)=>[
        json.provider,
        json.details
    ]);
const OAuthExtraScopeNotAvailableWithSharedOAuthKeys = createKnownErrorConstructor(KnownError, "OAUTH_EXTRA_SCOPE_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS", ()=>[
        400,
        "Extra scopes are not available with shared OAuth keys. Please add your own OAuth keys on the Hexclave dashboard to use extra scopes."
    ], ()=>[]);
const OAuthAccessTokenNotAvailableWithSharedOAuthKeys = createKnownErrorConstructor(KnownError, "OAUTH_ACCESS_TOKEN_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS", ()=>[
        400,
        "Access tokens are not available with shared OAuth keys. Please add your own OAuth keys on the Hexclave dashboard to use access tokens."
    ], ()=>[]);
const InvalidOAuthClientIdOrSecret = createKnownErrorConstructor(KnownError, "INVALID_OAUTH_CLIENT_ID_OR_SECRET", (clientId)=>[
        400,
        "The OAuth client ID or secret is invalid. The client ID must be equal to the project ID (potentially with a hash and a branch ID), and the client secret must be a publishable client key.",
        {
            client_id: clientId ?? null
        }
    ], (json)=>[
        json.client_id ?? void 0
    ]);
const InvalidScope = createKnownErrorConstructor(KnownError, "INVALID_SCOPE", (scope)=>[
        400,
        `The scope "${scope}" is not a valid OAuth scope for Stack.`
    ], (json)=>[
        json.scope
    ]);
const UserAlreadyConnectedToAnotherOAuthConnection = createKnownErrorConstructor(KnownError, "USER_ALREADY_CONNECTED_TO_ANOTHER_OAUTH_CONNECTION", ()=>[
        409,
        "The user is already connected to another OAuth account. Did you maybe selected the wrong account?"
    ], ()=>[]);
const OuterOAuthTimeout = createKnownErrorConstructor(KnownError, "OUTER_OAUTH_TIMEOUT", ()=>[
        408,
        "The OAuth flow has timed out. Please sign in again."
    ], ()=>[]);
const OAuthProviderNotFoundOrNotEnabled = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_NOT_FOUND_OR_NOT_ENABLED", ()=>[
        400,
        "The OAuth provider is not found or not enabled."
    ], ()=>[]);
const AppleBundleIdNotConfigured = createKnownErrorConstructor(KnownError, "APPLE_BUNDLE_ID_NOT_CONFIGURED", ()=>[
        400,
        "Apple Sign In is enabled, but no Bundle IDs are configured. Please add your app's Bundle ID in the Hexclave dashboard under OAuth Providers > Apple > Apple Bundle IDs."
    ], ()=>[]);
const OAuthProviderAccountIdAlreadyUsedForSignIn = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_ACCOUNT_ID_ALREADY_USED_FOR_SIGN_IN", ()=>[
        400,
        `A provider with the same account ID is already used for signing in.`
    ], ()=>[]);
const MultiFactorAuthenticationRequired = createKnownErrorConstructor(KnownError, "MULTI_FACTOR_AUTHENTICATION_REQUIRED", (attemptCode)=>[
        400,
        `Multi-factor authentication is required for this user.`,
        {
            attempt_code: attemptCode
        }
    ], (json)=>[
        json.attempt_code
    ]);
const InvalidTotpCode = createKnownErrorConstructor(KnownError, "INVALID_TOTP_CODE", ()=>[
        400,
        "The TOTP code is invalid. Please try again."
    ], ()=>[]);
const UserAuthenticationRequired = createKnownErrorConstructor(KnownError, "USER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "User authentication required for this endpoint."
    ], ()=>[]);
const TeamMembershipAlreadyExists = createKnownErrorConstructor(KnownError, "TEAM_MEMBERSHIP_ALREADY_EXISTS", ()=>[
        409,
        "Team membership already exists."
    ], ()=>[]);
const ProjectPermissionRequired = createKnownErrorConstructor(KnownError, "PROJECT_PERMISSION_REQUIRED", (userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId}.`,
        {
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.user_id,
        json.permission_id
    ]);
const TeamPermissionRequired = createKnownErrorConstructor(KnownError, "TEAM_PERMISSION_REQUIRED", (teamId, userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId} in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.team_id,
        json.user_id,
        json.permission_id
    ]);
const TeamPermissionNotFound = createKnownErrorConstructor(KnownError, "TEAM_PERMISSION_NOT_FOUND", (teamId, userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId} in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.team_id,
        json.user_id,
        json.permission_id
    ]);
const InvalidSharedOAuthProviderId = createKnownErrorConstructor(KnownError, "INVALID_SHARED_OAUTH_PROVIDER_ID", (providerId)=>[
        400,
        `The shared OAuth provider with ID ${providerId} is not valid.`,
        {
            provider_id: providerId
        }
    ], (json)=>[
        json.provider_id
    ]);
const InvalidStandardOAuthProviderId = createKnownErrorConstructor(KnownError, "INVALID_STANDARD_OAUTH_PROVIDER_ID", (providerId)=>[
        400,
        `The standard OAuth provider with ID ${providerId} is not valid.`,
        {
            provider_id: providerId
        }
    ], (json)=>[
        json.provider_id
    ]);
const InvalidAuthorizationCode = createKnownErrorConstructor(KnownError, "INVALID_AUTHORIZATION_CODE", ()=>[
        400,
        "The given authorization code is invalid."
    ], ()=>[]);
const InvalidAppleCredentials = createKnownErrorConstructor(KnownError, "INVALID_APPLE_CREDENTIALS", ()=>[
        400,
        "The Apple Sign In credentials could not be verified. Please try signing in again."
    ], ()=>[]);
const OAuthProviderAccessDenied = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_ACCESS_DENIED", ()=>[
        400,
        "The OAuth provider denied access to the user."
    ], ()=>[]);
const OAuthProviderTemporarilyUnavailable = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_TEMPORARILY_UNAVAILABLE", ()=>[
        503,
        "The OAuth provider is temporarily unavailable. Please try again later."
    ], ()=>[]);
const ContactChannelAlreadyUsedForAuthBySomeoneElse = createKnownErrorConstructor(KnownError, "CONTACT_CHANNEL_ALREADY_USED_FOR_AUTH_BY_SOMEONE_ELSE", (type, contactChannelValue, wouldWorkIfEmailWasVerified = false)=>[
        409,
        `This ${type} ${contactChannelValue ? `"(${contactChannelValue})"` : ""} is already used for authentication by another account${wouldWorkIfEmailWasVerified ? " but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method." : "."}`,
        {
            type,
            contact_channel_value: contactChannelValue ?? null,
            would_work_if_email_was_verified: wouldWorkIfEmailWasVerified
        }
    ], (json)=>[
        json.type,
        json.contact_channel_value,
        json.would_work_if_email_was_verified ?? false
    ]);
const InvalidPollingCodeError = createKnownErrorConstructor(KnownError, "INVALID_POLLING_CODE", (details)=>[
        400,
        "The polling code is invalid or does not exist.",
        details
    ], (json)=>[
        json
    ]);
const CliAuthError = createKnownErrorConstructor(KnownError, "CLI_AUTH_ERROR", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const CliAuthExpiredError = createKnownErrorConstructor(KnownError, "CLI_AUTH_EXPIRED_ERROR", (message = "CLI authentication request expired. Please try again.")=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const CliAuthUsedError = createKnownErrorConstructor(KnownError, "CLI_AUTH_USED_ERROR", (message = "This authentication token has already been used.")=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const ApiKeyNotValid = createKnownErrorConstructor(KnownError, "API_KEY_NOT_VALID", "inherit", "inherit");
const ApiKeyExpired = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_EXPIRED", ()=>[
        401,
        "API key has expired."
    ], ()=>[]);
const ApiKeyRevoked = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_REVOKED", ()=>[
        401,
        "API key has been revoked."
    ], ()=>[]);
const WrongApiKeyType = createKnownErrorConstructor(ApiKeyNotValid, "WRONG_API_KEY_TYPE", (expectedType, actualType)=>[
        400,
        `This endpoint is for ${expectedType} API keys, but a ${actualType} API key was provided.`,
        {
            expected_type: expectedType,
            actual_type: actualType
        }
    ], (json)=>[
        json.expected_type,
        json.actual_type
    ]);
const ApiKeyNotFound = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_NOT_FOUND", ()=>[
        404,
        "API key not found."
    ], ()=>[]);
const PublicApiKeyCannotBeRevoked = createKnownErrorConstructor(ApiKeyNotValid, "PUBLIC_API_KEY_CANNOT_BE_REVOKED", ()=>[
        400,
        "Public API keys cannot be revoked by the secretscanner endpoint."
    ], ()=>[]);
const PermissionIdAlreadyExists = createKnownErrorConstructor(KnownError, "PERMISSION_ID_ALREADY_EXISTS", (permissionId)=>[
        400,
        `Permission with ID "${permissionId}" already exists. Choose a different ID.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const EmailRenderingError = createKnownErrorConstructor(KnownError, "EMAIL_RENDERING_ERROR", (error)=>[
        400,
        `Failed to render email with theme: ${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const TemplateSourceRewriteError = createKnownErrorConstructor(KnownError, "TEMPLATE_SOURCE_REWRITE_ERROR", (error)=>[
        400,
        `Failed to rewrite template source: ${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const RequiresCustomEmailServer = createKnownErrorConstructor(KnownError, "REQUIRES_CUSTOM_EMAIL_SERVER", ()=>[
        400,
        `This action requires a custom SMTP server. Please edit your email server configuration and try again.`
    ], ()=>[]);
const EmailCapacityBoostAlreadyActive = createKnownErrorConstructor(KnownError, "EMAIL_CAPACITY_BOOST_ALREADY_ACTIVE", (expiresAt)=>[
        409,
        `Email capacity boost is already active until ${expiresAt}.`,
        {
            expires_at: expiresAt
        }
    ], (json)=>[
        json.expires_at
    ]);
const EmailNotEditable = createKnownErrorConstructor(KnownError, "EMAIL_NOT_EDITABLE", (emailId, status)=>[
        400,
        `Email with ID "${emailId}" cannot be edited because it is in status "${status}". Only emails in PAUSED, PREPARING, RENDERING, RENDER_ERROR, SCHEDULED, QUEUED, or SERVER_ERROR status can be edited.`,
        {
            email_id: emailId,
            status
        }
    ], (json)=>[
        json.email_id,
        json.status
    ]);
const ItemNotFound = createKnownErrorConstructor(KnownError, "ITEM_NOT_FOUND", (itemId)=>[
        404,
        `Item with ID "${itemId}" not found.`,
        {
            item_id: itemId
        }
    ], (json)=>[
        json.item_id
    ]);
const ItemCustomerTypeDoesNotMatch = createKnownErrorConstructor(KnownError, "ITEM_CUSTOMER_TYPE_DOES_NOT_MATCH", (itemId, customerId, itemCustomerType, actualCustomerType)=>[
        400,
        `The ${actualCustomerType} with ID ${JSON.stringify(customerId)} is not a valid customer for the item with ID ${JSON.stringify(itemId)}. ${itemCustomerType ? `The item is configured to only be available for ${itemCustomerType} customers, but the customer is a ${actualCustomerType}.` : `The item is missing a customer type field. Please make sure it is set up correctly in your project configuration.`}`,
        {
            item_id: itemId,
            customer_id: customerId,
            item_customer_type: itemCustomerType ?? null,
            actual_customer_type: actualCustomerType
        }
    ], (json)=>[
        json.item_id,
        json.customer_id,
        json.item_customer_type ?? void 0,
        json.actual_customer_type
    ]);
const CustomerDoesNotExist = createKnownErrorConstructor(KnownError, "CUSTOMER_DOES_NOT_EXIST", (customerId)=>[
        400,
        `Customer with ID ${JSON.stringify(customerId)} does not exist.`,
        {
            customer_id: customerId
        }
    ], (json)=>[
        json.customer_id
    ]);
const SubscriptionInvoiceNotFound = createKnownErrorConstructor(KnownError, "SUBSCRIPTION_INVOICE_NOT_FOUND", (subscriptionInvoiceId)=>[
        404,
        `Subscription invoice with ID ${JSON.stringify(subscriptionInvoiceId)} does not exist.`,
        {
            subscription_invoice_id: subscriptionInvoiceId
        }
    ], (json)=>[
        json.subscription_invoice_id
    ]);
const OneTimePurchaseNotFound = createKnownErrorConstructor(KnownError, "ONE_TIME_PURCHASE_NOT_FOUND", (purchaseId)=>[
        404,
        `One-time purchase with ID ${JSON.stringify(purchaseId)} does not exist.`,
        {
            one_time_purchase_id: purchaseId
        }
    ], (json)=>[
        json.one_time_purchase_id
    ]);
const SubscriptionAlreadyRefunded = createKnownErrorConstructor(KnownError, "SUBSCRIPTION_ALREADY_REFUNDED", (subscriptionId)=>[
        400,
        `Subscription with ID ${JSON.stringify(subscriptionId)} was already refunded.`,
        {
            subscription_id: subscriptionId
        }
    ], (json)=>[
        json.subscription_id
    ]);
const OneTimePurchaseAlreadyRefunded = createKnownErrorConstructor(KnownError, "ONE_TIME_PURCHASE_ALREADY_REFUNDED", (purchaseId)=>[
        400,
        `One-time purchase with ID ${JSON.stringify(purchaseId)} was already refunded.`,
        {
            one_time_purchase_id: purchaseId
        }
    ], (json)=>[
        json.one_time_purchase_id
    ]);
const TestModePurchaseNonRefundable = createKnownErrorConstructor(KnownError, "TEST_MODE_PURCHASE_NON_REFUNDABLE", ()=>[
        400,
        "Test mode purchases are not refundable."
    ], ()=>[]);
const ProductDoesNotExist = createKnownErrorConstructor(KnownError, "PRODUCT_DOES_NOT_EXIST", (productId, context)=>[
        400,
        `Product with ID ${JSON.stringify(productId)} ${context === "server_only" ? "is marked as server-only and cannot be accessed client side." : context === "item_exists" ? "does not exist, but an item with this ID exists." : "does not exist."}`,
        {
            product_id: productId,
            context
        }
    ], (json)=>[
        json.product_id,
        json.context
    ]);
const ProductCustomerTypeDoesNotMatch = createKnownErrorConstructor(KnownError, "PRODUCT_CUSTOMER_TYPE_DOES_NOT_MATCH", (productId, customerId, productCustomerType, actualCustomerType)=>[
        400,
        `The ${actualCustomerType} with ID ${JSON.stringify(customerId)} is not a valid customer for the inline product that has been passed in. ${productCustomerType ? `The product is configured to only be available for ${productCustomerType} customers, but the customer is a ${actualCustomerType}.` : `The product is missing a customer type field. Please make sure it is set up correctly in your project configuration.`}`,
        {
            product_id: productId ?? null,
            customer_id: customerId,
            product_customer_type: productCustomerType ?? null,
            actual_customer_type: actualCustomerType
        }
    ], (json)=>[
        json.product_id ?? void 0,
        json.customer_id,
        json.product_customer_type ?? void 0,
        json.actual_customer_type
    ]);
const ProductAlreadyGranted = createKnownErrorConstructor(KnownError, "PRODUCT_ALREADY_GRANTED", (productId, customerId)=>[
        400,
        `Customer with ID ${JSON.stringify(customerId)} already owns product ${JSON.stringify(productId)}.`,
        {
            product_id: productId,
            customer_id: customerId
        }
    ], (json)=>[
        json.product_id,
        json.customer_id
    ]);
const ItemQuantityInsufficientAmount = createKnownErrorConstructor(KnownError, "ITEM_QUANTITY_INSUFFICIENT_AMOUNT", (itemId, customerId, quantity)=>[
        400,
        `The item with ID ${JSON.stringify(itemId)} has an insufficient quantity for the customer with ID ${JSON.stringify(customerId)}. An attempt was made to charge ${quantity} credits.`,
        {
            item_id: itemId,
            customer_id: customerId,
            quantity
        }
    ], (json)=>[
        json.item_id,
        json.customer_id,
        json.quantity
    ]);
const StripeAccountInfoNotFound = createKnownErrorConstructor(KnownError, "STRIPE_ACCOUNT_INFO_NOT_FOUND", ()=>[
        404,
        "Stripe account information not found. Please make sure the user has onboarded with Stripe."
    ], ()=>[]);
const AnalyticsQueryTimeout = createKnownErrorConstructor(KnownError, "ANALYTICS_QUERY_TIMEOUT", (timeoutMs)=>[
        400,
        `The query timed out. Please try again with a shorter query or increase the timeout. Timeout was ${timeoutMs}ms.`,
        {
            timeout_ms: timeoutMs
        }
    ], (json)=>[
        json.timeout_ms
    ]);
const AnalyticsQueryError = createKnownErrorConstructor(KnownError, "ANALYTICS_QUERY_ERROR", (error)=>[
        400,
        `${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const AnalyticsNotEnabled = createKnownErrorConstructor(KnownError, "ANALYTICS_NOT_ENABLED", ()=>[
        400,
        "Analytics is not enabled for this project."
    ], ()=>[]);
const KnownErrors = {
    CannotDeleteCurrentSession,
    UnsupportedError,
    BodyParsingError,
    SchemaError,
    AllOverloadsFailed,
    ProjectAuthenticationError,
    PermissionIdAlreadyExists,
    CliAuthError,
    CliAuthExpiredError,
    CliAuthUsedError,
    InvalidProjectAuthentication,
    ProjectKeyWithoutAccessType,
    InvalidAccessType,
    AccessTypeWithoutProjectId,
    AccessTypeRequired,
    CannotGetOwnUserWithoutUser,
    InsufficientAccessType,
    InvalidPublishableClientKey,
    InvalidSecretServerKey,
    InvalidSuperSecretAdminKey,
    InvalidAdminAccessToken,
    UnparsableAdminAccessToken,
    AdminAccessTokenExpired,
    InvalidProjectForAdminAccessToken,
    AdminAccessTokenIsNotAdmin,
    ProjectAuthenticationRequired,
    ClientAuthenticationRequired,
    PublishableClientKeyRequiredForProject,
    ServerAuthenticationRequired,
    ClientOrServerAuthenticationRequired,
    ClientOrAdminAuthenticationRequired,
    ClientOrServerOrAdminAuthenticationRequired,
    AdminAuthenticationRequired,
    ExpectedInternalProject,
    SessionAuthenticationError,
    InvalidSessionAuthentication,
    InvalidAccessToken,
    UnparsableAccessToken,
    AccessTokenExpired,
    InvalidProjectForAccessToken,
    RefreshTokenError,
    ProviderRejected,
    RefreshTokenNotFoundOrExpired,
    UserWithEmailAlreadyExists,
    EmailNotVerified,
    UserIdDoesNotExist,
    UserNotFound,
    RestrictedUserNotAllowed,
    ApiKeyNotFound,
    PublicApiKeyCannotBeRevoked,
    ProjectNotFound,
    CurrentProjectNotFound,
    BranchDoesNotExist,
    SignUpNotEnabled,
    SignUpRejected,
    BotChallengeRequired,
    BotChallengeFailed,
    PasswordAuthenticationNotEnabled,
    PasskeyAuthenticationNotEnabled,
    AnonymousAccountsNotEnabled,
    AnonymousAuthenticationNotAllowed,
    EmailPasswordMismatch,
    RedirectUrlNotWhitelisted,
    PasswordRequirementsNotMet,
    PasswordTooShort,
    PasswordTooLong,
    UserDoesNotHavePassword,
    VerificationCodeError,
    VerificationCodeNotFound,
    VerificationCodeExpired,
    VerificationCodeAlreadyUsed,
    VerificationCodeMaxAttemptsReached,
    PasswordConfirmationMismatch,
    EmailAlreadyVerified,
    EmailNotAssociatedWithUser,
    EmailIsNotPrimaryEmail,
    PasskeyRegistrationFailed,
    PasskeyWebAuthnError,
    PasskeyAuthenticationFailed,
    PermissionNotFound,
    PermissionScopeMismatch,
    ContainedPermissionNotFound,
    TeamNotFound,
    TeamMembershipNotFound,
    TeamInvitationRestrictedUserNotAllowed,
    TeamInvitationEmailMismatch,
    EmailTemplateAlreadyExists,
    OAuthConnectionNotConnectedToUser,
    OAuthConnectionAlreadyConnectedToAnotherUser,
    OAuthConnectionDoesNotHaveRequiredScope,
    OAuthAccessTokenNotAvailable,
    OAuthExtraScopeNotAvailableWithSharedOAuthKeys,
    OAuthAccessTokenNotAvailableWithSharedOAuthKeys,
    InvalidOAuthClientIdOrSecret,
    InvalidScope,
    UserAlreadyConnectedToAnotherOAuthConnection,
    OuterOAuthTimeout,
    OAuthProviderNotFoundOrNotEnabled,
    AppleBundleIdNotConfigured,
    OAuthProviderAccountIdAlreadyUsedForSignIn,
    MultiFactorAuthenticationRequired,
    InvalidTotpCode,
    UserAuthenticationRequired,
    TeamMembershipAlreadyExists,
    ProjectPermissionRequired,
    TeamPermissionRequired,
    InvalidSharedOAuthProviderId,
    InvalidStandardOAuthProviderId,
    InvalidAuthorizationCode,
    InvalidAppleCredentials,
    TeamPermissionNotFound,
    OAuthProviderAccessDenied,
    OAuthProviderTemporarilyUnavailable,
    ContactChannelAlreadyUsedForAuthBySomeoneElse,
    InvalidPollingCodeError,
    ApiKeyNotValid,
    ApiKeyExpired,
    ApiKeyRevoked,
    WrongApiKeyType,
    EmailRenderingError,
    TemplateSourceRewriteError,
    RequiresCustomEmailServer,
    EmailCapacityBoostAlreadyActive,
    EmailNotEditable,
    ItemNotFound,
    ItemCustomerTypeDoesNotMatch,
    CustomerDoesNotExist,
    ProductDoesNotExist,
    ProductCustomerTypeDoesNotMatch,
    ProductAlreadyGranted,
    SubscriptionInvoiceNotFound,
    OneTimePurchaseNotFound,
    SubscriptionAlreadyRefunded,
    OneTimePurchaseAlreadyRefunded,
    TestModePurchaseNonRefundable,
    ItemQuantityInsufficientAmount,
    StripeAccountInfoNotFound,
    DefaultPaymentMethodRequired: createKnownErrorConstructor(KnownError, "DEFAULT_PAYMENT_METHOD_REQUIRED", (customerType, customerId)=>[
            400,
            "No default payment method is set for this customer.",
            {
                customer_type: customerType,
                customer_id: customerId
            }
        ], (json)=>[
            json.customer_type,
            json.customer_id
        ]),
    NewPurchasesBlocked: createKnownErrorConstructor(KnownError, "NEW_PURCHASES_BLOCKED", ()=>[
            403,
            "New purchases are currently blocked for this project. Please contact support for more information."
        ], ()=>[]),
    DataVaultStoreDoesNotExist,
    DataVaultStoreHashedKeyDoesNotExist,
    AnalyticsQueryTimeout,
    AnalyticsQueryError,
    AnalyticsNotEnabled
};
const knownErrorCodes = /* @__PURE__ */ new Set();
for (const [_, KnownError] of Object.entries(KnownErrors)){
    if (knownErrorCodes.has(KnownError.errorCode)) throw new Error(`Duplicate known error code: ${KnownError.errorCode}`);
    knownErrorCodes.add(KnownError.errorCode);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/schema-fields.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESERVED_USER_SPECIFIED_IDS",
    ()=>RESERVED_USER_SPECIFIED_IDS,
    "ReplaceFieldWithOwnUserId",
    ()=>ReplaceFieldWithOwnUserId,
    "USER_SPECIFIED_ID_MAX_LENGTH",
    ()=>USER_SPECIFIED_ID_MAX_LENGTH,
    "USER_SPECIFIED_ID_PATTERN",
    ()=>USER_SPECIFIED_ID_PATTERN,
    "accessTokenPayloadSchema",
    ()=>accessTokenPayloadSchema,
    "accessTokenResponseSchema",
    ()=>accessTokenResponseSchema,
    "adaptSchema",
    ()=>adaptSchema,
    "adminAuthTypeSchema",
    ()=>adminAuthTypeSchema,
    "base64Schema",
    ()=>base64Schema,
    "basicAuthorizationHeaderSchema",
    ()=>basicAuthorizationHeaderSchema,
    "branchConfigSourceSchema",
    ()=>branchConfigSourceSchema,
    "clientOrHigherAuthTypeSchema",
    ()=>clientOrHigherAuthTypeSchema,
    "configAgentRunSchema",
    ()=>configAgentRunSchema,
    "configAgentSafeErrorMessageSchema",
    ()=>configAgentSafeErrorMessageSchema,
    "configAgentSafeErrorMessages",
    ()=>configAgentSafeErrorMessages,
    "contactChannelIdSchema",
    ()=>contactChannelIdSchema,
    "contactChannelIsPrimarySchema",
    ()=>contactChannelIsPrimarySchema,
    "contactChannelIsVerifiedSchema",
    ()=>contactChannelIsVerifiedSchema,
    "contactChannelTypeSchema",
    ()=>contactChannelTypeSchema,
    "contactChannelUsedForAuthSchema",
    ()=>contactChannelUsedForAuthSchema,
    "contactChannelValueSchema",
    ()=>contactChannelValueSchema,
    "containedPermissionIdsSchema",
    ()=>containedPermissionIdsSchema,
    "countryCodeSchema",
    ()=>countryCodeSchema,
    "customDashboardsSchema",
    ()=>customDashboardsSchema,
    "customPermissionDefinitionIdSchema",
    ()=>customPermissionDefinitionIdSchema,
    "customerTypeSchema",
    ()=>customerTypeSchema,
    "dayIntervalOrNeverSchema",
    ()=>dayIntervalOrNeverSchema,
    "dayIntervalSchema",
    ()=>dayIntervalSchema,
    "emailHostSchema",
    ()=>emailHostSchema,
    "emailOtpSignInCallbackUrlSchema",
    ()=>emailOtpSignInCallbackUrlSchema,
    "emailPasswordSchema",
    ()=>emailPasswordSchema,
    "emailPortSchema",
    ()=>emailPortSchema,
    "emailSchema",
    ()=>emailSchema,
    "emailSenderEmailSchema",
    ()=>emailSenderEmailSchema,
    "emailSenderNameSchema",
    ()=>emailSenderNameSchema,
    "emailTemplateListSchema",
    ()=>emailTemplateListSchema,
    "emailThemeListSchema",
    ()=>emailThemeListSchema,
    "emailThemeSchema",
    ()=>emailThemeSchema,
    "emailTypeSchema",
    ()=>emailTypeSchema,
    "emailUsernameSchema",
    ()=>emailUsernameSchema,
    "emailVerificationCallbackUrlSchema",
    ()=>emailVerificationCallbackUrlSchema,
    "ensureObjectSchema",
    ()=>ensureObjectSchema,
    "getUserSpecifiedIdErrorMessage",
    ()=>getUserSpecifiedIdErrorMessage,
    "handlerPathSchema",
    ()=>handlerPathSchema,
    "inlineProductSchema",
    ()=>inlineProductSchema,
    "intervalOrNeverSchema",
    ()=>intervalOrNeverSchema,
    "intervalSchema",
    ()=>intervalSchema,
    "isValidUserSpecifiedId",
    ()=>isValidUserSpecifiedId,
    "jsonSchema",
    ()=>jsonSchema,
    "jsonStringOrEmptySchema",
    ()=>jsonStringOrEmptySchema,
    "jsonStringSchema",
    ()=>jsonStringSchema,
    "moneyAmountSchema",
    ()=>moneyAmountSchema,
    "neonAuthorizationHeaderSchema",
    ()=>neonAuthorizationHeaderSchema,
    "oauthAccountMergeStrategySchema",
    ()=>oauthAccountMergeStrategySchema,
    "oauthAppleBundleIdSchema",
    ()=>oauthAppleBundleIdSchema,
    "oauthAppleBundleIdsSchema",
    ()=>oauthAppleBundleIdsSchema,
    "oauthAppleKeyIdSchema",
    ()=>oauthAppleKeyIdSchema,
    "oauthApplePrivateKeySchema",
    ()=>oauthApplePrivateKeySchema,
    "oauthAppleTeamIdSchema",
    ()=>oauthAppleTeamIdSchema,
    "oauthClientIdSchema",
    ()=>oauthClientIdSchema,
    "oauthClientSecretSchema",
    ()=>oauthClientSecretSchema,
    "oauthCustomCallbackUrlSchema",
    ()=>oauthCustomCallbackUrlSchema,
    "oauthEnabledSchema",
    ()=>oauthEnabledSchema,
    "oauthFacebookConfigIdSchema",
    ()=>oauthFacebookConfigIdSchema,
    "oauthIdSchema",
    ()=>oauthIdSchema,
    "oauthIssuerUrlSchema",
    ()=>oauthIssuerUrlSchema,
    "oauthMicrosoftTenantIdSchema",
    ()=>oauthMicrosoftTenantIdSchema,
    "oauthProviderAccountIdSchema",
    ()=>oauthProviderAccountIdSchema,
    "oauthProviderAllowConnectedAccountsSchema",
    ()=>oauthProviderAllowConnectedAccountsSchema,
    "oauthProviderAllowSignInSchema",
    ()=>oauthProviderAllowSignInSchema,
    "oauthProviderEmailSchema",
    ()=>oauthProviderEmailSchema,
    "oauthProviderIdSchema",
    ()=>oauthProviderIdSchema,
    "oauthProviderProviderConfigIdSchema",
    ()=>oauthProviderProviderConfigIdSchema,
    "oauthProviderTypeSchema",
    ()=>oauthProviderTypeSchema,
    "oauthScopeSchema",
    ()=>oauthScopeSchema,
    "oauthTypeSchema",
    ()=>oauthTypeSchema,
    "passwordSchema",
    ()=>passwordSchema,
    "permissionDefinitionIdSchema",
    ()=>permissionDefinitionIdSchema,
    "pricesSchema",
    ()=>pricesSchema,
    "primaryEmailAuthEnabledSchema",
    ()=>primaryEmailAuthEnabledSchema,
    "primaryEmailSchema",
    ()=>primaryEmailSchema,
    "primaryEmailVerifiedSchema",
    ()=>primaryEmailVerifiedSchema,
    "productClientMetadataSchema",
    ()=>productClientMetadataSchema,
    "productClientReadOnlyMetadataSchema",
    ()=>productClientReadOnlyMetadataSchema,
    "productPriceSchema",
    ()=>productPriceSchema,
    "productSchema",
    ()=>productSchema,
    "productSchemaWithMetadata",
    ()=>productSchemaWithMetadata,
    "productServerMetadataSchema",
    ()=>productServerMetadataSchema,
    "profileImageUrlSchema",
    ()=>profileImageUrlSchema,
    "projectAllowLocalhostSchema",
    ()=>projectAllowLocalhostSchema,
    "projectBranchIdSchema",
    ()=>projectBranchIdSchema,
    "projectClientTeamCreationEnabledSchema",
    ()=>projectClientTeamCreationEnabledSchema,
    "projectClientUserDeletionEnabledSchema",
    ()=>projectClientUserDeletionEnabledSchema,
    "projectConfigIdSchema",
    ()=>projectConfigIdSchema,
    "projectCreateTeamOnSignUpSchema",
    ()=>projectCreateTeamOnSignUpSchema,
    "projectCreatedAtMillisSchema",
    ()=>projectCreatedAtMillisSchema,
    "projectCredentialEnabledSchema",
    ()=>projectCredentialEnabledSchema,
    "projectDescriptionSchema",
    ()=>projectDescriptionSchema,
    "projectDisplayNameSchema",
    ()=>projectDisplayNameSchema,
    "projectIdSchema",
    ()=>projectIdSchema,
    "projectIsProductionModeSchema",
    ()=>projectIsProductionModeSchema,
    "projectLogoDarkModeUrlSchema",
    ()=>projectLogoDarkModeUrlSchema,
    "projectLogoFullDarkModeUrlSchema",
    ()=>projectLogoFullDarkModeUrlSchema,
    "projectLogoFullUrlSchema",
    ()=>projectLogoFullUrlSchema,
    "projectLogoUrlSchema",
    ()=>projectLogoUrlSchema,
    "projectMagicLinkEnabledSchema",
    ()=>projectMagicLinkEnabledSchema,
    "projectOnboardingStatusSchema",
    ()=>projectOnboardingStatusSchema,
    "projectOnboardingStatusValues",
    ()=>projectOnboardingStatusValues,
    "projectPasskeyEnabledSchema",
    ()=>projectPasskeyEnabledSchema,
    "projectSignUpEnabledSchema",
    ()=>projectSignUpEnabledSchema,
    "refreshTokenResponseSchema",
    ()=>refreshTokenResponseSchema,
    "restrictedReasonSchema",
    ()=>restrictedReasonSchema,
    "restrictedReasonTypes",
    ()=>restrictedReasonTypes,
    "sanitizeUserSpecifiedId",
    ()=>sanitizeUserSpecifiedId,
    "selectedTeamIdSchema",
    ()=>selectedTeamIdSchema,
    "serverOrHigherAuthTypeSchema",
    ()=>serverOrHigherAuthTypeSchema,
    "signInEmailSchema",
    ()=>signInEmailSchema,
    "signInResponseSchema",
    ()=>signInResponseSchema,
    "signedUpAtMillisSchema",
    ()=>signedUpAtMillisSchema,
    "strictEmailSchema",
    ()=>strictEmailSchema,
    "teamClientMetadataSchema",
    ()=>teamClientMetadataSchema,
    "teamClientReadOnlyMetadataSchema",
    ()=>teamClientReadOnlyMetadataSchema,
    "teamCreatedAtMillisSchema",
    ()=>teamCreatedAtMillisSchema,
    "teamCreatorUserIdSchema",
    ()=>teamCreatorUserIdSchema,
    "teamDisplayNameSchema",
    ()=>teamDisplayNameSchema,
    "teamIdSchema",
    ()=>teamIdSchema,
    "teamInvitationCallbackUrlSchema",
    ()=>teamInvitationCallbackUrlSchema,
    "teamInvitationEmailSchema",
    ()=>teamInvitationEmailSchema,
    "teamMemberDisplayNameSchema",
    ()=>teamMemberDisplayNameSchema,
    "teamMemberProfileImageUrlSchema",
    ()=>teamMemberProfileImageUrlSchema,
    "teamPermissionDescriptionSchema",
    ()=>teamPermissionDescriptionSchema,
    "teamProfileImageUrlSchema",
    ()=>teamProfileImageUrlSchema,
    "teamServerMetadataSchema",
    ()=>teamServerMetadataSchema,
    "teamSystemPermissions",
    ()=>teamSystemPermissions,
    "templateThemeIdSchema",
    ()=>templateThemeIdSchema,
    "urlSchema",
    ()=>urlSchema,
    "userClientMetadataSchema",
    ()=>userClientMetadataSchema,
    "userClientReadOnlyMetadataSchema",
    ()=>userClientReadOnlyMetadataSchema,
    "userDisplayNameSchema",
    ()=>userDisplayNameSchema,
    "userHasPasswordSchema",
    ()=>userHasPasswordSchema,
    "userIdOrMeSchema",
    ()=>userIdOrMeSchema,
    "userIdSchema",
    ()=>userIdSchema,
    "userLastActiveAtMillisSchema",
    ()=>userLastActiveAtMillisSchema,
    "userOAuthProviderSchema",
    ()=>userOAuthProviderSchema,
    "userOtpAuthEnabledMutationSchema",
    ()=>userOtpAuthEnabledMutationSchema,
    "userOtpAuthEnabledSchema",
    ()=>userOtpAuthEnabledSchema,
    "userPasskeyAuthEnabledSchema",
    ()=>userPasskeyAuthEnabledSchema,
    "userPasswordHashMutationSchema",
    ()=>userPasswordHashMutationSchema,
    "userPasswordMutationSchema",
    ()=>userPasswordMutationSchema,
    "userServerMetadataSchema",
    ()=>userServerMetadataSchema,
    "userSpecifiedIdSchema",
    ()=>userSpecifiedIdSchema,
    "userTotpSecretMutationSchema",
    ()=>userTotpSecretMutationSchema,
    "wildcardProtocolAndDomainSchema",
    ()=>wildcardProtocolAndDomainSchema,
    "wildcardUrlSchema",
    ()=>wildcardUrlSchema,
    "yupArray",
    ()=>yupArray,
    "yupBoolean",
    ()=>yupBoolean,
    "yupDate",
    ()=>yupDate,
    "yupDefinedAndNonEmptyWhen",
    ()=>yupDefinedAndNonEmptyWhen,
    "yupDefinedWhen",
    ()=>yupDefinedWhen,
    "yupMixed",
    ()=>yupMixed,
    "yupNever",
    ()=>yupNever,
    "yupNumber",
    ()=>yupNumber,
    "yupObject",
    ()=>yupObject,
    "yupObjectWithAutoDefault",
    ()=>yupObjectWithAutoDefault,
    "yupRecord",
    ()=>yupRecord,
    "yupString",
    ()=>yupString,
    "yupTuple",
    ()=>yupTuple,
    "yupUnion",
    ()=>yupUnion,
    "yupValidate",
    ()=>yupValidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$country$2d$codes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/country-codes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$currency$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/currency-constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/oauth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/urls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/uuids.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/schema-fields.ts
const MAX_IMAGE_SIZE_BASE64_BYTES = 1e6;
const PROTOTYPE_KEY = "__proto__";
function hasOwnPrototypeKey(value) {
    return typeof value === "object" && value !== null && Object.prototype.hasOwnProperty.call(value, PROTOTYPE_KEY);
}
const originalObjectSchemaCast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectSchema"].prototype._cast;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectSchema"].prototype._cast = function(value, options = {}) {
    if (!hasOwnPrototypeKey(value)) return originalObjectSchemaCast.call(this, value, options);
    const prototypeEntry = Object.getOwnPropertyDescriptor(value, PROTOTYPE_KEY).value;
    const withoutPrototypeKey = {};
    for (const key of Object.keys(value)){
        if (key === PROTOTYPE_KEY) continue;
        withoutPrototypeKey[key] = value[key];
    }
    const cast = originalObjectSchemaCast.call(this, withoutPrototypeKey, options);
    if ((options.stripUnknown ?? this.spec?.noUnknown) || typeof cast !== "object" || cast === null) return cast;
    Object.defineProperty(cast, PROTOTYPE_KEY, {
        value: prototypeEntry,
        writable: true,
        enumerable: true,
        configurable: true
    });
    return cast;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMethod"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"], "nonEmpty", function(message) {
    return this.test("non-empty", message ?? (({ path })=>`${path} must not be empty`), (value)=>{
        return value !== "";
    });
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMethod"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"], "hasNested", function(path) {
    if (!path.match(/^[a-zA-Z0-9_$:-]*$/)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`yupSchema.hasNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(path)}`);
    const schemaInfo = this.meta()?.hexclaveSchemaInfo;
    if (schemaInfo?.type === "record") return schemaInfo.keySchema.isValidSync(path);
    else if (schemaInfo?.type === "union") return schemaInfo.items.some((s)=>s.hasNested(path));
    else try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reach"](this, path);
        return true;
    } catch (e) {
        if (e instanceof Error && e.message.includes("The schema does not contain the path")) return false;
        throw e;
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMethod"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"], "getNested", function(path) {
    if (!path.match(/^[a-zA-Z0-9_$:-]*$/)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`yupSchema.getNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(path)}`);
    if (!this.hasNested(path)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Tried to call yupSchema.getNested, but key is not present in the schema. Provided key: ${path}`, {
        path,
        schema: this
    });
    const schemaInfo = this.meta()?.hexclaveSchemaInfo;
    if (schemaInfo?.type === "record") return schemaInfo.valueSchema;
    else if (schemaInfo?.type === "union") return yupUnion(...schemaInfo.items.filter((s)=>s.hasNested(path)).map((s)=>s.getNested(path)));
    else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reach"](this, path);
});
async function yupValidate(schema, obj, options) {
    try {
        return await schema.validate(obj, {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["omit"])(options ?? {}, [
                "currentUserId"
            ]),
            context: {
                ...options?.context,
                hexclaveAllowUserIdMe: options?.currentUserId !== void 0
            }
        });
    } catch (error) {
        if (error instanceof ReplaceFieldWithOwnUserId) {
            const currentUserId = options?.currentUserId;
            if (!currentUserId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownErrors"].CannotGetOwnUserWithoutUser();
            let pathRemaining = error.path;
            const fieldPath = [];
            while(pathRemaining.length > 0)if (pathRemaining.startsWith("[")) {
                const index = pathRemaining.indexOf("]");
                if (index < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid path");
                fieldPath.push(JSON.parse(pathRemaining.slice(1, index)));
                pathRemaining = pathRemaining.slice(index + 1);
            } else {
                let dotIndex = pathRemaining.indexOf(".");
                if (dotIndex === -1) dotIndex = pathRemaining.length;
                fieldPath.push(pathRemaining.slice(0, dotIndex));
                pathRemaining = pathRemaining.slice(dotIndex + 1);
            }
            const newObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepPlainClone"])(obj);
            let it = newObj;
            for (const field of fieldPath.slice(0, -1)){
                if (!Object.prototype.hasOwnProperty.call(it, field)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Segment ${field} of path ${error.path} not found in object`);
                it = it[field];
            }
            it[fieldPath[fieldPath.length - 1]] = currentUserId;
            return await yupValidate(schema, newObj, options);
        }
        throw error;
    }
}
const _idDescription = (identify)=>`The unique identifier of the ${identify}`;
const _displayNameDescription = (identify)=>`Human-readable ${identify} display name. This is not a unique identifier.`;
const _clientMetaDataDescription = (identify)=>`Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.`;
const _clientReadOnlyMetaDataDescription = (identify)=>`Client read-only, server-writable metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client. The client can read this data, but cannot modify it. This is useful for things like subscription status.`;
const _profileImageUrlDescription = (identify)=>`URL of the profile image for ${identify}. Can be a Base64 encoded image. Must be smaller than 100KB. Please compress and crop to a square before passing in.`;
const _serverMetaDataDescription = (identify)=>`Server metadata. Used as a data store, only accessible from the server side. You can store secret information related to the ${identify} here.`;
const _atMillisDescription = (identify)=>`(the number of milliseconds since epoch, January 1, 1970, UTC)`;
const _createdAtMillisDescription = (identify)=>`The time the ${identify} was created ${_atMillisDescription(identify)}`;
const _signedUpAtMillisDescription = `The time the user signed up ${_atMillisDescription}`;
const _lastActiveAtMillisDescription = `The time the user was last active ${_atMillisDescription}`;
function yupString(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"](...args).meta({
        hexclaveSchemaInfo: {
            type: "string"
        }
    });
}
function yupNumber(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"](...args).meta({
        hexclaveSchemaInfo: {
            type: "number"
        }
    });
}
function yupBoolean(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"](...args).meta({
        hexclaveSchemaInfo: {
            type: "boolean"
        }
    });
}
/**
* @deprecated, use number of milliseconds since epoch instead
*/ function yupDate(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"](...args).meta({
        hexclaveSchemaInfo: {
            type: "date"
        }
    });
}
function _yupMixedInternal(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixed"](...args);
}
function yupMixed(...args) {
    return _yupMixedInternal(...args).meta({
        hexclaveSchemaInfo: {
            type: "mixed"
        }
    });
}
function yupArray(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"](...args).meta({
        hexclaveSchemaInfo: {
            type: "array"
        }
    });
}
function yupTuple(schemas) {
    if (schemas.length === 0) throw new Error("yupTuple must have at least one schema");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tuple"](schemas).meta({
        hexclaveSchemaInfo: {
            type: "tuple",
            items: schemas
        }
    });
}
function yupObjectWithAutoDefault(...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"](...args).test("no-unknown-object-properties", ({ path })=>`${path} contains unknown properties`, (value, context)=>{
        if (context.options.context?.noUnknownPathPrefixes?.some((prefix)=>context.path.startsWith(prefix))) {
            if (context.schema.spec.noUnknown !== false) {
                const availableKeys = new Set(Object.keys(context.schema.fields));
                const unknownKeys = Object.keys(value ?? {}).filter((key)=>!availableKeys.has(key));
                if (unknownKeys.length > 0) return context.createError({
                    message: `${context.path || "Object"} contains unknown properties: ${unknownKeys.join(", ")}`,
                    path: context.path,
                    params: {
                        unknownKeys,
                        availableKeys
                    }
                });
            }
        }
        return true;
    }).meta({
        hexclaveSchemaInfo: {
            type: "object"
        }
    });
}
function yupObject(...args) {
    return yupObjectWithAutoDefault(...args).default(void 0);
}
function yupNever() {
    return _yupMixedInternal().meta({
        hexclaveSchemaInfo: {
            type: "never"
        }
    }).test("never", "This value should never be reached", ()=>false);
}
function yupUnion(...args) {
    if (args.length === 0) throw new Error("yupUnion must have at least one schema");
    return _yupMixedInternal().meta({
        hexclaveSchemaInfo: {
            type: "union",
            items: args
        }
    }).test("is-one-of", "Invalid value", async (value, context)=>{
        if (value == null) return true;
        const errors = [];
        for (const schema of args)try {
            await yupValidate(schema, value, context.options);
            return true;
        } catch (e) {
            errors.push(e);
        }
        return context.createError({
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
        ${context.path} is not matched by any of the provided schemas:
          ${errors.map((e, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
            Schema ${i}:
              ${e.errors.join("\n")}
          `).join("\n")}`,
            path: context.path
        });
    });
}
function yupRecord(keySchema, valueSchema) {
    return yupObject().meta({
        hexclaveSchemaInfo: {
            type: "record",
            keySchema,
            valueSchema
        }
    }).unknown(true).test("record", "${path} must be a record of valid values", async function(value, context) {
        if (value == null) return true;
        const { path, createError } = this;
        if (typeof value !== "object") return createError({
            message: `${path} must be an object`
        });
        for (const key of Object.keys(value)){
            await yupValidate(keySchema, key, context.options);
            try {
                const childOptions = {
                    abortEarly: context.options.abortEarly,
                    disableStackTrace: context.options.disableStackTrace,
                    recursive: context.options.recursive,
                    path: context.options.path,
                    strict: false,
                    stripUnknown: context.options.stripUnknown,
                    context: {
                        ...context.options.context,
                        path: path ? `${path}.${key}` : key
                    }
                };
                const validatedValue = await yupValidate(valueSchema, value[key], childOptions);
                Object.defineProperty(value, key, {
                    value: validatedValue,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            } catch (e) {
                return createError({
                    path: path ? `${path}.${key}` : key,
                    message: e.message
                });
            }
        }
        return true;
    });
}
function ensureObjectSchema(schema) {
    if (!(schema instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectSchema"])) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`assertObjectSchema: schema is not an ObjectSchema: ${schema.describe().type}`);
    return schema;
}
const adaptSchema = yupMixed();
/**
* Yup's URL schema does not recognize some URLs (including `http://localhost`) as a valid URL. This schema is a workaround for that.
*/ const urlSchema = yupString().test({
    name: "no-spaces",
    message: (params)=>`${params.path} contains spaces`,
    test: (value)=>value == null || !value.includes(" ")
}).test({
    name: "url",
    message: (params)=>`${params.path} is not a valid URL`,
    test: (value)=>value == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUrl"])(value)
});
/**
* URL schema that supports wildcard patterns in hostnames (e.g., "https://*.example.com", "http://*:8080")
*/ const wildcardUrlSchema = yupString().test({
    name: "no-spaces",
    message: (params)=>`${params.path} contains spaces`,
    test: (value)=>value == null || !value.includes(" ")
}).test({
    name: "wildcard-url",
    message: (params)=>`${params.path} is not a valid URL or wildcard URL pattern`,
    test: (value)=>{
        if (value == null) return true;
        if (!value.includes("*")) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUrl"])(value);
        try {
            const PLACEHOLDER = "wildcard-placeholder";
            const normalizedUrl = value.replace(/\*/g, PLACEHOLDER);
            const url = new URL(normalizedUrl);
            if (url.username.includes(PLACEHOLDER) || url.password.includes(PLACEHOLDER) || url.pathname.includes(PLACEHOLDER) || url.search.includes(PLACEHOLDER) || url.hash.includes(PLACEHOLDER)) return false;
            if (url.protocol !== "http:" && url.protocol !== "https:") return false;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$urls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHostnameWithWildcards"])(url.hostname.split(PLACEHOLDER).join("*"));
        } catch (e) {
            return false;
        }
    }
});
const wildcardProtocolAndDomainSchema = wildcardUrlSchema.test({
    name: "is-protocol-and-domain",
    message: (params)=>`${params.path} must be a protocol and domain (with optional port) without any path, query parameters, or hash`,
    test: (value)=>{
        if (value == null) return true;
        try {
            const normalized = value.replace(/\*/g, "wildcard-placeholder");
            const url = new URL(normalized);
            return url.protocol !== "" && url.hostname !== "" && url.pathname === "/" && url.search === "" && url.hash === "";
        } catch (e) {
            return false;
        }
    }
});
const jsonSchema = yupMixed().nullable().defined().transform((value)=>JSON.parse(JSON.stringify(value)));
const jsonStringSchema = yupString().test("json", (params)=>`${params.path} is not valid JSON`, (value)=>{
    if (value == null) return true;
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
});
const jsonStringOrEmptySchema = yupString().test("json", (params)=>`${params.path} is not valid JSON`, (value)=>{
    if (!value) return true;
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
});
const base64Schema = yupString().test("is-base64", (params)=>`${params.path} is not valid base64`, (value)=>{
    if (value == null) return true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase64"])(value);
});
const passwordSchema = yupString().max(70);
const countryCodeSchema = yupString().transform((value)=>typeof value === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$country$2d$codes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeCountryCode"])(value) : value).test({
    name: "country-code",
    message: (params)=>`${params.path} must be a 2-letter country code`,
    test: (value)=>value == null || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$country$2d$codes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidCountryCode"])(value)
});
const intervalSchema = yupTuple([
    yupNumber().min(1).integer().defined(),
    yupString().oneOf([
        "millisecond",
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "year"
    ]).defined()
]);
const dayIntervalSchema = yupTuple([
    yupNumber().min(1).integer().defined(),
    yupString().oneOf([
        "day",
        "week",
        "month",
        "year"
    ]).defined()
]);
const intervalOrNeverSchema = yupUnion(intervalSchema.defined(), yupString().oneOf([
    "never"
]).defined());
const dayIntervalOrNeverSchema = yupUnion(dayIntervalSchema.defined(), yupString().oneOf([
    "never"
]).defined());
/**
* This schema is useful for fields where the user can specify the ID, such as price IDs. It is particularly common
* for IDs in the config schema.
*
* Valid IDs:
* - Must contain only letters, numbers, underscores, and hyphens
* - Must not start with a hyphen
* - Maximum length of 63 characters
*/ const USER_SPECIFIED_ID_PATTERN = /^[a-zA-Z0-9_][a-zA-Z0-9_-]*$/;
const USER_SPECIFIED_ID_MAX_LENGTH = 63;
/**
* Ids that cannot be used as an object KEY, which is what these ids are for.
*
* `__proto__` is the one that actually breaks: `obj["__proto__"] = value` on a
* plain object invokes the prototype setter instead of creating an own
* property, so the value silently disappears — and Prisma's JSON serializer
* strips the key even when the object is built prototype-less, so a record
* keyed by one cannot be stored at all. Refusing it at the door turns a
* confusing mid-flight failure ("no image was built for __proto__", a service
* stuck at "pending" whatever the runtime reports) into a message that names
* the problem.
*
* `constructor` and `prototype` assign cleanly and are listed for the same
* reason a reserved-word list exists at all: they are a trap for the next
* consumer that reaches for `in` or a prototype-bearing lookup.
*/ const RESERVED_USER_SPECIFIED_IDS = /* @__PURE__ */ new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
/**
* Checks if the given string is a valid user-specified ID.
*/ function isValidUserSpecifiedId(id) {
    return id.length > 0 && id.length <= 63 && USER_SPECIFIED_ID_PATTERN.test(id) && !RESERVED_USER_SPECIFIED_IDS.has(id);
}
/**
* Gets the error message for an invalid user-specified ID.
*/ function getUserSpecifiedIdErrorMessage(idName) {
    return `${idName} must contain only letters, numbers, underscores, and hyphens, and not start with a hyphen, and must not be one of ${[
        ...RESERVED_USER_SPECIFIED_IDS
    ].join(", ")}`;
}
/**
* Sanitizes user input to create a valid user-specified ID.
* Converts to lowercase and replaces invalid characters with hyphens.
* Strips leading hyphens.
*/ function sanitizeUserSpecifiedId(input) {
    return input.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9_-]/g, "").replace(/^-+/, "");
}
const userSpecifiedIdSchema = (idName)=>yupString().max(63).matches(USER_SPECIFIED_ID_PATTERN, getUserSpecifiedIdErrorMessage(idName)).test("not-reserved", `${idName} must not be a reserved name (${[
        ...RESERVED_USER_SPECIFIED_IDS
    ].join(", ")})`, (value)=>value == null || !RESERVED_USER_SPECIFIED_IDS.has(value));
/**
* Validates that a value is a decimal string like `"9.99"` or `"1000"` (see `MoneyAmount`).
*
* Currency amounts are always strings in `"<integer>"` or `"<integer>.<decimals>"` format — never
* cent integers or minor-unit numbers. For example, `"9.99"` means $9.99, not `999`.
*/ const moneyAmountSchema = (currency)=>yupString().test("money-amount", "Invalid money amount", (value, context)=>{
        if (value == null) return true;
        const match = value.match(/^([0-9]+)(\.([0-9]+))?$/);
        if (!match) return context.createError({
            message: "Money amount must be in the format of <number> or <number>.<number>"
        });
        const whole = match[1];
        const decimals = match[3];
        if (decimals && decimals.length > currency.decimals) return context.createError({
            message: `Too many decimals; ${currency.code} only has ${currency.decimals} decimals`
        });
        if (whole !== "0" && whole.startsWith("0")) return context.createError({
            message: "Money amount must not have leading zeros"
        });
        return true;
    });
/**
* A stricter email schema that does some additional checks for UX input. (Some emails are allowed by the spec, for
* example `test@localhost` or `abc@gmail`, but almost certainly a user input error.)
*
* Note that some users in the DB have an email that doesn't match this regex, so most of the time you should use
* `emailSchema` instead until we do the DB migration.
*/ const strictEmailSchema = (message)=>yupString().email(message).max(256).matches(/^[^.]+(\.[^.]+)*@.*\.[^.][^.]+$/, message);
const emailSchema = yupString().email();
const clientOrHigherAuthTypeSchema = yupString().oneOf([
    "client",
    "server",
    "admin"
]).defined();
const serverOrHigherAuthTypeSchema = yupString().oneOf([
    "server",
    "admin"
]).defined();
const adminAuthTypeSchema = yupString().oneOf([
    "admin"
]).defined();
const projectIdSchema = yupString().test((v)=>v === void 0 || v === "internal" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUuid"])(v)).meta({
    openapiField: {
        description: _idDescription("project"),
        exampleValue: "e0b52f4d-dece-408c-af49-d23061bb0f8d"
    }
});
const projectBranchIdSchema = yupString().nonEmpty().max(255).meta({
    openapiField: {
        description: _idDescription("project branch"),
        exampleValue: "main"
    }
});
const projectDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("project"),
        exampleValue: "MyMusic"
    }
});
const projectLogoUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the logo for the project. This is usually a close to 1:1 image of the company logo.",
        exampleValue: "https://example.com/logo.png"
    }
});
const projectLogoFullUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the full logo for the project. This is usually a vertical image with the logo and the company name.",
        exampleValue: "https://example.com/full-logo.png"
    }
});
const projectLogoDarkModeUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the dark mode logo for the project. This is usually a close to 1:1 image of the company logo optimized for dark backgrounds.",
        exampleValue: "https://example.com/logo-dark.png"
    }
});
const projectLogoFullDarkModeUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the dark mode full logo for the project. This is usually a vertical image with the logo and the company name optimized for dark backgrounds.",
        exampleValue: "https://example.com/full-logo-dark.png"
    }
});
const projectDescriptionSchema = yupString().nullable().meta({
    openapiField: {
        description: "A human readable description of the project",
        exampleValue: "A music streaming service"
    }
});
const projectCreatedAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _createdAtMillisDescription("project"),
        exampleValue: 163e10
    }
});
const projectIsProductionModeSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the project is in production mode",
        exampleValue: true
    }
});
const projectOnboardingStatusValues = [
    "config_choice",
    "apps_selection",
    "auth_setup",
    "domain_setup",
    "email_theme_setup",
    "payments_setup",
    "welcome",
    "completed"
];
const projectOnboardingStatusSchema = yupString().oneOf(projectOnboardingStatusValues).meta({
    openapiField: {
        description: "The current dashboard onboarding stage for this project.",
        exampleValue: "config_choice"
    }
});
const projectConfigIdSchema = yupString().meta({
    openapiField: {
        description: _idDescription("project config"),
        exampleValue: "d09201f0-54f5-40bd-89ff-6d1815ddad24"
    }
});
const projectAllowLocalhostSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether localhost is allowed as a domain for this project. Should only be allowed in development mode",
        exampleValue: true
    }
});
const projectCreateTeamOnSignUpSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether a team should be created for each user that signs up",
        exampleValue: true
    }
});
const projectMagicLinkEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether magic link authentication is enabled for this project",
        exampleValue: true
    }
});
const projectPasskeyEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether passkey authentication is enabled for this project",
        exampleValue: true
    }
});
const projectClientTeamCreationEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether client users can create teams",
        exampleValue: true
    }
});
const projectClientUserDeletionEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether client users can delete their own account from the client",
        exampleValue: true
    }
});
const projectSignUpEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether users can sign up new accounts, or whether they are only allowed to sign in to existing accounts. Regardless of this option, the server API can always create new users with the `POST /users` endpoint.",
        exampleValue: true
    }
});
const projectCredentialEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether email password authentication is enabled for this project",
        exampleValue: true
    }
});
const oauthIdSchema = yupString().oneOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProviders"]).meta({
    openapiField: {
        description: `OAuth provider ID, one of ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProviders"].map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "google"
    }
});
const oauthEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the OAuth provider is enabled. If an provider is first enabled, then disabled, it will be shown in the list but with enabled=false",
        exampleValue: true
    }
});
const oauthTypeSchema = yupString().oneOf([
    "shared",
    "standard"
]).meta({
    openapiField: {
        description: "OAuth provider type, one of shared, standard. \"shared\" uses Stack shared OAuth keys and it is only meant for development. \"standard\" uses your own OAuth keys and will show your logo and company name when signing in with the provider.",
        exampleValue: "standard"
    }
});
const oauthClientIdSchema = yupString().meta({
    openapiField: {
        description: "OAuth client ID. Needs to be specified when using type=\"standard\"",
        exampleValue: "google-oauth-client-id"
    }
});
const oauthClientSecretSchema = yupString().meta({
    openapiField: {
        description: "OAuth client secret. Needs to be specified when using type=\"standard\"",
        exampleValue: "google-oauth-client-secret"
    }
});
const oauthCustomCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The OAuth redirect/callback URL sent to the provider. When omitted, the default callback URL is used. Cannot be set for shared providers.",
        exampleValue: "https://api.hexclave.com/api/v1/auth/oauth/callback/google"
    }
});
const oauthFacebookConfigIdSchema = yupString().meta({
    openapiField: {
        description: "The configuration id for Facebook business login (for things like ads and marketing). This is only required if you are using the standard OAuth with Facebook and you are using Facebook business login."
    }
});
const oauthMicrosoftTenantIdSchema = yupString().meta({
    openapiField: {
        description: "The Microsoft tenant id for Microsoft directory. This is only required if you are using the standard OAuth with Microsoft and you have an Azure AD tenant."
    }
});
const oauthAppleTeamIdSchema = yupString().meta({
    openapiField: {
        description: "Apple Developer Team ID used to mint a client secret for Sign in with Apple."
    }
});
const oauthAppleKeyIdSchema = yupString().meta({
    openapiField: {
        description: "Apple private key ID used to mint a client secret for Sign in with Apple."
    }
});
const oauthApplePrivateKeySchema = yupString().meta({
    openapiField: {
        description: "Apple Sign in with Apple private key contents in .p8 PEM format."
    }
});
const oauthAppleBundleIdsSchema = yupArray(yupString().defined()).meta({
    openapiField: {
        description: "Apple Bundle IDs for native iOS/macOS apps. Required for native Sign In with Apple (in addition to web Apple OAuth which uses the Client ID/Services ID).",
        exampleValue: [
            "com.example.ios",
            "com.example.macos"
        ]
    }
});
const oauthAppleBundleIdSchema = yupString().defined().meta({
    openapiField: {
        description: "Apple Bundle ID for native iOS/macOS apps.",
        exampleValue: "com.example.ios"
    }
});
const oauthAccountMergeStrategySchema = yupString().oneOf([
    "link_method",
    "raise_error",
    "allow_duplicates"
]).meta({
    openapiField: {
        description: "Determines how to handle OAuth logins that match an existing user by email. `link_method` adds the OAuth method to the existing user. `raise_error` rejects the login with an error. `allow_duplicates` creates a new user.",
        exampleValue: "link_method"
    }
});
const oauthIssuerUrlSchema = urlSchema.meta({
    openapiField: {
        description: "OIDC issuer URL for custom OIDC providers. Must support OIDC discovery (/.well-known/openid-configuration). Only used when type is \"custom_oidc\".",
        exampleValue: "https://accounts.google.com"
    }
});
const oauthScopeSchema = yupString().meta({
    openapiField: {
        description: "Space-separated OAuth scopes to request from the custom OIDC provider. Defaults to \"openid email profile\" if not specified.",
        exampleValue: "openid email profile"
    }
});
const emailTypeSchema = yupString().oneOf([
    "shared",
    "standard"
]).meta({
    openapiField: {
        description: "Email provider type, one of shared, standard. \"shared\" uses Stack shared email provider and it is only meant for development. \"standard\" uses your own email server and will have your email address as the sender.",
        exampleValue: "standard"
    }
});
const emailSenderNameSchema = yupString().meta({
    openapiField: {
        description: "Email sender name. Needs to be specified when using type=\"standard\"",
        exampleValue: "Stack"
    }
});
const emailHostSchema = yupString().meta({
    openapiField: {
        description: "Email host. Needs to be specified when using type=\"standard\"",
        exampleValue: "smtp.your-domain.com"
    }
});
const emailPortSchema = yupNumber().min(0).max(65535).meta({
    openapiField: {
        description: "Email port. Needs to be specified when using type=\"standard\"",
        exampleValue: 587
    }
});
const emailUsernameSchema = yupString().meta({
    openapiField: {
        description: "Email username. Needs to be specified when using type=\"standard\"",
        exampleValue: "smtp-email"
    }
});
const emailSenderEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Email sender email. Needs to be specified when using type=\"standard\"",
        exampleValue: "example@your-domain.com"
    }
});
const emailPasswordSchema = yupString().max(256).meta({
    openapiField: {
        description: "Email password. Needs to be specified when using type=\"standard\"",
        exampleValue: "your-email-password"
    }
});
const handlerPathSchema = yupString().test("is-handler-path", "Handler path must start with /", (value)=>value?.startsWith("/")).meta({
    openapiField: {
        description: "Handler path. If you did not setup a custom handler path, it should be \"/handler\" by default. It needs to start with /",
        exampleValue: "/handler"
    }
});
const emailThemeSchema = yupString().meta({
    openapiField: {
        description: "Email theme id for the project. Determines the visual style of emails sent by the project."
    }
});
const emailThemeListSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Email theme name",
            exampleValue: "Default Light"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Email theme source code tsx component"
        }
    }).defined()
})).meta({
    openapiField: {
        description: "Record of email theme IDs to their display name and source code"
    }
});
const templateThemeIdSchema = yupMixed().test((v)=>v === void 0 || v === false || v === null || typeof v === "string" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUuid"])(v)).meta({
    openapiField: {
        description: "Email theme id for the template"
    }
}).optional();
const emailTemplateListSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Email template name",
            exampleValue: "Email Verification"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Email template source code tsx component"
        }
    }).defined(),
    themeId: templateThemeIdSchema
})).meta({
    openapiField: {
        description: "Record of email template IDs to their display name and source code"
    }
});
const customDashboardsSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Custom dashboard name",
            exampleValue: "User Growth Dashboard"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Custom dashboard source code tsx component"
        }
    }).defined()
})).meta({
    openapiField: {
        description: "Record of custom dashboard IDs to their display name and source code"
    }
});
const customerTypeSchema = yupString().oneOf([
    "user",
    "team",
    "custom"
]);
const validateHasAtLeastOneSupportedCurrency = (value, context)=>{
    if (!value) return true;
    if (Object.keys(value).filter((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$currency$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].some((c)=>c.code === key)).length === 0) return context.createError({
        message: "At least one currency is required"
    });
    return true;
};
/**
* Schema for a single product price. Each currency field (USD, EUR, etc.) is a decimal string
* like `"9.99"` or `"1000"` — never cent integers. See `MoneyAmount` for the exact format.
*/ const productPriceSchema = yupObject({
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedFromEntries"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$currency$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].map((currency)=>[
            currency.code,
            moneyAmountSchema(currency).optional()
        ])),
    interval: dayIntervalSchema.optional(),
    serverOnly: yupBoolean(),
    freeTrial: dayIntervalSchema.optional()
}).test("at-least-one-currency", (value, context)=>validateHasAtLeastOneSupportedCurrency(value, context));
const pricesSchema = yupRecord(userSpecifiedIdSchema("priceId"), productPriceSchema);
const productSchema = yupObject({
    displayName: yupString(),
    productLineId: userSpecifiedIdSchema("productLineId").optional().meta({
        openapiField: {
            description: "The ID of the product line this product belongs to. Within a product line, all products are mutually exclusive unless they are an add-on to another product in the product line.",
            exampleValue: "product-line-id"
        }
    }),
    isAddOnTo: yupUnion(yupBoolean().isFalse(), yupRecord(userSpecifiedIdSchema("productId"), yupBoolean().isTrue().defined())).optional().meta({
        openapiField: {
            description: "The products that this product is an add-on to. If this is set, the customer must already have one of the products in the record to be able to purchase this product.",
            exampleValue: {
                "product-id": true
            }
        }
    }),
    customerType: customerTypeSchema.defined(),
    freeTrial: dayIntervalSchema.optional(),
    serverOnly: yupBoolean(),
    stackable: yupBoolean(),
    prices: pricesSchema.defined(),
    includedItems: yupRecord(userSpecifiedIdSchema("itemId"), yupObject({
        quantity: yupNumber().defined(),
        repeat: dayIntervalOrNeverSchema.optional(),
        expires: yupString().oneOf([
            "never",
            "when-purchase-expires",
            "when-repeated"
        ]).optional()
    }))
});
const productMetadataExample = {
    featureFlag: true,
    source: "marketing-campaign"
};
const productClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productSchemaWithMetadata = productSchema.concat(yupObject({
    clientMetadata: productClientMetadataSchema.optional(),
    clientReadOnlyMetadata: productClientReadOnlyMetadataSchema.optional(),
    serverMetadata: productServerMetadataSchema.optional()
}));
const inlineProductSchema = yupObject({
    display_name: yupString().defined(),
    customer_type: customerTypeSchema.defined(),
    free_trial: dayIntervalSchema.optional(),
    server_only: yupBoolean().default(true),
    stackable: yupBoolean().default(false),
    prices: yupRecord(userSpecifiedIdSchema("priceId"), yupObject({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedFromEntries"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$currency$2d$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].map((currency)=>[
                currency.code,
                moneyAmountSchema(currency).optional()
            ])),
        interval: dayIntervalSchema.optional(),
        free_trial: dayIntervalSchema.optional()
    }).test("at-least-one-currency", (value, context)=>validateHasAtLeastOneSupportedCurrency(value, context))),
    included_items: yupRecord(userSpecifiedIdSchema("itemId"), yupObject({
        quantity: yupNumber(),
        repeat: dayIntervalOrNeverSchema.optional(),
        expires: yupString().oneOf([
            "never",
            "when-purchase-expires",
            "when-repeated"
        ]).optional()
    })),
    client_metadata: productClientMetadataSchema.optional(),
    client_read_only_metadata: productClientReadOnlyMetadataSchema.optional(),
    server_metadata: productServerMetadataSchema.optional()
});
var ReplaceFieldWithOwnUserId = class extends Error {
    constructor(path){
        super(`This error should be caught by whoever validated the schema, and the field in the path '${path}' should be replaced with the current user's id. This is a workaround to yup not providing access to the context inside the transform function.`);
        this.path = path;
    }
};
const userIdMeSentinelUuid = "cad564fd-f81b-43f4-b390-98abf3fcc17e";
const userIdOrMeSchema = yupString().uuid().transform((v)=>{
    if (v === "me") return userIdMeSentinelUuid;
    else return v;
}).test((v, context)=>{
    if (!("hexclaveAllowUserIdMe" in (context.options.context ?? {}))) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("userIdOrMeSchema is not allowed in this context. Make sure you're using yupValidate from schema-fields.ts to validate, instead of schema.validate(...).");
    if (!context.options.context?.hexclaveAllowUserIdMe) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("userIdOrMeSchema is not allowed in this context. Make sure you're passing in the currentUserId option in yupValidate.");
    if (v === userIdMeSentinelUuid) throw new ReplaceFieldWithOwnUserId(context.path);
    return true;
}).meta({
    openapiField: {
        description: "The ID of the user, or the special value `me` for the currently authenticated user",
        exampleValue: "3241a285-8329-4d69-8f3d-316e08cf140c"
    }
});
const userIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("user"),
        exampleValue: "3241a285-8329-4d69-8f3d-316e08cf140c"
    }
});
const primaryEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Primary email",
        exampleValue: "johndoe@example.com"
    }
});
const primaryEmailAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the primary email is used for authentication. If this is set to `false`, the user will not be able to sign in with the primary email with password or OTP",
        exampleValue: true
    }
});
const primaryEmailVerifiedSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the primary email has been verified to belong to this user",
        exampleValue: true
    }
});
const userDisplayNameSchema = yupString().nullable().max(256).meta({
    openapiField: {
        description: _displayNameDescription("user"),
        exampleValue: "John Doe"
    }
});
const selectedTeamIdSchema = yupString().uuid().meta({
    openapiField: {
        description: "ID of the team currently selected by the user",
        exampleValue: "team-id"
    }
});
const profileImageUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: _profileImageUrlDescription("user"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const signedUpAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _signedUpAtMillisDescription,
        exampleValue: 163e10
    }
});
const userClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userOAuthProviderSchema = yupObject({
    id: yupString().defined(),
    type: yupString().oneOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProviders"]).defined(),
    provider_user_id: yupString().defined()
});
const userLastActiveAtMillisSchema = yupNumber().nullable().meta({
    openapiField: {
        description: _lastActiveAtMillisDescription,
        exampleValue: 163e10
    }
});
const userPasskeyAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has passkeys enabled",
        exampleValue: false
    }
});
const userOtpAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has OTP/magic link enabled. ",
        exampleValue: true
    }
});
const userOtpAuthEnabledMutationSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has OTP/magic link enabled. Note that only accounts with verified emails can sign-in with OTP.",
        exampleValue: true
    }
});
const userHasPasswordSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has a password set. If the user does not have a password set, they will not be able to sign in with email/password.",
        exampleValue: true
    }
});
const userPasswordMutationSchema = passwordSchema.nullable().meta({
    openapiField: {
        description: "Sets the user's password. Doing so revokes all current sessions.",
        exampleValue: "my-new-password"
    }
}).max(70);
const userPasswordHashMutationSchema = yupString().nonEmpty().meta({
    openapiField: {
        description: "If `password` is not given, sets the user's password hash to the given string in Modular Crypt Format (ex.: `$2a$10$VIhIOofSMqGdGlL4wzE//e.77dAQGqNtF/1dT7bqCrVtQuInWy2qi`). Doing so revokes all current sessions."
    }
});
const userTotpSecretMutationSchema = base64Schema.nullable().meta({
    openapiField: {
        description: "Enables 2FA and sets a TOTP secret for the user. Set to null to disable 2FA.",
        exampleValue: "dG90cC1zZWNyZXQ="
    }
});
const restrictedReasonTypes = [
    "anonymous",
    "email_not_verified",
    "restricted_by_administrator"
];
const restrictedReasonSchema = yupObject({
    type: yupString().oneOf(restrictedReasonTypes).defined()
});
const accessTokenPayloadSchema = yupObject({
    sub: yupString().defined(),
    exp: yupNumber().optional(),
    iat: yupNumber().defined(),
    iss: yupString().defined(),
    aud: yupString().defined(),
    project_id: yupString().defined(),
    branch_id: yupString().defined(),
    refresh_token_id: yupString().defined(),
    role: yupString().oneOf([
        "authenticated"
    ]).defined(),
    name: yupString().defined().nullable(),
    email: yupString().defined().nullable(),
    email_verified: yupBoolean().defined(),
    selected_team_id: yupString().defined().nullable(),
    signed_up_at: yupNumber().defined(),
    is_anonymous: yupBoolean().defined(),
    is_restricted: yupBoolean().defined(),
    restricted_reason: restrictedReasonSchema.defined().nullable(),
    requires_totp_mfa: yupBoolean().defined()
});
const signInEmailSchema = strictEmailSchema(void 0).meta({
    openapiField: {
        description: "The email to sign in with.",
        exampleValue: "johndoe@example.com"
    }
});
const emailOtpSignInCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct the magic link from. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/auth/otp/sign-in` endpoint.",
        exampleValue: "https://example.com/handler/magic-link-callback"
    }
});
const emailVerificationCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct a verification link for the verification e-mail. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/contact-channels/verify` endpoint.",
        exampleValue: "https://example.com/handler/email-verification"
    }
});
const accessTokenResponseSchema = yupString().meta({
    openapiField: {
        description: "Short-lived access token that can be used to authenticate the user",
        exampleValue: "eyJhmMiJB2TO...diI4QT"
    }
});
const refreshTokenResponseSchema = yupString().meta({
    openapiField: {
        description: "Long-lived refresh token that can be used to obtain a new access token",
        exampleValue: "i8ns3aq2...14y"
    }
});
const signInResponseSchema = yupObject({
    refresh_token: refreshTokenResponseSchema.defined(),
    access_token: accessTokenResponseSchema.defined(),
    is_new_user: yupBoolean().meta({
        openapiField: {
            description: "Whether the user is a new user",
            exampleValue: true
        }
    }).defined(),
    user_id: userIdSchema.defined()
});
const teamSystemPermissions = [
    "$update_team",
    "$delete_team",
    "$read_members",
    "$remove_members",
    "$invite_members",
    "$manage_api_keys"
];
const permissionDefinitionIdSchema = yupString().matches(/^\$?[a-z0-9_:]+$/, "Only lowercase letters, numbers, \":\", \"_\" and optional \"$\" at the beginning are allowed").test("is-system-permission", "System permissions must start with a dollar sign", (value, ctx)=>{
    if (!value) return true;
    if (value.startsWith("$") && !teamSystemPermissions.includes(value)) return ctx.createError({
        message: "Invalid system permission"
    });
    return true;
}).meta({
    openapiField: {
        description: `The permission ID used to uniquely identify a permission. Can either be a custom permission with lowercase letters, numbers, \`:\`, and \`_\` characters, or one of the system permissions: ${teamSystemPermissions.map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "read_secret_info"
    }
});
const customPermissionDefinitionIdSchema = yupString().matches(/^[a-z0-9_:]+$/, "Only lowercase letters, numbers, \":\", \"_\" are allowed").meta({
    openapiField: {
        description: "The permission ID used to uniquely identify a permission. Can only contain lowercase letters, numbers, \":\", and \"_\" characters",
        exampleValue: "read_secret_info"
    }
});
const teamPermissionDescriptionSchema = yupString().meta({
    openapiField: {
        description: "A human-readable description of the permission",
        exampleValue: "Read secret information"
    }
});
const containedPermissionIdsSchema = yupArray(permissionDefinitionIdSchema.defined()).meta({
    openapiField: {
        description: "The IDs of the permissions that are contained in this permission",
        exampleValue: [
            "read_public_info"
        ]
    }
});
const teamIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("team"),
        exampleValue: "ad962777-8244-496a-b6a2-e0c6a449c79e"
    }
});
const teamDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("team"),
        exampleValue: "My Team"
    }
});
const teamProfileImageUrlSchema = urlSchema.max(1e6).meta({
    openapiField: {
        description: _profileImageUrlDescription("team"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const teamClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamCreatedAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _createdAtMillisDescription("team"),
        exampleValue: 163e10
    }
});
const teamInvitationEmailSchema = emailSchema.meta({
    openapiField: {
        description: "The email of the user to invite.",
        exampleValue: "johndoe@example.com"
    }
});
const teamInvitationCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct an invite link with. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/team-invitations/accept` endpoint.",
        exampleValue: "https://example.com/handler/team-invitation"
    }
});
const teamCreatorUserIdSchema = userIdOrMeSchema.meta({
    openapiField: {
        description: "The ID of the creator of the team. If not specified, the user will not be added to the team. Can be either \"me\" or the ID of the user. Only used on the client side.",
        exampleValue: "me"
    }
});
const teamMemberDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("team member") + " Note that this is separate from the display_name of the user.",
        exampleValue: "John Doe"
    }
});
const teamMemberProfileImageUrlSchema = urlSchema.max(1e6).meta({
    openapiField: {
        description: _profileImageUrlDescription("team member"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const contactChannelIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("contact channel"),
        exampleValue: "b3d396b8-c574-4c80-97b3-50031675ceb2"
    }
});
const contactChannelTypeSchema = yupString().oneOf([
    "email"
]).meta({
    openapiField: {
        description: `The type of the contact channel. Currently only "email" is supported.`,
        exampleValue: "email"
    }
});
const contactChannelValueSchema = yupString().when("type", {
    is: "email",
    then: (schema)=>schema.email()
}).meta({
    openapiField: {
        description: "The value of the contact channel. For email, this should be a valid email address.",
        exampleValue: "johndoe@example.com"
    }
});
const contactChannelUsedForAuthSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel is used for authentication. If this is set to `true`, the user will be able to sign in with the contact channel with password or OTP.",
        exampleValue: true
    }
});
const contactChannelIsVerifiedSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel has been verified. If this is set to `true`, the contact channel has been verified to belong to the user.",
        exampleValue: true
    }
});
const contactChannelIsPrimarySchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel is the primary contact channel. If this is set to `true`, it will be used for authentication and notifications by default.",
        exampleValue: true
    }
});
const oauthProviderIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("OAuth provider"),
        exampleValue: "b3d396b8-c574-4c80-97b3-50031675ceb2"
    }
});
const oauthProviderEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Email of the OAuth provider. This is used to display and identify the OAuth provider in the UI.",
        exampleValue: "test@gmail.com"
    }
});
const oauthProviderTypeSchema = yupString().oneOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProviders"]).meta({
    openapiField: {
        description: `OAuth provider type, one of ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$oauth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allProviders"].map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "google"
    }
});
const oauthProviderAllowSignInSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the user can use this OAuth provider to sign in. Only one OAuth provider per type can have this set to `true`.",
        exampleValue: true
    }
});
const oauthProviderAllowConnectedAccountsSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the user can use this OAuth provider as connected account. Multiple OAuth providers per type can have this set to `true`.",
        exampleValue: true
    }
});
const oauthProviderAccountIdSchema = yupString().meta({
    openapiField: {
        description: "Account ID of the OAuth provider. This uniquely identifies the account on the provider side.",
        exampleValue: "google-account-id-12345"
    }
});
const oauthProviderProviderConfigIdSchema = yupString().meta({
    openapiField: {
        description: "Provider config ID of the OAuth provider. This uniquely identifies the provider config on config.json file",
        exampleValue: "google"
    }
});
const configAgentSafeErrorMessages = [
    "The config agent failed to apply the change.",
    "Sandbox session expired. Please retry the update.",
    "Failed to commit and push the config changes.",
    "The GitHub branch changed before the config commit could be pushed. Retry the update to apply the same changes on the latest branch."
];
const configAgentSafeErrorMessageSchema = yupString().oneOf(configAgentSafeErrorMessages);
const basicAuthorizationHeaderSchema = yupString().test("is-basic-authorization-header", "Authorization header must be in the format \"Basic <base64>\"", (value)=>{
    if (!value) return true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBasicAuthorizationHeader"])(value) !== null;
});
const neonAuthorizationHeaderSchema = basicAuthorizationHeaderSchema.test("is-authorization-header", "Invalid client_id:client_secret values; did you use the correct values for the integration?", (value)=>{
    if (!value) return true;
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBasicAuthorizationHeader"])(value);
    if (decoded === null) return true;
    const [clientId, clientSecret] = decoded;
    for (const neonClientConfig of JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProcessEnv"])("STACK_INTEGRATION_CLIENTS_CONFIG") || "[]"))if (clientId === neonClientConfig.client_id && clientSecret === neonClientConfig.client_secret) return true;
    return false;
});
function yupDefinedWhen(schema, triggers) {
    const entries = Object.entries(triggers);
    return schema.when(entries.map(([key])=>key), {
        is: (...values)=>entries.every(([key, value], index)=>value === values[index]),
        then: (schema)=>schema.defined(),
        otherwise: (schema)=>schema.optional()
    });
}
function yupDefinedAndNonEmptyWhen(schema, triggers) {
    const entries = Object.entries(triggers);
    return schema.when(entries.map(([key])=>key), {
        is: (...values)=>entries.every(([key, value], index)=>value === values[index]),
        then: (schema)=>schema.defined().nonEmpty(),
        otherwise: (schema)=>schema.optional()
    });
}
const branchConfigSourceSchema = yupUnion(yupObject({
    type: yupString().oneOf([
        "pushed-from-github"
    ]).defined(),
    owner: yupString().defined(),
    repo: yupString().defined(),
    branch: yupString().defined(),
    commit_hash: yupString().defined(),
    config_file_path: yupString().defined(),
    workflow_path: yupString().optional()
}), yupObject({
    type: yupString().oneOf([
        "pushed-from-unknown"
    ]).defined()
}), yupObject({
    type: yupString().oneOf([
        "unlinked"
    ]).defined()
}));
/**
* State of a single dashboard→GitHub config agent run, so the dashboard can poll for
* progress and surface the resulting commit (or error). Each run is one row in the
* `ConfigAgentRun` table, addressed by `id`; runs are NOT serialized, so many can
* target the same branch at once and GitHub catches conflicts at push time.
*/ const configAgentRunSchema = yupObject({
    id: yupString().uuid().defined(),
    status: yupString().oneOf([
        "running",
        "awaiting_review",
        "success",
        "no-change",
        "error",
        "cancelled"
    ]).defined(),
    started_at: yupNumber().defined(),
    finished_at: yupNumber().optional(),
    commit_url: urlSchema.optional(),
    error: configAgentSafeErrorMessageSchema.optional(),
    sandbox_id: yupString().optional(),
    progress: yupString().optional(),
    stage: yupString().oneOf([
        "initializing_sandbox",
        "cloning_repo",
        "agent_making_changes",
        "awaiting_review"
    ]).optional(),
    diff: yupString().optional()
});
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/sessions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessToken",
    ()=>AccessToken,
    "InternalSession",
    ()=>InternalSession,
    "RefreshToken",
    ()=>RefreshToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$schema$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/schema-fields.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/util/decode_jwt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/stores.js [app-client] (ecmascript)");
;
;
;
;
;
//#region src/sessions.ts
function decodeAccessTokenIfValid(token) {
    try {
        const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"](token);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$schema$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["accessTokenPayloadSchema"].validateSync(payload);
    } catch (e) {
        return null;
    }
}
var AccessToken = class AccessToken {
    static createIfValid(token) {
        if (!decodeAccessTokenIfValid(token)) return null;
        return new AccessToken(token);
    }
    constructor(token){
        this.token = token;
        if (token === "undefined") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Access token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!");
    }
    get payload() {
        return decodeAccessTokenIfValid(this.token) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Invalid access token in payload (should've been validated in createIfValid)", {
            token: this.token
        });
    }
    get expiresAt() {
        const { exp } = this.payload;
        if (exp === void 0) return /* @__PURE__ */ new Date(864e13);
        return /* @__PURE__ */ new Date(exp * 1e3);
    }
    get issuedAt() {
        const { iat } = this.payload;
        return /* @__PURE__ */ new Date(iat * 1e3);
    }
    /**
	* @returns The number of milliseconds until the access token expires, or 0 if it has already expired.
	*/ get expiresInMillis() {
        return Math.max(0, this.expiresAt.getTime() - Date.now());
    }
    get issuedMillisAgo() {
        return Math.max(0, Date.now() - this.issuedAt.getTime());
    }
    isExpired() {
        return this.expiresInMillis <= 0;
    }
};
var RefreshToken = class {
    constructor(token){
        this.token = token;
        if (token === "undefined") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Refresh token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!");
    }
};
/**
* An InternalSession represents a user's session, which may or may not be valid. It may contain an access token, a refresh token, or both.
*
* A session never changes which user or session it belongs to, but the tokens in it may change over time.
*/ var InternalSession = class InternalSession {
    constructor(_options){
        this._options = _options;
        this._knownToBeInvalid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](false);
        this._refreshPromise = null;
        this._accessToken = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$stores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](_options.accessToken ? AccessToken.createIfValid(_options.accessToken) : null);
        this._refreshToken = _options.refreshToken ? new RefreshToken(_options.refreshToken) : null;
        if (_options.accessToken === null && _options.refreshToken === null) this._knownToBeInvalid.set(true);
        this.sessionKey = InternalSession.calculateSessionKey({
            accessToken: _options.accessToken ?? null,
            refreshToken: _options.refreshToken
        });
    }
    static calculateSessionKey(ofTokens) {
        if (ofTokens.refreshToken) return `refresh-${ofTokens.refreshToken}`;
        else if (ofTokens.accessToken) {
            const refreshTokenId = decodeAccessTokenIfValid(ofTokens.accessToken)?.refresh_token_id;
            if (refreshTokenId) return `access-session-${refreshTokenId}`;
            return `access-${ofTokens.accessToken}`;
        } else return "not-logged-in";
    }
    isKnownToBeInvalid() {
        return this._knownToBeInvalid.get();
    }
    /**
	* Marks the session object as invalid, meaning that the refresh and access tokens can no longer be used. There is no
	* way out of this state, and the session object will never return valid tokens again.
	*/ markInvalid() {
        this._accessToken.set(null);
        this._knownToBeInvalid.set(true);
    }
    onInvalidate(callback) {
        return this._knownToBeInvalid.onChange(()=>callback());
    }
    getRefreshToken() {
        if (this.isKnownToBeInvalid()) return null;
        return this._refreshToken;
    }
    /**
	* Returns the access token if it is found in the cache and not expired yet, or null otherwise. Never fetches new tokens.
	*/ getAccessTokenIfNotExpiredYet(minMillisUntilExpiration, maxMillisSinceIssued) {
        if (minMillisUntilExpiration > 45e3) throw new Error(`Required access token expiry ${minMillisUntilExpiration}ms is too long; access tokens are too short to be used for more than 45s`);
        if (maxMillisSinceIssued !== null && maxMillisSinceIssued < 15e3) throw new Error(`Required access token issuance ${maxMillisSinceIssued}ms is too short; assume that access token generation can take at least 15s`);
        const accessToken = this._getPotentiallyInvalidAccessTokenIfAvailable();
        if (!accessToken || accessToken.expiresInMillis < minMillisUntilExpiration) return null;
        if (maxMillisSinceIssued !== null && accessToken.issuedMillisAgo > maxMillisSinceIssued) return null;
        return accessToken;
    }
    /**
	* Returns the access token if it is found in the cache, fetching it otherwise.
	*
	* This is usually the function you want to call to get an access token. Either set `minMillisUntilExpiration` to a reasonable value, or catch errors that occur if it expires, and call `markAccessTokenExpired` to mark the token as expired if so (after which a call to this function will always refetch the token).
	*
	* @returns null if the session is known to be invalid, cached tokens if they exist in the cache and the access token hasn't expired yet (the refresh token might still be invalid), or new tokens otherwise.
	*/ async getOrFetchLikelyValidTokens(minMillisUntilExpiration, maxMillisSinceIssued) {
        if (this.isKnownToBeInvalid()) return null;
        const accessToken = this.getAccessTokenIfNotExpiredYet(minMillisUntilExpiration, maxMillisSinceIssued);
        if (!accessToken) {
            let newTokens = await this.fetchNewTokens();
            let issuedMillisAgo = newTokens?.accessToken.issuedMillisAgo;
            if (maxMillisSinceIssued !== null && issuedMillisAgo !== void 0 && issuedMillisAgo > maxMillisSinceIssued) {
                newTokens = await this.fetchNewTokens();
                issuedMillisAgo = newTokens?.accessToken.issuedMillisAgo;
            }
            const expiresInMillis = newTokens?.accessToken.expiresInMillis;
            if (expiresInMillis !== void 0 && expiresInMillis < minMillisUntilExpiration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Required access token expiry ${minMillisUntilExpiration}ms is too long; access tokens are too short when they're generated (${expiresInMillis}ms)`);
            if (maxMillisSinceIssued !== null && issuedMillisAgo !== void 0 && issuedMillisAgo > maxMillisSinceIssued) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Required access token issuance ${maxMillisSinceIssued}ms is too short; access token issuance is too slow (${issuedMillisAgo}ms)`);
            return newTokens;
        }
        return {
            accessToken,
            refreshToken: this.getRefreshToken()
        };
    }
    /**
	* Fetches new tokens that are, at the time of fetching, guaranteed to be valid.
	*
	* The newly generated tokens are short-lived, so it's good practice not to rely on their validity (if possible). However, this function is useful in some cases where you only want to pass access tokens to a service, and you want to make sure said access token has the longest possible lifetime.
	*
	* In most cases, you should prefer `getOrFetchLikelyValidTokens`.
	*
	* @returns null if the session is known to be invalid, or new tokens otherwise (which, at the time of fetching, are guaranteed to be valid).
	*/ async fetchNewTokens() {
        const accessToken = await this._getNewlyFetchedAccessToken();
        return accessToken ? {
            accessToken,
            refreshToken: this._refreshToken
        } : null;
    }
    /**
	* Installs a freshly obtained token pair's access token into this session in place, keeping the session object
	* (and therefore every session-scoped cache) stable instead of constructing a new InternalSession. No-op if the
	* session is invalid, the access token can't be decoded, it's unchanged, or the pair doesn't map to this session
	* (so a foreign token can never be written into this object's cache); never clears an existing token.
	*/ updateAccessToken(tokens) {
        if (this._knownToBeInvalid.get()) return;
        if (!tokens.accessToken) return;
        const newAccessToken = AccessToken.createIfValid(tokens.accessToken);
        if (!newAccessToken) return;
        if (InternalSession.calculateSessionKey(tokens) !== this.sessionKey) return;
        if (this._accessToken.get()?.token === newAccessToken.token) return;
        this._accessToken.set(newAccessToken);
    }
    /**
	* Manually mark the access token as expired, even if the date on its payload may still be valid.
	*
	* You don't usually have to call this function anymore, but you may want to call suggestAccessTokenExpired
	* to hint that the access token should be refreshed as its data may have changed, if possible.
	*/ markAccessTokenExpired(accessToken) {
        if (!accessToken || this._accessToken.get()?.token === accessToken.token) this._accessToken.set(null);
    }
    /**
	* Strongly suggests that the access token should be refreshed as its data may have changed, although it's up to this
	* implementation to decide whether or when the access token will be refreshed.
	*
	* This is particularly useful when the data associated with the access token may have changed for example due to an
	* update to the user's profile.
	*
	* The current implementation marks the access token as expired if and only if a refresh token is available (regardless of
	* whether the refresh token is actually valid or not), although this is not a guarantee and subject to change.
	*
	* If you need a stronger guarantee of revoking an access token, use markAccessTokenExpired instead.
	*/ suggestAccessTokenExpired() {
        if (this._refreshToken) this.markAccessTokenExpired();
    }
    startRefreshingAccessToken(minMillisUntilExpiration, maxMillisSinceIssued) {
        let canceled = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            while(!canceled){
                const tokens = await this.getOrFetchLikelyValidTokens(minMillisUntilExpiration, maxMillisSinceIssued);
                if (!tokens) return;
                const nextRefreshIn = Math.min(tokens.accessToken.expiresInMillis - minMillisUntilExpiration, (maxMillisSinceIssued ?? Infinity) - tokens.accessToken.issuedMillisAgo);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])(Math.max(1, nextRefreshIn));
            }
        });
        return {
            unsubscribe: ()=>{
                canceled = true;
            }
        };
    }
    /**
	* Note that a callback invocation with `null` does not mean the session has been invalidated; the access token may just have expired. Use `onInvalidate` to detect invalidation.
	*/ onAccessTokenChange(callback) {
        return this._accessToken.onChange(callback);
    }
    /**
	* @returns An access token, which may be expired or expire soon, or null if it is known to be invalid.
	*/ _getPotentiallyInvalidAccessTokenIfAvailable() {
        if (this.isKnownToBeInvalid()) return null;
        const accessToken = this._accessToken.get();
        if (accessToken && !accessToken.isExpired()) return accessToken;
        return null;
    }
    /**
	* You should prefer `_getOrFetchPotentiallyInvalidAccessToken` in almost all cases.
	*
	* @returns A newly fetched access token (never read from cache), or null if the session either does not represent a user or the session is invalid.
	*/ async _getNewlyFetchedAccessToken() {
        if (!this._refreshToken) return null;
        if (this._knownToBeInvalid.get()) return null;
        if (!this._refreshPromise) this._refreshAndSetRefreshPromise(this._refreshToken);
        return await this._refreshPromise;
    }
    _refreshAndSetRefreshPromise(refreshToken) {
        let refreshPromise = this._options.refreshAccessTokenCallback(refreshToken).then((accessToken)=>{
            if (refreshPromise === this._refreshPromise) {
                this._refreshPromise = null;
                this._accessToken.set(accessToken);
                if (!accessToken) this.markInvalid();
            }
            return accessToken;
        }).finally(()=>{
            if (refreshPromise === this._refreshPromise) this._refreshPromise = null;
        });
        this._refreshPromise = refreshPromise;
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/arrays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enumerate",
    ()=>enumerate,
    "findLastIndex",
    ()=>findLastIndex,
    "getChunks",
    ()=>getChunks,
    "groupBy",
    ()=>groupBy,
    "isBooleanArray",
    ()=>isBooleanArray,
    "isNumberArray",
    ()=>isNumberArray,
    "isObjectArray",
    ()=>isObjectArray,
    "isShallowEqual",
    ()=>isShallowEqual,
    "isStringArray",
    ()=>isStringArray,
    "outerProduct",
    ()=>outerProduct,
    "range",
    ()=>range,
    "rotateLeft",
    ()=>rotateLeft,
    "rotateRight",
    ()=>rotateRight,
    "shuffle",
    ()=>shuffle,
    "typedIncludes",
    ()=>typedIncludes,
    "unique",
    ()=>unique
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/math.js [app-client] (ecmascript)");
;
//#region src/utils/arrays.tsx
function typedIncludes(arr, item) {
    return arr.includes(item);
}
function enumerate(arr) {
    return arr.map((item, index)=>[
            index,
            item
        ]);
}
function isShallowEqual(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++)if (a[i] !== b[i]) return false;
    return true;
}
/**
* Ponyfill for ES2023's findLastIndex.
*/ function findLastIndex(arr, predicate) {
    for(let i = arr.length - 1; i >= 0; i--)if (predicate(arr[i])) return i;
    return -1;
}
function groupBy(arr, key) {
    const result = /* @__PURE__ */ new Map();
    for (const item of arr){
        const k = key(item);
        if (result.get(k) === void 0) result.set(k, []);
        result.get(k).push(item);
    }
    return result;
}
function range(startInclusive, endExclusive, step) {
    if (endExclusive === void 0) {
        endExclusive = startInclusive;
        startInclusive = 0;
    }
    if (step === void 0) step = 1;
    const result = [];
    for(let i = startInclusive; step > 0 ? i < endExclusive : i > endExclusive; i += step)result.push(i);
    return result;
}
function rotateLeft(arr, n) {
    if (arr.length === 0) return [];
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remainder"])(n, arr.length);
    return [
        ...arr.slice(index),
        ...arr.slice(0, index)
    ];
}
function rotateRight(arr, n) {
    return rotateLeft(arr, -n);
}
function shuffle(arr) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function outerProduct(arr1, arr2) {
    return arr1.flatMap((item1)=>arr2.map((item2)=>[
                item1,
                item2
            ]));
}
function unique(arr) {
    return [
        ...new Set(arr)
    ];
}
function getChunks(arr, size) {
    const result = [];
    if (size <= 0) return result;
    for(let i = 0; i < arr.length; i += size)result.push(arr.slice(i, i + size));
    return result;
}
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "string");
}
function isNumberArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "number");
}
function isBooleanArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "boolean");
}
function isObjectArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "object" && item !== null);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/bytes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBase32",
    ()=>decodeBase32,
    "decodeBase64",
    ()=>decodeBase64,
    "decodeBase64OrBase64Url",
    ()=>decodeBase64OrBase64Url,
    "decodeBase64Url",
    ()=>decodeBase64Url,
    "encodeBase32",
    ()=>encodeBase32,
    "encodeBase64",
    ()=>encodeBase64,
    "encodeBase64Url",
    ()=>encodeBase64Url,
    "getBase32CharacterFromIndex",
    ()=>getBase32CharacterFromIndex,
    "getBase32IndexFromCharacter",
    ()=>getBase32IndexFromCharacter,
    "isBase32",
    ()=>isBase32,
    "isBase64",
    ()=>isBase64,
    "isBase64Url",
    ()=>isBase64Url,
    "toHexString",
    ()=>toHexString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
;
//#region src/utils/bytes.tsx
const crockfordAlphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const crockfordReplacements = /* @__PURE__ */ new Map([
    [
        "o",
        "0"
    ],
    [
        "i",
        "1"
    ],
    [
        "l",
        "1"
    ]
]);
function toHexString(input) {
    return Array.from(input).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
function getBase32CharacterFromIndex(index) {
    if (index < 0 || index >= 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Invalid base32 index: ${index}`);
    return crockfordAlphabet[index];
}
function getBase32IndexFromCharacter(character) {
    if (character.length !== 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Invalid base32 character: ${character}`);
    const index = crockfordAlphabet.indexOf(character.toUpperCase());
    if (index === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Invalid base32 character: ${character}`);
    return index;
}
function encodeBase32(input) {
    let bits = 0;
    let value = 0;
    let output = "";
    for(let i = 0; i < input.length; i++){
        value = value << 8 | input[i];
        bits += 8;
        while(bits >= 5){
            output += getBase32CharacterFromIndex(value >>> bits - 5 & 31);
            bits -= 5;
        }
    }
    if (bits > 0) output += getBase32CharacterFromIndex(value << 5 - bits & 31);
    if (!isBase32(output)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid base32 output; this should never happen");
    return output;
}
function decodeBase32(input) {
    if (!isBase32(input)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid base32 string");
    const output = new Uint8Array(input.length * 5 / 8 | 0);
    let bits = 0;
    let value = 0;
    let outputIndex = 0;
    for(let i = 0; i < input.length; i++){
        let char = input[i].toLowerCase();
        if (char === " ") continue;
        if (crockfordReplacements.has(char)) char = crockfordReplacements.get(char);
        const index = getBase32IndexFromCharacter(char);
        value = value << 5 | index;
        bits += 5;
        if (bits >= 8) {
            output[outputIndex++] = value >>> bits - 8 & 255;
            bits -= 8;
        }
    }
    return output;
}
function encodeBase64(input) {
    return btoa([
        ...input
    ].map((b)=>String.fromCharCode(b)).join(""));
}
function decodeBase64(input) {
    return new Uint8Array(atob(input).split("").map((char)=>char.charCodeAt(0)));
}
function encodeBase64Url(input) {
    return encodeBase64(input).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Url(input) {
    if (!isBase64Url(input)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid base64url string");
    if (input === "") return /* @__PURE__ */ new Uint8Array(0);
    return decodeBase64(input.replace(/-/g, "+").replace(/_/g, "/") + "====".slice((input.length - 1) % 4 + 1));
}
function decodeBase64OrBase64Url(input) {
    if (isBase64Url(input)) return decodeBase64Url(input);
    else if (isBase64(input)) return decodeBase64(input);
    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid base64 or base64url string");
}
function isBase32(input) {
    for (const char of input){
        if (char === " ") continue;
        const upperChar = char.toUpperCase();
        if (!crockfordAlphabet.includes(upperChar)) return false;
    }
    return true;
}
function isBase64(input) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(input);
}
function isBase64Url(input) {
    if (input === "") return true;
    return /^[0-9a-zA-Z_-]+$/.test(input);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/country-codes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidCountryCode",
    ()=>isValidCountryCode,
    "normalizeCountryCode",
    ()=>normalizeCountryCode,
    "validateCountryCode",
    ()=>validateCountryCode
]);
//#region src/utils/country-codes.ts
function normalizeCountryCode(countryCode) {
    return countryCode.trim().toUpperCase();
}
function isValidCountryCode(countryCode) {
    const normalized = normalizeCountryCode(countryCode);
    return /^[A-Z]{2}$/.test(normalized);
}
/**
* Validates and normalizes a country code value (single string or array).
* Returns null if valid, or an error message string if invalid.
*/ function validateCountryCode(value) {
    const values = Array.isArray(value) ? value : [
        value
    ];
    if (values.length === 0) return "At least one country code is required";
    return values.every((v)=>isValidCountryCode(v)) ? null : "Country code must be a 2-letter code";
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/crypto.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "generateRandomValues",
    ()=>generateRandomValues,
    "generateSecureRandomString",
    ()=>generateSecureRandomString,
    "hash",
    ()=>hash,
    "iteratedHash",
    ()=>iteratedHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$typed$2d$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/typed-arrays.js [app-client] (ecmascript)");
;
;
;
;
;
//#region src/utils/crypto.tsx
function generateRandomValues(array) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].crypto) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Crypto API is not available in this environment. Are you using an old browser?");
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].crypto.getRandomValues) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("crypto.getRandomValues is not available in this environment. Are you using an old browser?");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].crypto.getRandomValues(array);
}
/**
* Generates a secure alphanumeric string using the system's cryptographically secure
* random number generator.
*/ function generateSecureRandomString(minBitsOfEntropy = 224) {
    const base32CharactersCount = Math.ceil(minBitsOfEntropy / 5);
    const bytesCount = Math.ceil(base32CharactersCount * 5 / 8);
    const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase32"])(generateRandomValues(new Uint8Array(bytesCount)));
    return str.slice(str.length - base32CharactersCount).toLowerCase();
}
async function getDerivedSymmetricKey(purpose, secret, salt) {
    const secretBytes = typeof secret === "string" ? new TextEncoder().encode(secret) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$typed$2d$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArrayBufferBacked"])(secret);
    const originalSecretKey = await crypto.subtle.importKey("raw", secretBytes, "HKDF", false, [
        "deriveKey"
    ]);
    return await crypto.subtle.deriveKey({
        name: "HKDF",
        salt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$typed$2d$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArrayBufferBacked"])(salt),
        hash: "SHA-256",
        info: new TextEncoder().encode(JSON.stringify([
            "stack-crypto-helper-derived-symmetric-key",
            purpose,
            typeof secret === "string" ? "string-key" : "binary-key",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(salt)
        ]))
    }, originalSecretKey, {
        name: "AES-GCM",
        length: 256
    }, false, [
        "encrypt",
        "decrypt"
    ]);
}
async function encrypt({ purpose, secret, value }) {
    const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
    const salt = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
    const derivedSecretKey = await getDerivedSymmetricKey(purpose, secret, salt);
    const cipher = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
    }, derivedSecretKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$typed$2d$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArrayBufferBacked"])(value));
    return new Uint8Array([
        ...[
            1,
            0
        ],
        ...salt,
        ...iv,
        ...new Uint8Array(cipher)
    ]);
}
async function decrypt({ purpose, secret, cipher }) {
    const version = cipher.slice(0, 2);
    if (version[0] !== 1 || version[1] !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid ciphertext version in decrypt(...); expected 0x0100", {
        purpose
    });
    const salt = cipher.slice(2, 18);
    const iv = cipher.slice(18, 30);
    const cipherBytes = cipher.slice(30);
    const derivedSecretKey = await getDerivedSymmetricKey(purpose, secret, salt);
    try {
        const plaintext = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv
        }, derivedSecretKey, cipherBytes);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(new Uint8Array(plaintext));
    } catch (e) {
        if (e instanceof DOMException && e.name === "OperationError") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new Error("Invalid ciphertext or secret when decrypting encrypted value", {
            cause: e
        }));
        throw e;
    }
}
async function hash(options) {
    return await iteratedHash({
        ...options,
        iterations: 1
    });
}
async function iteratedHash(options) {
    const stringOrUint8ArrayToUint8Array = (value)=>typeof value === "string" ? new TextEncoder().encode(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$typed$2d$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArrayBufferBacked"])(value);
    const stringOrUint8ArrayToBase64 = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(stringOrUint8ArrayToUint8Array(value));
    const input = await crypto.subtle.importKey("raw", stringOrUint8ArrayToUint8Array(options.value), "PBKDF2", false, [
        "deriveBits"
    ]);
    return new Uint8Array(await crypto.subtle.deriveBits({
        name: "PBKDF2",
        salt: new TextEncoder().encode(JSON.stringify([
            "stack-crypto-helper-iterated-hash",
            options.purpose,
            stringOrUint8ArrayToBase64(options.salt ?? ""),
            stringOrUint8ArrayToBase64(options.extra ?? "")
        ])),
        iterations: options.iterations,
        hash: "SHA-256"
    }, input, 256));
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/currency-constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPPORTED_CURRENCIES",
    ()=>SUPPORTED_CURRENCIES
]);
//#region src/utils/currency-constants.tsx
const SUPPORTED_CURRENCIES = [
    {
        code: "USD",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "EUR",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "GBP",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "JPY",
        decimals: 0,
        stripeDecimals: 0
    },
    {
        code: "INR",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "AUD",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "CAD",
        decimals: 2,
        stripeDecimals: 2
    }
];
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/dom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssEscapeIdent",
    ()=>cssEscapeIdent,
    "hasClickableParent",
    ()=>hasClickableParent
]);
//#region src/utils/dom.tsx
function hasClickableParent(element) {
    const parent = element.parentElement;
    if (!parent) return false;
    if (parent.dataset.n2Clickable) return true;
    return hasClickableParent(element.parentElement);
}
/**
* Escape a string so it is safe to use as a CSS identifier (id/class) inside a selector.
* Prefers the native `CSS.escape` when available, falling back to a conservative
* backslash-escape for non-DOM environments (SSR, tests, older runtimes).
*/ function cssEscapeIdent(value) {
    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") return CSS.escape(value);
    let escaped = "";
    for(let i = 0; i < value.length; i += 1){
        const char = value.charAt(i);
        const codeUnit = value.charCodeAt(i);
        if (codeUnit === 0) escaped += "�";
        else if (codeUnit >= 1 && codeUnit <= 31 || codeUnit === 127 || i === 0 && codeUnit >= 48 && codeUnit <= 57 || i === 1 && codeUnit >= 48 && codeUnit <= 57 && value.charCodeAt(0) === 45) escaped += `\\${codeUnit.toString(16)} `;
        else if (i === 0 && codeUnit === 45 && value.length === 1) escaped += "\\-";
        else if (codeUnit >= 128 || codeUnit === 45 || codeUnit === 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) escaped += char;
        else escaped += `\\${char}`;
    }
    return escaped;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/env.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnvBoolean",
    ()=>getEnvBoolean,
    "getEnvVariable",
    ()=>getEnvVariable,
    "getNextRuntime",
    ()=>getNextRuntime,
    "getNodeEnvironment",
    ()=>getNodeEnvironment,
    "getProcessEnv",
    ()=>getProcessEnv,
    "isBrowserLike",
    ()=>isBrowserLike,
    "resolveHexclaveStackEnvVarValue",
    ()=>resolveHexclaveStackEnvVarValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
;
;
//#region src/utils/env.tsx
function isBrowserLike() {
    return typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement !== "undefined";
}
const ENV_VAR_RENAME = {
    NEXT_PUBLIC_STACK_API_URL: [
        "STACK_BASE_URL",
        "NEXT_PUBLIC_STACK_URL"
    ]
};
function resolveHexclaveStackEnvVarValue(hexclaveName, stackName, hexclaveValue, stackValue) {
    if (hexclaveValue && stackValue && hexclaveValue !== stackValue) throw new Error(`Environment variables ${hexclaveName} and ${stackName} are both set to different values. Remove one of them or set them to the same value.`);
    return hexclaveValue || stackValue || void 0;
}
/**
* Hexclave rebrand: resolve an env var by reading both the `HEXCLAVE_*` and
* `STACK_*` spellings, preferring the canonical Hexclave value and falling back
* to the legacy Stack value (empty counts as unset). Works in BOTH directions —
* whether the caller passes the legacy `STACK_FOO` name or the canonical
* `HEXCLAVE_FOO` name, the other spelling is still honored. Covers `STACK_FOO`,
* `NEXT_PUBLIC_STACK_FOO`, `NEXT_PUBLIC_BROWSER_STACK_FOO`,
* `NEXT_PUBLIC_SERVER_STACK_FOO`, `VITE_STACK_FOO` and their HEXCLAVE_ twins.
* Names with neither segment behave exactly as before.
*/ function getEnvVarWithHexclaveFallback(name) {
    if (name.includes("STACK_")) {
        const hexclaveName = name.replace("STACK_", "HEXCLAVE_");
        return resolveHexclaveStackEnvVarValue(hexclaveName, name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[hexclaveName], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name]);
    }
    if (name.includes("HEXCLAVE_")) {
        const stackName = name.replace("HEXCLAVE_", "STACK_");
        return resolveHexclaveStackEnvVarValue(name, stackName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[stackName]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name];
}
/**
* Returns the environment variable with the given name, returning the default (if given) or throwing an error (otherwise) if it's undefined or the empty string.
*/ function getEnvVariable(name, defaultValue) {
    if (isBrowserLike()) throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      Can't use getEnvVariable on the client because Next.js transpiles expressions of the kind process.env.XYZ at build-time on the client.
    
      Use process.env.XYZ directly instead.
    `);
    if (name === "NEXT_RUNTIME") throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      Can't use getEnvVariable to access the NEXT_RUNTIME environment variable because it's compiled into the client bundle.
    
      Use getNextRuntime() instead.
    `);
    for (const [newName, oldNames] of Object.entries(ENV_VAR_RENAME))if (oldNames?.includes(name)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(`Environment variable ${name} has been renamed to ${newName}. Please update your configuration to use the new name.`);
    let value = getEnvVarWithHexclaveFallback(name);
    const renamedNames = ENV_VAR_RENAME[name];
    if (!value && renamedNames != null) for (const oldName of renamedNames){
        value = getEnvVarWithHexclaveFallback(oldName);
        if (value) break;
    }
    if (!value) if (defaultValue !== void 0) value = defaultValue;
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])(`Missing environment variable: ${name}`);
    return value;
}
function getEnvBoolean(name) {
    const value = getEnvVariable(name, "false");
    if (value === "true") return true;
    else if (value === "false") return false;
    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Environment variable ${name} must be either "true" or "false": found ${JSON.stringify(value)}`);
}
function getNextRuntime() {
    return ("TURBOPACK compile-time value", "") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwErr"])("Missing environment variable: NEXT_RUNTIME");
}
function getNodeEnvironment() {
    return getEnvVariable("NODE_ENV", "");
}
/**
* Browser-safe access to `process.env` for server-only or genuinely dynamic
* env-var lookups. Returns `undefined` when `process` is not defined (e.g. in
* a Vite browser bundle without a `process` shim).
*
* Note: uses `process.env[name]` (bracket form), which is NOT recognized by
* Next.js / webpack DefinePlugin for compile-time inlining. If you need
* build-time inlining for a `NEXT_PUBLIC_*` var, use the literal dot-form at
* the call site, guarded with `typeof process`:
*
*   const value = (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_FOO : undefined);
*/ function getProcessEnv(name) {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") return;
    return getEnvVarWithHexclaveFallback(name);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexclaveAssertionError",
    ()=>HexclaveAssertionError,
    "HexclaveSetupError",
    ()=>HexclaveSetupError,
    "StatusError",
    ()=>StatusError,
    "captureError",
    ()=>captureError,
    "captureWarning",
    ()=>captureWarning,
    "concatStacktraces",
    ()=>concatStacktraces,
    "errorToNiceString",
    ()=>errorToNiceString,
    "registerErrorSink",
    ()=>registerErrorSink,
    "throwErr",
    ()=>throwErr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/globals.js [app-client] (ecmascript)");
;
;
;
//#region src/utils/errors.tsx
function throwErr(...args) {
    if (typeof args[0] === "string") throw new HexclaveAssertionError(args[0], args[1]);
    else if (args[0] instanceof Error) throw args[0];
    else throw new StatusError(...args);
}
function removeStacktraceNameLine(stack) {
    const addsNameLine = /* @__PURE__ */ new Error().stack?.startsWith("Error\n");
    return stack.split("\n").slice(addsNameLine ? 1 : 0).join("\n");
}
/**
* Concatenates the (original) stacktraces of the given errors onto the first.
*
* Note: Very often, the concatStacktracesIfRejected function in promises.tsx is an easier way to use this function.
*
* Useful when you invoke an async function to receive a promise without awaiting it immediately. Browsers are smart
* enough to keep track of the call stack in async function calls when you invoke `.then` within the same async tick,
* but if you don't, the stacktrace will be lost.
*
* Here's an example of the unwanted behavior:
*
* ```tsx
* async function log() {
*   await wait(0);  // put the task on the event loop
*   console.log(new Error().stack);
* }
*
* async function main() {
*   await log();  // good; prints both "log" and "main" on the stacktrace
*   log();  // bad; prints only "log" on the stacktrace
* }
* ```
*/ function concatStacktraces(first, ...errors) {
    const addsEmptyLineAtEnd = first.stack?.endsWith("\n");
    const separator = removeStacktraceNameLine(/* @__PURE__ */ new Error().stack ?? "").split("\n")[0];
    for (const error of errors){
        const toAppend = removeStacktraceNameLine(error.stack ?? "");
        first.stack += (addsEmptyLineAtEnd ? "" : "\n") + separator + "\n" + toAppend;
    }
}
var HexclaveAssertionError = class extends Error {
    constructor(message, extraData){
        const disclaimer = `\n\nThis is likely an error in Hexclave. Please make sure you are running the newest version and report it.`;
        super(`${message}${message.endsWith(disclaimer) ? "" : disclaimer}`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(extraData ?? {}, [
            "cause"
        ]));
        this.extraData = extraData;
        Object.defineProperty(this, "customCaptureExtraArgs", {
            get () {
                return [
                    this.extraData
                ];
            },
            enumerable: false
        });
        const hexclaveDebuggerValue = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_DEBUGGER_ON_ASSERTION_ERROR : void 0;
        const stackDebuggerValue = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_DEBUGGER_ON_ASSERTION_ERROR : void 0;
        if (hexclaveDebuggerValue && stackDebuggerValue && hexclaveDebuggerValue !== stackDebuggerValue) throw new Error("Environment variables NEXT_PUBLIC_HEXCLAVE_DEBUGGER_ON_ASSERTION_ERROR and NEXT_PUBLIC_STACK_DEBUGGER_ON_ASSERTION_ERROR are both set to different values. Remove one of them or set them to the same value.");
        if ((hexclaveDebuggerValue || stackDebuggerValue) === "true") debugger;
    }
};
HexclaveAssertionError.prototype.name = "HexclaveAssertionError";
const hexclaveSetupErrorBrand = "hexclave-setup-error-brand-sentinel";
/**
* An error caused by an incomplete or incorrect Hexclave setup in the developer's own project — a domain that has not
* been added to the project's trusted domains, for example.
*
* These are neither the end user's fault nor a bug in Hexclave, and they are usually fatal for the flow they occur in (an
* auth handoff that can never complete, say). Only logging them would leave the developer with a broken flow and no
* visible explanation, so the SDK also renders them on the page; `title` and `howToFix` end up in that card, so write
* them as instructions to the developer rather than as internal diagnostics.
*/ var HexclaveSetupError = class extends Error {
    constructor(options){
        super(options.message, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(options.extraData ?? {}, [
            "cause"
        ]));
        this.title = options.title;
        this.howToFix = options.howToFix;
        Object.defineProperty(this, hexclaveSetupErrorBrand, {
            value: true,
            enumerable: false
        });
        Object.defineProperty(this, "customCaptureExtraArgs", {
            get () {
                return [
                    {
                        ...options.extraData,
                        howToFix: options.howToFix
                    }
                ];
            },
            enumerable: false
        });
    }
    /**
	* Like `instanceof`, but also true for setup errors thrown by another copy of this package — an app can easily end up
	* with two of them, and a setup error from either must still show up as one.
	*/ static isSetupError(error) {
        if (typeof error !== "object" || error === null) return false;
        if (!Object.prototype.hasOwnProperty.call(error, hexclaveSetupErrorBrand)) return false;
        if (Reflect.get(error, hexclaveSetupErrorBrand) !== true) return false;
        return typeof Reflect.get(error, "title") === "string" && Array.isArray(Reflect.get(error, "howToFix"));
    }
};
HexclaveSetupError.prototype.name = "HexclaveSetupError";
function errorToNiceString(error) {
    if (!(error instanceof Error)) return `${typeof error}<${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nicify"])(error)}>`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nicify"])(error, {
        maxDepth: 8
    });
}
const errorSinks = /* @__PURE__ */ new Set();
function registerErrorSink(sink) {
    if (errorSinks.has(sink)) return;
    errorSinks.add(sink);
}
registerErrorSink((location, error, level, ...extraArgs)=>{
    (level === "warning" ? console.warn : console.error)(`${level === "warning" ? "\x1B[43m" : "\x1B[41m"}Captured ${level === "warning" ? "warning" : "error"} in ${location}:`, errorToNiceString(error), ...extraArgs, "\x1B[0m");
});
registerErrorSink((location, error, level, ...extraArgs)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].hexclaveCapturedErrors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].hexclaveCapturedErrors ?? [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalVar"].hexclaveCapturedErrors.push({
        location,
        error,
        level,
        extraArgs
    });
});
function dispatchToSinks(location, error, level) {
    for (const sink of errorSinks)sink(location, error, level, ...error && (typeof error === "object" || typeof error === "function") && "customCaptureExtraArgs" in error && Array.isArray(error.customCaptureExtraArgs) ? error.customCaptureExtraArgs : []);
}
/**
* Captures an error and sends it to the error sinks (most notably, Sentry). Errors caught with captureError are
* supposed to be seen by an engineer, so they should be actionable and important.
*
* The location string is a machine-readable ID, and should hence not contain spaces or anything like that. Good
* examples are: "api-route-handler", "renderPart()", etc.
*
* Errors that bubble up to the top of runAsynchronously or a route handler are already captured with captureError.
*/ function captureError(location, error) {
    dispatchToSinks(location, error, "error");
}
/**
* Like captureError, but logs at warning level. Use for issues that an engineer should know about but that aren't
* severe enough to be treated as an error (e.g. recoverable failures in background tasks).
*/ function captureWarning(location, error) {
    dispatchToSinks(location, error, "warning");
}
var StatusError = class extends Error {
    static{
        this.BadRequest = {
            statusCode: 400,
            message: "Bad Request"
        };
    }
    static{
        this.Unauthorized = {
            statusCode: 401,
            message: "Unauthorized"
        };
    }
    static{
        this.PaymentRequired = {
            statusCode: 402,
            message: "Payment Required"
        };
    }
    static{
        this.Forbidden = {
            statusCode: 403,
            message: "Forbidden"
        };
    }
    static{
        this.NotFound = {
            statusCode: 404,
            message: "Not Found"
        };
    }
    static{
        this.MethodNotAllowed = {
            statusCode: 405,
            message: "Method Not Allowed"
        };
    }
    static{
        this.NotAcceptable = {
            statusCode: 406,
            message: "Not Acceptable"
        };
    }
    static{
        this.ProxyAuthenticationRequired = {
            statusCode: 407,
            message: "Proxy Authentication Required"
        };
    }
    static{
        this.RequestTimeout = {
            statusCode: 408,
            message: "Request Timeout"
        };
    }
    static{
        this.Conflict = {
            statusCode: 409,
            message: "Conflict"
        };
    }
    static{
        this.Gone = {
            statusCode: 410,
            message: "Gone"
        };
    }
    static{
        this.LengthRequired = {
            statusCode: 411,
            message: "Length Required"
        };
    }
    static{
        this.PreconditionFailed = {
            statusCode: 412,
            message: "Precondition Failed"
        };
    }
    static{
        this.PayloadTooLarge = {
            statusCode: 413,
            message: "Payload Too Large"
        };
    }
    static{
        this.URITooLong = {
            statusCode: 414,
            message: "URI Too Long"
        };
    }
    static{
        this.UnsupportedMediaType = {
            statusCode: 415,
            message: "Unsupported Media Type"
        };
    }
    static{
        this.RangeNotSatisfiable = {
            statusCode: 416,
            message: "Range Not Satisfiable"
        };
    }
    static{
        this.ExpectationFailed = {
            statusCode: 417,
            message: "Expectation Failed"
        };
    }
    static{
        this.ImATeapot = {
            statusCode: 418,
            message: "I'm a teapot"
        };
    }
    static{
        this.MisdirectedRequest = {
            statusCode: 421,
            message: "Misdirected Request"
        };
    }
    static{
        this.UnprocessableEntity = {
            statusCode: 422,
            message: "Unprocessable Entity"
        };
    }
    static{
        this.Locked = {
            statusCode: 423,
            message: "Locked"
        };
    }
    static{
        this.FailedDependency = {
            statusCode: 424,
            message: "Failed Dependency"
        };
    }
    static{
        this.TooEarly = {
            statusCode: 425,
            message: "Too Early"
        };
    }
    static{
        this.UpgradeRequired = {
            statusCode: 426,
            message: "Upgrade Required"
        };
    }
    static{
        this.PreconditionRequired = {
            statusCode: 428,
            message: "Precondition Required"
        };
    }
    static{
        this.TooManyRequests = {
            statusCode: 429,
            message: "Too Many Requests"
        };
    }
    static{
        this.RequestHeaderFieldsTooLarge = {
            statusCode: 431,
            message: "Request Header Fields Too Large"
        };
    }
    static{
        this.UnavailableForLegalReasons = {
            statusCode: 451,
            message: "Unavailable For Legal Reasons"
        };
    }
    static{
        this.InternalServerError = {
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
    static{
        this.NotImplemented = {
            statusCode: 501,
            message: "Not Implemented"
        };
    }
    static{
        this.BadGateway = {
            statusCode: 502,
            message: "Bad Gateway"
        };
    }
    static{
        this.ServiceUnavailable = {
            statusCode: 503,
            message: "Service Unavailable"
        };
    }
    static{
        this.GatewayTimeout = {
            statusCode: 504,
            message: "Gateway Timeout"
        };
    }
    static{
        this.HTTPVersionNotSupported = {
            statusCode: 505,
            message: "HTTP Version Not Supported"
        };
    }
    static{
        this.VariantAlsoNegotiates = {
            statusCode: 506,
            message: "Variant Also Negotiates"
        };
    }
    static{
        this.InsufficientStorage = {
            statusCode: 507,
            message: "Insufficient Storage"
        };
    }
    static{
        this.LoopDetected = {
            statusCode: 508,
            message: "Loop Detected"
        };
    }
    static{
        this.NotExtended = {
            statusCode: 510,
            message: "Not Extended"
        };
    }
    static{
        this.NetworkAuthenticationRequired = {
            statusCode: 511,
            message: "Network Authentication Required"
        };
    }
    constructor(status, message){
        if (typeof status === "object") {
            message ??= status.message;
            status = status.statusCode;
        }
        super(message);
        this.__stackStatusErrorBrand = "stack-status-error-brand-sentinel";
        this.name = "StatusError";
        this.statusCode = status;
        if (!message) throw new HexclaveAssertionError("StatusError always requires a message unless a Status object is passed", {
            cause: this
        });
    }
    static isStatusError(error) {
        return typeof error === "object" && error !== null && "__stackStatusErrorBrand" in error && error.__stackStatusErrorBrand === "stack-status-error-brand-sentinel";
    }
    isClientError() {
        return this.statusCode >= 400 && this.statusCode < 500;
    }
    isServerError() {
        return !this.isClientError();
    }
    getStatusCode() {
        return this.statusCode;
    }
    getBody() {
        return new TextEncoder().encode(this.message);
    }
    getHeaders() {
        return {
            "Content-Type": [
                "text/plain; charset=utf-8"
            ]
        };
    }
    toDescriptiveJson() {
        return {
            status_code: this.getStatusCode(),
            message: this.message,
            headers: this.getHeaders()
        };
    }
    /**
	* @deprecated this is not a good way to make status errors human-readable, use toDescriptiveJson instead
	*/ toHttpJson() {
        return {
            status_code: this.statusCode,
            body: this.message,
            headers: this.getHeaders()
        };
    }
};
StatusError.prototype.name = "StatusError";
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "identity",
    ()=>identity,
    "identityArgs",
    ()=>identityArgs
]);
//#region src/utils/functions.tsx
function identity(t) {
    return t;
}
function identityArgs(...args) {
    return args;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/globals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGlobal",
    ()=>createGlobal,
    "createGlobalAsync",
    ()=>createGlobalAsync,
    "getGlobal",
    ()=>getGlobal,
    "globalVar",
    ()=>globalVar,
    "setGlobal",
    ()=>setGlobal
]);
//#region src/utils/globals.tsx
const globalVar = typeof globalThis !== "undefined" ? globalThis : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
if (typeof globalThis === "undefined") globalVar.globalThis = globalVar;
const hexclaveGlobalsSymbol = Symbol.for("__hexclave-globals");
globalVar[hexclaveGlobalsSymbol] ??= {};
function createGlobal(key, init) {
    if (!globalVar[hexclaveGlobalsSymbol][key]) globalVar[hexclaveGlobalsSymbol][key] = init();
    return globalVar[hexclaveGlobalsSymbol][key];
}
/**
* Like createGlobal, but if the asynchronous initialization fails, the global will be reset and recomputed on the next
* invocation.
*/ function createGlobalAsync(key, init) {
    let promise = null;
    if (!globalVar[hexclaveGlobalsSymbol][key]) {
        promise = init().catch((e)=>{
            delete globalVar[hexclaveGlobalsSymbol][key];
            throw e;
        });
        globalVar[hexclaveGlobalsSymbol][key] = promise;
    }
    return promise ?? globalVar[hexclaveGlobalsSymbol][key];
}
function getGlobal(key) {
    return globalVar[hexclaveGlobalsSymbol][key];
}
function setGlobal(key, value) {
    globalVar[hexclaveGlobalsSymbol][key] = value;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/http.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTP_METHODS",
    ()=>HTTP_METHODS,
    "decodeBasicAuthorizationHeader",
    ()=>decodeBasicAuthorizationHeader,
    "encodeBasicAuthorizationHeader",
    ()=>encodeBasicAuthorizationHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/bytes.js [app-client] (ecmascript)");
;
//#region src/utils/http.tsx
const HTTP_METHODS = {
    "GET": {
        safe: true,
        idempotent: true
    },
    "POST": {
        safe: false,
        idempotent: false
    },
    "PUT": {
        safe: false,
        idempotent: true
    },
    "DELETE": {
        safe: false,
        idempotent: true
    },
    "PATCH": {
        safe: false,
        idempotent: false
    },
    "OPTIONS": {
        safe: true,
        idempotent: true
    },
    "HEAD": {
        safe: true,
        idempotent: true
    },
    "TRACE": {
        safe: true,
        idempotent: true
    },
    "CONNECT": {
        safe: false,
        idempotent: false
    }
};
function decodeBasicAuthorizationHeader(value) {
    const [type, encoded, ...rest] = value.split(" ");
    if (rest.length > 0) return null;
    if (!encoded) return null;
    if (type !== "Basic") return null;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBase64"])(encoded)) return null;
    const split = new TextDecoder().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBase64"])(encoded)).split(":");
    return [
        split[0],
        split.slice(1).join(":")
    ];
}
function encodeBasicAuthorizationHeader(id, password) {
    if (id.includes(":")) throw new Error("Basic authorization header id cannot contain ':'");
    return `Basic ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$bytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBase64"])(new TextEncoder().encode(`${id}:${password}`))}`;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/maps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DependenciesMap",
    ()=>DependenciesMap,
    "IterableWeakMap",
    ()=>IterableWeakMap,
    "MaybeWeakMap",
    ()=>MaybeWeakMap,
    "WeakRefIfAvailable",
    ()=>WeakRefIfAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
;
//#region src/utils/maps.tsx
let _Symbol$toStringTag, _Symbol$toStringTag2, _Symbol$toStringTag3;
var WeakRefIfAvailable = class {
    constructor(value){
        if (typeof WeakRef === "undefined") this._ref = {
            deref: ()=>value
        };
        else this._ref = new WeakRef(value);
    }
    deref() {
        return this._ref.deref();
    }
};
/**
* A WeakMap-like object that can be iterated over.
*
* Note that it relies on WeakRef, and always falls back to the regular Map behavior (ie. no GC) in browsers that don't support it.
*/ var IterableWeakMap = class {
    static{
        _Symbol$toStringTag = Symbol.toStringTag;
    }
    constructor(entries){
        this[_Symbol$toStringTag] = "IterableWeakMap";
        const mappedEntries = entries?.map((e)=>[
                e[0],
                {
                    value: e[1],
                    keyRef: new WeakRefIfAvailable(e[0])
                }
            ]);
        this._weakMap = new WeakMap(mappedEntries ?? []);
        this._keyRefs = new Set(mappedEntries?.map((e)=>e[1].keyRef) ?? []);
    }
    get(key) {
        return this._weakMap.get(key)?.value;
    }
    set(key, value) {
        const updated = {
            value,
            keyRef: this._weakMap.get(key)?.keyRef ?? new WeakRefIfAvailable(key)
        };
        this._weakMap.set(key, updated);
        this._keyRefs.add(updated.keyRef);
        return this;
    }
    delete(key) {
        const res = this._weakMap.get(key);
        if (res) {
            this._weakMap.delete(key);
            this._keyRefs.delete(res.keyRef);
            return true;
        }
        return false;
    }
    has(key) {
        return this._weakMap.has(key) && this._keyRefs.has(this._weakMap.get(key).keyRef);
    }
    *[Symbol.iterator]() {
        for (const keyRef of this._keyRefs){
            const key = keyRef.deref();
            const existing = key ? this._weakMap.get(key) : void 0;
            if (!key) this._keyRefs.delete(keyRef);
            else if (existing) yield [
                key,
                existing.value
            ];
        }
    }
};
/**
* A map that is a IterableWeakMap for object keys and a regular Map for primitive keys. Also provides iteration over both
* object and primitive keys.
*
* Note that, just like IterableWeakMap, older browsers without support for WeakRef will use a regular Map for object keys.
*/ var MaybeWeakMap = class {
    static{
        _Symbol$toStringTag2 = Symbol.toStringTag;
    }
    constructor(entries){
        this[_Symbol$toStringTag2] = "MaybeWeakMap";
        const entriesArray = [
            ...entries ?? []
        ];
        this._primitiveMap = new Map(entriesArray.filter((e)=>!this._isAllowedInWeakMap(e[0])));
        this._weakMap = new IterableWeakMap(entriesArray.filter((e)=>this._isAllowedInWeakMap(e[0])));
    }
    _isAllowedInWeakMap(key) {
        return typeof key === "object" && key !== null || typeof key === "symbol" && Symbol.keyFor(key) === void 0;
    }
    get(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.get(key);
        else return this._primitiveMap.get(key);
    }
    set(key, value) {
        if (this._isAllowedInWeakMap(key)) this._weakMap.set(key, value);
        else this._primitiveMap.set(key, value);
        return this;
    }
    delete(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.delete(key);
        else return this._primitiveMap.delete(key);
    }
    has(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.has(key);
        else return this._primitiveMap.has(key);
    }
    *[Symbol.iterator]() {
        yield* this._primitiveMap;
        yield* this._weakMap;
    }
};
/**
* A map that stores values indexed by an array of keys. If the keys are objects and the environment supports WeakRefs,
* they are stored in a WeakMap.
*/ var DependenciesMap = class {
    constructor(){
        this._inner = {
            map: new MaybeWeakMap(),
            hasValue: false,
            value: void 0
        };
        this[_Symbol$toStringTag3] = "DependenciesMap";
    }
    static{
        _Symbol$toStringTag3 = Symbol.toStringTag;
    }
    _valueToResult(inner) {
        if (inner.hasValue) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(inner.value);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(void 0);
    }
    _unwrapFromInner(dependencies, inner) {
        if (dependencies.length === 0) return this._valueToResult(inner);
        else {
            const [key, ...rest] = dependencies;
            const newInner = inner.map.get(key);
            if (!newInner) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(void 0);
            return this._unwrapFromInner(rest, newInner);
        }
    }
    _setInInner(dependencies, value, inner) {
        if (dependencies.length === 0) {
            const res = this._valueToResult(inner);
            if (value.status === "ok") {
                inner.hasValue = true;
                inner.value = value.data;
            } else {
                inner.hasValue = false;
                inner.value = void 0;
            }
            return res;
        } else {
            const [key, ...rest] = dependencies;
            let newInner = inner.map.get(key);
            if (!newInner) inner.map.set(key, newInner = {
                map: new MaybeWeakMap(),
                hasValue: false,
                value: void 0
            });
            return this._setInInner(rest, value, newInner);
        }
    }
    *_iterateInner(dependencies, inner) {
        if (inner.hasValue) yield [
            dependencies,
            inner.value
        ];
        for (const [key, value] of inner.map)yield* this._iterateInner([
            ...dependencies,
            key
        ], value);
    }
    get(dependencies) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].or(this._unwrapFromInner(dependencies, this._inner), void 0);
    }
    set(dependencies, value) {
        this._setInInner(dependencies, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(value), this._inner);
        return this;
    }
    delete(dependencies) {
        return this._setInInner(dependencies, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(void 0), this._inner).status === "ok";
    }
    has(dependencies) {
        return this._unwrapFromInner(dependencies, this._inner).status === "ok";
    }
    clear() {
        this._inner = {
            map: new MaybeWeakMap(),
            hasValue: false,
            value: void 0
        };
    }
    *[Symbol.iterator]() {
        yield* this._iterateInner([], this._inner);
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "remainder",
    ()=>remainder
]);
//#region src/utils/math.tsx
/**
* Similar to the modulo operator, but always returns a positive number (even when the input is negative).
*/ function remainder(n, d) {
    return (n % d + Math.abs(d)) % d;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/oauth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProviderTypes",
    ()=>allProviderTypes,
    "allProviders",
    ()=>allProviders,
    "publishableClientKeyNotNecessarySentinel",
    ()=>publishableClientKeyNotNecessarySentinel,
    "sharedProviders",
    ()=>sharedProviders,
    "standardProviders",
    ()=>standardProviders
]);
//#region src/utils/oauth.tsx
const standardProviders = [
    "google",
    "github",
    "microsoft",
    "spotify",
    "facebook",
    "discord",
    "gitlab",
    "bitbucket",
    "linkedin",
    "apple",
    "x",
    "twitch"
];
const sharedProviders = [
    "google",
    "github",
    "microsoft",
    "spotify"
];
const allProviders = standardProviders;
const publishableClientKeyNotNecessarySentinel = "__stack_public_client__";
/**
* All provider types including custom OIDC. Standard providers are the
* predefined set with first-class support; "custom_oidc" lets users bring
* any OIDC-compliant identity provider (team plan+ only).
*/ const allProviderTypes = [
    ...standardProviders,
    "custom_oidc"
];
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepFilterUndefined",
    ()=>deepFilterUndefined,
    "deepMerge",
    ()=>deepMerge,
    "deepPlainClone",
    ()=>deepPlainClone,
    "deepPlainEquals",
    ()=>deepPlainEquals,
    "deepSortKeys",
    ()=>deepSortKeys,
    "deleteKey",
    ()=>deleteKey,
    "filterUndefined",
    ()=>filterUndefined,
    "filterUndefinedOrNull",
    ()=>filterUndefinedOrNull,
    "get",
    ()=>get,
    "getOrUndefined",
    ()=>getOrUndefined,
    "has",
    ()=>has,
    "hasAndNotUndefined",
    ()=>hasAndNotUndefined,
    "isCloneable",
    ()=>isCloneable,
    "isNotNull",
    ()=>isNotNull,
    "isObjectLike",
    ()=>isObjectLike,
    "mapValues",
    ()=>mapValues,
    "omit",
    ()=>omit,
    "pick",
    ()=>pick,
    "set",
    ()=>set,
    "shallowClone",
    ()=>shallowClone,
    "sortKeys",
    ()=>sortKeys,
    "split",
    ()=>split,
    "typedAssign",
    ()=>typedAssign,
    "typedEntries",
    ()=>typedEntries,
    "typedFromEntries",
    ()=>typedFromEntries,
    "typedKeys",
    ()=>typedKeys,
    "typedValues",
    ()=>typedValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/types.js [app-client] (ecmascript)");
;
;
;
;
//#region src/utils/objects.tsx
function isNotNull(value) {
    return value !== null && value !== void 0;
}
/**
* Assumes both objects are primitives, arrays, or non-function plain objects, and compares them deeply.
*
* Note that since they are assumed to be plain objects, this function does not compare prototypes.
*/ function deepPlainEquals(obj1, obj2, options = {}) {
    if (typeof obj1 !== typeof obj2) return false;
    if (obj1 === obj2) return true;
    switch(typeof obj1){
        case "object":
            {
                if (!obj1 || !obj2) return false;
                if (Array.isArray(obj1) || Array.isArray(obj2)) {
                    if (!Array.isArray(obj1) || !Array.isArray(obj2)) return false;
                    if (obj1.length !== obj2.length) return false;
                    return obj1.every((v, i)=>deepPlainEquals(v, obj2[i], options));
                }
                const entries1 = Object.entries(obj1).filter(([k, v])=>!options.ignoreUndefinedValues || v !== void 0);
                const entries2 = Object.entries(obj2).filter(([k, v])=>!options.ignoreUndefinedValues || v !== void 0);
                if (entries1.length !== entries2.length) return false;
                return entries1.every(([k, v1])=>{
                    const e2 = entries2.find(([k2])=>k === k2);
                    if (!e2) return false;
                    return deepPlainEquals(v1, e2[1], options);
                });
            }
        case "undefined":
        case "string":
        case "number":
        case "boolean":
        case "bigint":
        case "symbol":
        case "function":
            return false;
        default:
            throw new Error("Unexpected typeof " + typeof obj1);
    }
}
function isCloneable(obj) {
    return typeof obj !== "symbol" && typeof obj !== "function";
}
function shallowClone(obj) {
    if (!isCloneable(obj)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("shallowClone does not support symbols or functions", {
        obj
    });
    if (Array.isArray(obj)) return obj.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]);
    return {
        ...obj
    };
}
function deepPlainClone(obj) {
    if (typeof obj === "function") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("deepPlainClone does not support functions");
    if (typeof obj === "symbol") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("deepPlainClone does not support symbols");
    if (typeof obj !== "object" || !obj) return obj;
    if (Array.isArray(obj)) return obj.map(deepPlainClone);
    return Object.fromEntries(Object.entries(obj).map(([k, v])=>[
            k,
            deepPlainClone(v)
        ]));
}
function deepMerge(baseObj, mergeObj) {
    if ([
        baseObj,
        mergeObj,
        ...Object.values(baseObj),
        ...Object.values(mergeObj)
    ].some((o)=>!isCloneable(o))) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("deepMerge does not support functions or symbols", {
        baseObj,
        mergeObj
    });
    const res = shallowClone(baseObj);
    for (const [key, mergeValue] of Object.entries(mergeObj)){
        if (has(res, key)) {
            const baseValue = get(res, key);
            if (isObjectLike(baseValue) && isObjectLike(mergeValue)) {
                set(res, key, deepMerge(baseValue, mergeValue));
                continue;
            }
        }
        set(res, key, mergeValue);
    }
    return res;
}
function typedEntries(obj) {
    return Object.entries(obj);
}
function typedFromEntries(entries) {
    return Object.fromEntries(entries);
}
function typedKeys(obj) {
    return Object.keys(obj);
}
function typedValues(obj) {
    return Object.values(obj);
}
function typedAssign(target, source) {
    return Object.assign(target, source);
}
/**
* Returns a new object with all undefined values removed. Useful when spreading optional parameters on an object, as
* TypeScript's `Partial<XYZ>` type allows `undefined` values.
*/ function filterUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0));
}
/**
* Returns a new object with all undefined and null values removed. Useful when spreading optional parameters on an object, as
* TypeScript's `Partial<XYZ>` type allows `undefined` values.
*/ function filterUndefinedOrNull(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0 && v !== null));
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeAssertIs"])()();
function deepFilterUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0).map(([k, v])=>[
            k,
            isObjectLike(v) ? deepFilterUndefined(v) : v
        ]));
}
function pick(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([k])=>keys.includes(k)));
}
function omit(obj, keys) {
    if (!Array.isArray(keys)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("omit: keys must be an array", {
        obj,
        keys
    });
    return Object.fromEntries(Object.entries(obj).filter(([k])=>!keys.includes(k)));
}
function split(obj, keys) {
    return [
        pick(obj, keys),
        omit(obj, keys)
    ];
}
function mapValues(obj, fn) {
    if (Array.isArray(obj)) return obj.map((v, i)=>fn(v, i));
    return Object.fromEntries(Object.entries(obj).map(([k, v])=>[
            k,
            fn(v, k)
        ]));
}
function sortKeys(obj) {
    if (Array.isArray(obj)) return [
        ...obj
    ];
    return Object.fromEntries(Object.entries(obj).sort(([a], [b])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringCompare"])(a, b)));
}
function deepSortKeys(obj) {
    return sortKeys(mapValues(obj, (v)=>isObjectLike(v) ? deepSortKeys(v) : v));
}
function set(obj, key, value) {
    if (!isObjectLike(obj)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`set: obj is not an object (found: ${obj === null ? "null" : typeof obj})`, {
        obj,
        key,
        value
    });
    Object.defineProperty(obj, key, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
    });
}
function get(obj, key) {
    if (obj == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("get: obj is null or undefined", {
        obj,
        key
    });
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (!descriptor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`get: key ${String(key)} does not exist`, {
        obj,
        key
    });
    return descriptor.value;
}
function getOrUndefined(obj, key) {
    if (obj == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("getOrUndefined: obj is null or undefined", {
        obj,
        key
    });
    return has(obj, key) ? get(obj, key) : void 0;
}
function has(obj, key) {
    if (obj == null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("has: obj is null or undefined", {
        obj,
        key
    });
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasAndNotUndefined(obj, key) {
    return has(obj, key) && get(obj, key) !== void 0;
}
function deleteKey(obj, key) {
    if (has(obj, key)) Reflect.deleteProperty(obj, key);
    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`deleteKey: key ${String(key)} does not exist`, {
        obj,
        key
    });
}
/**
* Returns true iff the value is an object or a function, but not null.
*/ function isObjectLike(value) {
    return (typeof value === "object" || typeof value === "function") && value !== null;
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concatStacktracesIfRejected",
    ()=>concatStacktracesIfRejected,
    "createPromise",
    ()=>createPromise,
    "ignoreUnhandledRejection",
    ()=>ignoreUnhandledRejection,
    "mapWithConcurrency",
    ()=>mapWithConcurrency,
    "neverResolve",
    ()=>neverResolve,
    "pending",
    ()=>pending,
    "rateLimited",
    ()=>rateLimited,
    "rejected",
    ()=>rejected,
    "resolved",
    ()=>resolved,
    "runAsynchronously",
    ()=>runAsynchronously,
    "runAsynchronouslyWithAlert",
    ()=>runAsynchronouslyWithAlert,
    "throttled",
    ()=>throttled,
    "timeout",
    ()=>timeout,
    "timeoutThrow",
    ()=>timeoutThrow,
    "wait",
    ()=>wait,
    "waitUntil",
    ()=>waitUntil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/known-errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$maps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/maps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/uuids.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
//#region src/utils/promises.tsx
function createPromise(callback) {
    let status = "pending";
    let valueOrReason = void 0;
    let resolve = null;
    let reject = null;
    const promise = new Promise((res, rej)=>{
        resolve = (value)=>{
            if (status !== "pending") return;
            status = "fulfilled";
            valueOrReason = value;
            res(value);
        };
        reject = (reason)=>{
            if (status !== "pending") return;
            status = "rejected";
            valueOrReason = reason;
            rej(reason);
        };
    });
    callback(resolve, reject);
    return Object.assign(promise, {
        status,
        ...status === "fulfilled" ? {
            value: valueOrReason
        } : {},
        ...status === "rejected" ? {
            reason: valueOrReason
        } : {}
    });
}
let resolvedCache = null;
/**
* Like Promise.resolve(...), but also adds the status and value properties for use with React's `use` hook, and caches
* the value so that invoking `resolved` twice returns the same promise.
*/ function resolved(value) {
    resolvedCache ??= new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$maps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DependenciesMap"]();
    if (resolvedCache.has([
        value
    ])) return resolvedCache.get([
        value
    ]);
    const res = Object.assign(Promise.resolve(value), {
        status: "fulfilled",
        value
    });
    resolvedCache.set([
        value
    ], res);
    return res;
}
let rejectedCache = null;
/**
* Like Promise.reject(...), but also adds the status and value properties for use with React's `use` hook, and caches
* the value so that invoking `rejected` twice returns the same promise.
*/ function rejected(reason) {
    rejectedCache ??= new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$maps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DependenciesMap"]();
    if (rejectedCache.has([
        reason
    ])) return rejectedCache.get([
        reason
    ]);
    const promise = Promise.reject(reason);
    ignoreUnhandledRejection(promise);
    const res = Object.assign(promise, {
        status: "rejected",
        reason
    });
    rejectedCache.set([
        reason
    ], res);
    return res;
}
const neverResolvePromise = pending(new Promise(()=>{}));
function neverResolve() {
    return neverResolvePromise;
}
function pending(promise, options = {}) {
    const res = promise.then((value)=>{
        res.status = "fulfilled";
        res.value = value;
        return value;
    }, (actualReason)=>{
        res.status = "rejected";
        res.reason = actualReason;
        throw actualReason;
    });
    res.status = "pending";
    return res;
}
/**
* Should be used to wrap Promises that are not immediately awaited, so they don't throw an unhandled promise rejection
* error.
*
* Vercel kills serverless functions on unhandled promise rejection errors, so this is important.
*/ function ignoreUnhandledRejection(promise) {
    promise.catch(()=>{});
}
/**
* See concatStacktraces for more information.
*/ function concatStacktracesIfRejected(promise) {
    const currentError = /* @__PURE__ */ new Error();
    promise.catch((error)=>{
        if (error instanceof Error) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatStacktraces"])(error, currentError);
    });
}
async function wait(ms, options) {
    if (!Number.isFinite(ms) || ms < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`wait() requires a non-negative integer number of milliseconds to wait. (found: ${ms}ms)`);
    if (ms >= 2 ** 31) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("The maximum timeout for wait() is 2147483647ms (2**31 - 1). (found: ${ms}ms)");
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traceSpan"])({
        description: "wait(...)",
        attributes: {
            "stack.wait.ms": ms
        }
    }, async (span)=>{
        return await new Promise((resolve)=>{
            const timeout = setTimeout(resolve, ms);
            if (options?.unref === true && typeof timeout === "object") timeout.unref();
        });
    });
}
async function waitUntil(date) {
    return await wait(date.getTime() - Date.now());
}
function runAsynchronouslyWithAlert(...args) {
    return runAsynchronously(args[0], {
        ...args[1],
        onError: (error)=>{
            const nodeEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProcessEnv"])("NODE_ENV");
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$known$2d$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KnownError"].isKnownError(error) && nodeEnv?.includes("production")) alert(error.message);
            else alert(`An unhandled error occurred. Please ${nodeEnv === "development" ? `check the browser console for the full error.` : "report this to the developer."}\n\n${error}`);
            args[1]?.onError?.(error);
        }
    }, ...args.slice(2));
}
function runAsynchronously(promiseOrFunc, options = {}) {
    if (typeof promiseOrFunc === "function") promiseOrFunc = promiseOrFunc();
    if (promiseOrFunc) {
        concatStacktracesIfRejected(promiseOrFunc);
        promiseOrFunc.catch((error)=>{
            options.onError?.(error);
            const newError = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Uncaught error in asynchronous function: " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorToNiceString"])(error), {
                cause: error
            });
            if (!options.noErrorLogging) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureError"])("runAsynchronously", newError);
        });
    }
}
var TimeoutError = class extends Error {
    constructor(ms){
        super(`Timeout after ${ms}ms`);
        this.ms = ms;
        this.name = "TimeoutError";
    }
};
async function timeout(promiseOrFunc, ms) {
    const promise = typeof promiseOrFunc === "function" ? promiseOrFunc() : promiseOrFunc;
    return await Promise.race([
        promise.then((value)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(value)),
        wait(ms).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(new TimeoutError(ms)))
    ]);
}
async function timeoutThrow(promise, ms) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].orThrow(await timeout(promise, ms));
}
/**
* Maps over `items` with `fn`, running at most `concurrency` invocations at a time.
*
* Unlike `Promise.all(items.map(fn))`, this bounds the number of in-flight
* promises, which matters when `fn` hits a shared resource (e.g. a database) and
* an unbounded fan-out could exhaust connections or overload a replica. Results
* are returned in input order regardless of completion order, and the first
* rejection aborts further scheduling — already in-flight workers still settle
* but no new items are started.
*/ async function mapWithConcurrency(items, concurrency, fn) {
    if (!Number.isInteger(concurrency) || concurrency < 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`mapWithConcurrency requires a positive integer concurrency, got ${concurrency}`);
    const results = new Array(items.length);
    let nextIndex = 0;
    let aborted = false;
    const worker = async ()=>{
        while(!aborted){
            const index = nextIndex++;
            if (index >= items.length) return;
            try {
                results[index] = await fn(items[index], index);
            } catch (error) {
                aborted = true;
                throw error;
            }
        }
    };
    const workerCount = Math.min(concurrency, items.length);
    await Promise.all(Array.from({
        length: workerCount
    }, ()=>worker()));
    return results;
}
function rateLimited(func, options) {
    let waitUntil = performance.now();
    let queue = [];
    let addedToQueueCallbacks = /* @__PURE__ */ new Map();
    const next = async ()=>{
        while(true)if (waitUntil > performance.now()) await wait(Math.max(1, waitUntil - performance.now() + 1));
        else if (queue.length === 0) {
            const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
            await new Promise((resolve)=>{
                addedToQueueCallbacks.set(uuid, resolve);
            });
            addedToQueueCallbacks.delete(uuid);
        } else break;
        const nextFuncs = options.batchCalls ? queue.splice(0, queue.length) : [
            queue.shift()
        ];
        const start = performance.now();
        const value = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromPromise(func());
        const end = performance.now();
        waitUntil = Math.max(waitUntil, start + (options.throttleMs ?? 0), end + (options.gapMs ?? 0));
        for (const nextFunc of nextFuncs)if (value.status === "ok") nextFunc[0](value.data);
        else nextFunc[1](value.error);
    };
    runAsynchronously(async ()=>{
        while(true)await next();
    });
    return ()=>{
        return new Promise((resolve, reject)=>{
            waitUntil = Math.max(waitUntil, performance.now() + (options.debounceMs ?? 0));
            queue.push([
                resolve,
                reject
            ]);
            addedToQueueCallbacks.forEach((cb)=>cb());
        });
    };
}
function throttled(func, delayMs) {
    let nextAvailable = null;
    return async (...args)=>{
        while(nextAvailable !== null)await nextAvailable;
        nextAvailable = new Promise((resolve)=>{
            setTimeout(()=>{
                nextAvailable = null;
                resolve(func(...args));
            }, delayMs);
        });
        return await nextAvailable;
    };
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/react.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "componentWrapper",
    ()=>componentWrapper,
    "forwardRefIfNeeded",
    ()=>forwardRefIfNeeded,
    "getNodeText",
    ()=>getNodeText,
    "mapRef",
    ()=>mapRef,
    "mapRefState",
    ()=>mapRefState,
    "suspend",
    ()=>suspend,
    "use",
    ()=>use,
    "useQueryState",
    ()=>useQueryState,
    "useRefState",
    ()=>useRefState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
;
;
//#region src/utils/react.tsx
function componentWrapper(displayName, render) {
    const Component = forwardRefIfNeeded(render);
    Component.displayName = displayName;
    return Component;
}
const react18PromiseCache = /* @__PURE__ */ new WeakMap();
function use(promise) {
    if ("use" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(promise);
    else if (react18PromiseCache.has(promise)) {
        const result = react18PromiseCache.get(promise);
        if (result.status === "pending") throw promise;
        else if (result.status === "ok") return result.data;
        else throw result.error;
    } else {
        react18PromiseCache.set(promise, {
            "status": "pending",
            progress: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runAsynchronously"])(async ()=>{
            try {
                const res = await promise;
                react18PromiseCache.set(promise, {
                    "status": "ok",
                    data: res
                });
            } catch (e) {
                react18PromiseCache.set(promise, {
                    "status": "error",
                    error: e
                });
            }
        });
        throw promise;
    }
}
function forwardRefIfNeeded(render) {
    const version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
    if (parseInt(version.split(".")[0]) < 19) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(render);
    else return (props)=>render(props, props.ref);
}
function getNodeText(node) {
    if ([
        "number",
        "string"
    ].includes(typeof node)) return `${node}`;
    if (!node) return "";
    if (Array.isArray(node)) return node.map(getNodeText).join("");
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(node)) return getNodeText(node.props.children);
    throw new Error(`Unknown node type: ${typeof node}`);
}
/**
* Suspends the currently rendered component indefinitely. Will not unsuspend unless the component rerenders.
*
* You can use this to translate older query- or AsyncResult-based code to new the Suspense system, for example: `if (query.isLoading) suspend();`
*/ function suspend() {
    use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neverResolve"])());
    throw new Error("Somehow a Promise that never resolves was resolved?");
}
function mapRef(ref, mapper) {
    let last = null;
    return {
        get current () {
            const input = ref.current;
            if (last === null || input !== last[0]) last = [
                input,
                mapper(input)
            ];
            return last[1];
        }
    };
}
/**
* Like useState, but its value is immediately available on refState.current after being set.
*
* Like useRef, but setting the value will cause a rerender.
*
* Note that useRefState returns a new object every time a rerender happens due to a value change, which is intentional
* as it allows you to specify it in a dependency array like this:
*
* ```tsx
* useEffect(() => {
*   // do something with refState.current
* }, [refState]);  // instead of refState.current
* ```
*
* If you don't want this, you can wrap the result in a useMemo call.
*/ function useRefState(initialValue) {
    const lazyInitRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    if (lazyInitRef.current === null) lazyInitRef.current = {
        v: typeof initialValue === "function" ? initialValue() : initialValue
    };
    const resolvedInitialValue = lazyInitRef.current.v;
    const [, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "useRefState.useState": ()=>resolvedInitialValue
    }["useRefState.useState"]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(resolvedInitialValue);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useRefState.useCallback[setValue]": (updater)=>{
            const value = typeof updater === "function" ? updater(ref.current) : updater;
            ref.current = value;
            setState(value);
        }
    }["useRefState.useCallback[setValue]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useRefState.useMemo": ()=>({
                get current () {
                    return ref.current;
                },
                set: setValue
            })
    }["useRefState.useMemo"], [
        setValue
    ]);
}
function mapRefState(refState, mapper, reverseMapper) {
    let last = null;
    return {
        get current () {
            const input = refState.current;
            if (last === null || input !== last[0]) last = [
                input,
                mapper(input)
            ];
            return last[1];
        },
        set (updater) {
            const value = typeof updater === "function" ? updater(this.current) : updater;
            refState.set(reverseMapper(refState.current, value));
        }
    };
}
function useQueryState(key, defaultValue) {
    const getValue = ()=>new URLSearchParams(window.location.search).get(key) ?? defaultValue ?? null;
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(getValue);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useQueryState.useEffect": ()=>{
            const onPopState = {
                "useQueryState.useEffect.onPopState": ()=>setValue(getValue())
            }["useQueryState.useEffect.onPopState"];
            window.addEventListener("popstate", onPopState);
            return ({
                "useQueryState.useEffect": ()=>window.removeEventListener("popstate", onPopState)
            })["useQueryState.useEffect"];
        }
    }["useQueryState.useEffect"], []);
    const update = (next)=>{
        const params = new URLSearchParams(window.location.search);
        if (next !== null) params.set(key, next);
        else params.delete(key);
        const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
        window.history.pushState(null, "", newUrl);
        setValue(next);
    };
    return [
        value,
        update
    ];
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncResult",
    ()=>AsyncResult,
    "Result",
    ()=>Result
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
;
;
//#region src/utils/results.tsx
const Result = {
    fromThrowing,
    fromThrowingAsync,
    fromPromise: promiseToResult,
    ok (data) {
        return {
            status: "ok",
            data
        };
    },
    error (error) {
        return {
            status: "error",
            error
        };
    },
    map: mapResult,
    or: (result, fallback)=>{
        return result.status === "ok" ? result.data : fallback;
    },
    orThrow: (result)=>{
        if (result.status === "error") throw result.error;
        return result.data;
    },
    orThrowAsync: async (result)=>{
        return Result.orThrow(await result);
    },
    retry
};
const AsyncResult = {
    fromThrowing,
    fromPromise: promiseToResult,
    ok: Result.ok,
    error: Result.error,
    pending: pending$1,
    map: mapResult,
    or: (result, fallback)=>{
        if (result.status === "pending") return fallback;
        return Result.or(result, fallback);
    },
    orThrow: (result)=>{
        if (result.status === "pending") throw new Error("Result still pending");
        return Result.orThrow(result);
    },
    retry
};
function pending$1(progress) {
    return {
        status: "pending",
        progress
    };
}
async function promiseToResult(promise) {
    try {
        const value = await promise;
        return Result.ok(value);
    } catch (error) {
        return Result.error(error);
    }
}
function fromThrowing(fn) {
    try {
        return Result.ok(fn());
    } catch (error) {
        return Result.error(error);
    }
}
async function fromThrowingAsync(fn) {
    try {
        return Result.ok(await fn());
    } catch (error) {
        return Result.error(error);
    }
}
function mapResult(result, fn) {
    if (result.status === "error") return {
        status: "error",
        error: result.error
    };
    if (result.status === "pending") return {
        status: "pending",
        ..."progress" in result ? {
            progress: result.progress
        } : {}
    };
    return Result.ok(fn(result.data));
}
var RetryError = class extends AggregateError {
    constructor(errors){
        const strings = errors.map((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nicify"])(e));
        const isAllSame = strings.length > 1 && strings.every((s)=>s === strings[0]);
        super(errors, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
      Error after ${errors.length} attempts.
      
      ${isAllSame ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
        Attempts 1-${errors.length}:
          ${strings[0]}
      ` : strings.map((s, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deindent"]`
          Attempt ${i + 1}:
            ${s}
        `).join("\n\n")}
      `, {
            cause: errors[errors.length - 1]
        });
        this.errors = errors;
        this.name = "RetryError";
    }
    get attempts() {
        return this.errors.length;
    }
};
RetryError.prototype.name = "RetryError";
async function retry(fn, totalAttempts, { exponentialDelayBase = 1e3 } = {}) {
    const errors = [];
    for(let i = 0; i < totalAttempts; i++){
        const res = await fn(i);
        if (res.status === "ok") return Object.assign(Result.ok(res.data), {
            attempts: i + 1
        });
        else {
            errors.push(res.error);
            if (i < totalAttempts - 1) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wait"])((Math.random() + .5) * exponentialDelayBase * 2 ** i);
        }
    }
    return Object.assign(Result.error(new RetryError(errors)), {
        attempts: totalAttempts
    });
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/stores.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncStore",
    ()=>AsyncStore,
    "Store",
    ()=>Store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/promises.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/results.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/uuids.js [app-client] (ecmascript)");
;
;
;
//#region src/utils/stores.tsx
var Store = class {
    constructor(_value){
        this._value = _value;
        this._callbacks = /* @__PURE__ */ new Map();
    }
    get() {
        return this._value;
    }
    set(value) {
        const oldValue = this._value;
        this._value = value;
        this._callbacks.forEach((callback)=>callback(value, oldValue));
    }
    update(updater) {
        const value = updater(this._value);
        this.set(value);
        return value;
    }
    onChange(callback) {
        const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
        this._callbacks.set(uuid, callback);
        return {
            unsubscribe: ()=>{
                this._callbacks.delete(uuid);
            }
        };
    }
    onceChange(callback) {
        const { unsubscribe } = this.onChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
};
var AsyncStore = class AsyncStore {
    constructor(...args){
        this._mostRecentOkValue = void 0;
        this._isRejected = false;
        this._waitingRejectFunctions = /* @__PURE__ */ new Map();
        this._callbacks = /* @__PURE__ */ new Map();
        this._updateCounter = 0;
        this._lastSuccessfulUpdate = -1;
        if (args.length === 0) this._isAvailable = false;
        else {
            this._isAvailable = true;
            this._mostRecentOkValue = args[0];
        }
    }
    isAvailable() {
        return this._isAvailable;
    }
    isRejected() {
        return this._isRejected;
    }
    get() {
        if (this.isRejected()) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncResult"].error(this._rejectionError);
        else if (this.isAvailable()) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncResult"].ok(this._mostRecentOkValue);
        else return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncResult"].pending();
    }
    getOrWait() {
        const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
        if (this.isRejected()) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rejected"])(this._rejectionError);
        else if (this.isAvailable()) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolved"])(this._mostRecentOkValue);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$promises$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pending"])(new Promise((resolve, reject)=>{
            this.onceChange((value)=>{
                resolve(value);
            });
            this._waitingRejectFunctions.set(uuid, reject);
        }).finally(()=>{
            this._waitingRejectFunctions.delete(uuid);
        }));
    }
    _setIfLatest(result, curCounter) {
        const oldState = this.get();
        const oldValue = this._mostRecentOkValue;
        if (curCounter > this._lastSuccessfulUpdate) switch(result.status){
            case "ok":
                if (!this._isAvailable || this._isRejected || this._mostRecentOkValue !== result.data) {
                    this._lastSuccessfulUpdate = curCounter;
                    this._isAvailable = true;
                    this._isRejected = false;
                    this._mostRecentOkValue = result.data;
                    this._rejectionError = void 0;
                    this._callbacks.forEach((callback)=>callback({
                            state: this.get(),
                            oldState,
                            lastOkValue: oldValue
                        }));
                    return true;
                }
                return false;
            case "error":
                this._lastSuccessfulUpdate = curCounter;
                this._isAvailable = false;
                this._isRejected = true;
                this._rejectionError = result.error;
                this._waitingRejectFunctions.forEach((reject)=>reject(result.error));
                this._callbacks.forEach((callback)=>callback({
                        state: this.get(),
                        oldState,
                        lastOkValue: oldValue
                    }));
                return true;
        }
        return false;
    }
    set(value) {
        this._setIfLatest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].ok(value), ++this._updateCounter);
    }
    update(updater) {
        const value = updater(this._mostRecentOkValue);
        this.set(value);
        return value;
    }
    async setAsync(promise) {
        const curCounter = ++this._updateCounter;
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].fromPromise(promise);
        return this._setIfLatest(result, curCounter);
    }
    setUnavailable() {
        this._lastSuccessfulUpdate = ++this._updateCounter;
        this._mostRecentOkValue = void 0;
        this._isAvailable = false;
        this._isRejected = false;
        this._rejectionError = void 0;
    }
    setRejected(error) {
        this._setIfLatest(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$results$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Result"].error(error), ++this._updateCounter);
    }
    map(mapper) {
        const store = new AsyncStore();
        this.onChange((value)=>{
            store.set(mapper(value));
        });
        return store;
    }
    onChange(callback) {
        return this.onStateChange(({ state, lastOkValue })=>{
            if (state.status === "ok") callback(state.data, lastOkValue);
        });
    }
    onStateChange(callback) {
        const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$uuids$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
        this._callbacks.set(uuid, callback);
        return {
            unsubscribe: ()=>{
                this._callbacks.delete(uuid);
            }
        };
    }
    onceChange(callback) {
        const { unsubscribe } = this.onChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
    onceStateChange(callback) {
        const { unsubscribe } = this.onStateChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
};
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deindent",
    ()=>deindent,
    "deindentTemplate",
    ()=>deindentTemplate,
    "escapeTemplateLiteral",
    ()=>escapeTemplateLiteral,
    "extractScopes",
    ()=>extractScopes,
    "getWhitespacePrefix",
    ()=>getWhitespacePrefix,
    "getWhitespaceSuffix",
    ()=>getWhitespaceSuffix,
    "mergeScopeStrings",
    ()=>mergeScopeStrings,
    "nicify",
    ()=>nicify,
    "replaceAll",
    ()=>replaceAll,
    "stringCompare",
    ()=>stringCompare,
    "templateIdentity",
    ()=>templateIdentity,
    "trimEmptyLinesEnd",
    ()=>trimEmptyLinesEnd,
    "trimEmptyLinesStart",
    ()=>trimEmptyLinesStart,
    "trimLines",
    ()=>trimLines,
    "typedCapitalize",
    ()=>typedCapitalize,
    "typedJoin",
    ()=>typedJoin,
    "typedToLowercase",
    ()=>typedToLowercase,
    "typedToUppercase",
    ()=>typedToUppercase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/arrays.js [app-client] (ecmascript)");
;
;
;
//#region src/utils/strings.tsx
function typedJoin(strings, separator) {
    return strings.join(separator);
}
function typedToLowercase(s) {
    if (typeof s !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Expected a string for typedToLowercase", {
        s
    });
    return s.toLowerCase();
}
function typedToUppercase(s) {
    if (typeof s !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Expected a string for typedToUppercase", {
        s
    });
    return s.toUpperCase();
}
function typedCapitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
* Compares two strings in a way that is not dependent on the current locale.
*/ function stringCompare(a, b) {
    if (typeof a !== "string" || typeof b !== "string") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"](`Expected two strings for stringCompare, found ${typeof a} and ${typeof b}`, {
        a,
        b
    });
    const cmp = (a, b)=>a < b ? -1 : a > b ? 1 : 0;
    return cmp(a.toUpperCase(), b.toUpperCase()) || cmp(b, a);
}
/**
* Returns all whitespace character at the start of the string.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function getWhitespacePrefix(s) {
    return s.substring(0, s.length - s.trimStart().length);
}
/**
* Returns all whitespace character at the end of the string.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function getWhitespaceSuffix(s) {
    return s.substring(s.trimEnd().length);
}
/**
* Returns a string with all empty or whitespace-only lines at the start removed.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimEmptyLinesStart(s) {
    const lines = s.split("\n");
    const firstNonEmptyLineIndex = lines.findIndex((line)=>line.trim() !== "");
    if (firstNonEmptyLineIndex === -1) return "";
    return lines.slice(firstNonEmptyLineIndex).join("\n");
}
/**
* Returns a string with all empty or whitespace-only lines at the end removed.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimEmptyLinesEnd(s) {
    const lines = s.split("\n");
    const lastNonEmptyLineIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastIndex"])(lines, (line)=>line.trim() !== "");
    return lines.slice(0, lastNonEmptyLineIndex + 1).join("\n");
}
/**
* Returns a string with all empty or whitespace-only lines trimmed at the start and end.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimLines(s) {
    return trimEmptyLinesEnd(trimEmptyLinesStart(s));
}
/**
* A template literal tag that returns the same string as the template literal without a tag.
*
* Useful for implementing your own template literal tags.
*/ function templateIdentity(strings, ...values) {
    if (values.length !== strings.length - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid number of values; must be one less than strings", {
        strings,
        values
    });
    return strings.reduce((result, str, i)=>result + str + (values[i] ?? ""), "");
}
function deindent(strings, ...values) {
    if (typeof strings === "string") return deindent([
        strings
    ]);
    return templateIdentity(...deindentTemplate(strings, ...values));
}
function deindentTemplate(strings, ...values) {
    if (values.length !== strings.length - 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("Invalid number of values; must be one less than strings", {
        strings,
        values
    });
    const trimmedStrings = [
        ...strings
    ];
    trimmedStrings[0] = trimEmptyLinesStart(trimmedStrings[0] + "+").slice(0, -1);
    trimmedStrings[trimmedStrings.length - 1] = trimEmptyLinesEnd("+" + trimmedStrings[trimmedStrings.length - 1]).slice(1);
    const indentation = trimmedStrings.join("${SOME_VALUE}").split("\n").filter((line)=>line.trim() !== "").map((line)=>getWhitespacePrefix(line).length).reduce((min, current)=>Math.min(min, current), Infinity);
    const deindentedStrings = trimmedStrings.map((string, stringIndex)=>{
        return string.split("\n").map((line, lineIndex)=>stringIndex !== 0 && lineIndex === 0 ? line : line.substring(indentation)).join("\n");
    });
    return [
        deindentedStrings,
        ...values.map((value, i)=>{
            const firstLineIndentation = getWhitespacePrefix(deindentedStrings[i].split("\n").at(-1));
            return `${value}`.replaceAll("\n", `\n${firstLineIndentation}`);
        })
    ];
}
function extractScopes(scope, removeDuplicates = true) {
    const filtered = scope.trim().split(/\s+/).filter((scope)=>scope.length > 0);
    return removeDuplicates ? [
        ...new Set(filtered)
    ] : filtered;
}
function mergeScopeStrings(...scopes) {
    return extractScopes(scopes.map((s)=>extractScopes(s)).flat().join(" ")).join(" ");
}
function escapeTemplateLiteral(s) {
    return s.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
}
/**
* Some classes have different constructor names in different environments (eg. `Headers` is sometimes called `_Headers`,
* so we create an object of overrides to handle these cases.
*/ const nicifiableClassNameOverrides = new Map(Object.entries({
    Headers
}).map(([k, v])=>[
        v,
        k
    ]));
function nicify(value, options = {}) {
    const fullOptions = {
        maxDepth: 5,
        currentIndent: "",
        lineIndent: "  ",
        multiline: true,
        refs: /* @__PURE__ */ new Map(),
        path: "value",
        parent: null,
        overrides: ()=>null,
        keyInParent: null,
        hideFields: [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterUndefined"])(options)
    };
    const { maxDepth, currentIndent, lineIndent, multiline, refs, path, overrides, hideFields } = fullOptions;
    const nl = `\n${currentIndent}`;
    const overrideResult = overrides(value, options);
    if (overrideResult !== null) return overrideResult;
    if ([
        "function",
        "object",
        "symbol"
    ].includes(typeof value) && value !== null) {
        if (refs.has(value)) return `Ref<${refs.get(value)}>`;
        refs.set(value, path);
    }
    const newOptions = {
        maxDepth: maxDepth - 1,
        currentIndent,
        lineIndent,
        multiline,
        refs,
        path: path + "->[unknown property]",
        overrides,
        parent: {
            value,
            options: fullOptions
        },
        keyInParent: null,
        hideFields: []
    };
    const nestedNicify = (newValue, newPath, keyInParent, options = {})=>{
        return nicify(newValue, {
            ...newOptions,
            path: newPath,
            currentIndent: currentIndent + lineIndent,
            keyInParent,
            ...options
        });
    };
    switch(typeof value){
        case "boolean":
        case "number":
            return JSON.stringify(value);
        case "string":
            {
                const isDeindentable = (v)=>deindent(v) === v && v.includes("\n");
                const wrapInDeindent = (v)=>deindent`
        deindent\`
        ${currentIndent + lineIndent}${escapeTemplateLiteral(v).replaceAll("\n", nl + lineIndent)}
        ${currentIndent}\`
      `;
                if (isDeindentable(value)) return wrapInDeindent(value);
                else if (value.endsWith("\n") && isDeindentable(value.slice(0, -1))) return wrapInDeindent(value.slice(0, -1)) + " + \"\\n\"";
                else return JSON.stringify(value);
            }
        case "undefined":
            return "undefined";
        case "symbol":
            return value.toString();
        case "bigint":
            return `${value}n`;
        case "function":
            if (value.name) return `function ${value.name}(...) { ... }`;
            return `(...) => { ... }`;
        case "object":
            {
                if (value === null) return "null";
                if (Array.isArray(value)) {
                    const extraLines = getNicifiedObjectExtraLines(value);
                    const resValueLength = value.length + extraLines.length;
                    if (resValueLength === 0) return "[]";
                    if (maxDepth <= 0) return `[...]`;
                    const resValues = value.map((v, i)=>nestedNicify(v, `${path}[${i}]`, i));
                    resValues.push(...extraLines);
                    if (resValues.length !== resValueLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("nicify of object: resValues.length !== resValueLength", {
                        value,
                        resValues,
                        resValueLength
                    });
                    if (resValues.length > 4 || resValues.some((x)=>resValues.length > 1 && x.length > 4 || x.includes("\n"))) return `[${nl}${resValues.map((x)=>`${lineIndent}${x},${nl}`).join("")}]`;
                    else return `[${resValues.join(", ")}]`;
                }
                if (value instanceof Date) return `Date(${nestedNicify(value.toISOString(), `${path}.toISOString()`, null)})`;
                if (value instanceof URL) return `URL(${nestedNicify(value.toString(), `${path}.toString()`, null)})`;
                if (ArrayBuffer.isView(value)) return `${value.constructor.name}([${value.toString()}])`;
                if (value instanceof ArrayBuffer) return `ArrayBuffer [${new Uint8Array(value).toString()}]`;
                if (value instanceof Error) {
                    let stack = value.stack ?? "";
                    const toString = value.toString();
                    if (!stack.startsWith(toString)) stack = `${toString}\n${stack}`;
                    stack = stack.trimEnd();
                    stack = stack.replace(/\n\s+/g, `\n${lineIndent}${lineIndent}`);
                    stack = stack.replace("\n", `\n${lineIndent}Stack:\n`);
                    if (Object.keys(value).length > 0) stack += `\n${lineIndent}Extra properties: ${nestedNicify(Object.fromEntries(Object.entries(value)), path, null)}`;
                    if (value.cause) stack += `\n${lineIndent}Cause:\n${lineIndent}${lineIndent}${nestedNicify(value.cause, path, null, {
                        currentIndent: currentIndent + lineIndent + lineIndent
                    })}`;
                    stack = stack.replaceAll("\n", `\n${currentIndent}`);
                    return stack;
                }
                const constructorName = [
                    null,
                    Object.prototype
                ].includes(Object.getPrototypeOf(value)) ? null : nicifiableClassNameOverrides.get(value.constructor) ?? value.constructor.name;
                const constructorString = constructorName ? `${constructorName} ` : "";
                const entries = getNicifiableEntries(value).filter(([k])=>!hideFields.includes(k));
                const extraLines = [
                    ...getNicifiedObjectExtraLines(value),
                    ...hideFields.length > 0 ? [
                        `<some fields may have been hidden>`
                    ] : []
                ];
                const resValueLength = entries.length + extraLines.length;
                if (resValueLength === 0) return `${constructorString}{}`;
                if (maxDepth <= 0) return `${constructorString}{ ... }`;
                const resValues = entries.map(([k, v], keyIndex)=>{
                    const keyNicified = nestedNicify(k, `Object.keys(${path})[${keyIndex}]`, null);
                    const keyInObjectLiteral = typeof k === "string" ? nicifyPropertyString(k) : `[${keyNicified}]`;
                    if (typeof v === "function" && v.name === k) return `${keyInObjectLiteral}(...): { ... }`;
                    else return `${keyInObjectLiteral}: ${nestedNicify(v, `${path}[${keyNicified}]`, k)}`;
                });
                resValues.push(...extraLines);
                if (resValues.length !== resValueLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("nicify of object: resValues.length !== resValueLength", {
                    value,
                    resValues,
                    resValueLength
                });
                const shouldIndent = resValues.length > 1 || resValues.some((x)=>x.includes("\n"));
                if (resValues.length === 0) return `${constructorString}{}`;
                if (shouldIndent) return `${constructorString}{${nl}${resValues.map((x)=>`${lineIndent}${x},${nl}`).join("")}}`;
                else return `${constructorString}{ ${resValues.join(", ")} }`;
            }
        default:
            return `${typeof value}<${value}>`;
    }
}
function replaceAll(input, searchValue, replaceValue) {
    if (searchValue === "") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("replaceAll: searchValue is empty");
    return input.split(searchValue).join(replaceValue);
}
function nicifyPropertyString(str) {
    return JSON.stringify(str);
}
function getNicifiableKeys(value) {
    const overridden = ("getNicifiableKeys" in value ? value.getNicifiableKeys?.bind(value) : null)?.();
    if (overridden != null) return overridden;
    if (value instanceof Response) return [
        "status",
        "headers"
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"])(Object.keys(value).sort());
}
function getNicifiableEntries(value) {
    const recordLikes = [
        Headers
    ];
    function isRecordLike(value) {
        return recordLikes.some((x)=>value instanceof x);
    }
    if (isRecordLike(value)) return [
        ...value.entries()
    ].sort(([a], [b])=>stringCompare(`${a}`, `${b}`));
    return getNicifiableKeys(value).map((k)=>[
            k,
            value[k]
        ]);
}
function getNicifiedObjectExtraLines(value) {
    return ("getNicifiedObjectExtraLines" in value ? value.getNicifiedObjectExtraLines : null)?.() ?? [];
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/telemetry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "log",
    ()=>log,
    "traceSpan",
    ()=>traceSpan,
    "withTraceSpan",
    ()=>withTraceSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@opentelemetry/api/build/esm/trace-api.js [app-client] (ecmascript)");
;
;
;
//#region src/utils/telemetry.tsx
const tracer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trace"].getTracer("stack-tracer");
function withTraceSpan(optionsOrDescription, fn) {
    return async (...args)=>{
        return await traceSpan(optionsOrDescription, (span)=>fn(...args));
    };
}
async function traceSpan(optionsOrDescription, fn) {
    let options = typeof optionsOrDescription === "string" ? {
        description: optionsOrDescription
    } : optionsOrDescription;
    return await tracer.startActiveSpan(`STACK: ${options.description}`, async (span)=>{
        if (options.attributes) for (const [key, value] of Object.entries(options.attributes))span.setAttribute(key, value);
        try {
            return await fn(span);
        } finally{
            span.end();
        }
    });
}
function log(message, attributes) {
    const span = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trace"].getActiveSpan();
    if (span) span.addEvent(message, attributes);
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnvVariable"])("STACK_SEED_MODE", "false") !== "true") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("No active span found");
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/typed-arrays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toArrayBufferBacked",
    ()=>toArrayBufferBacked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/errors.js [app-client] (ecmascript)");
;
//#region src/utils/typed-arrays.tsx
/**
* Ensures a Uint8Array is backed by a regular ArrayBuffer (not SharedArrayBuffer).
*
* TypeScript 5.7+ made typed arrays generic over their buffer type. Bare `Uint8Array`
* defaults to `Uint8Array<ArrayBufferLike>`, which includes SharedArrayBuffer. Web Crypto
* APIs require `BufferSource` which only accepts `ArrayBufferView<ArrayBuffer>`. This
* function narrows the type using an instanceof guard, creating a same-buffer view
* (zero-copy) when the buffer is already an ArrayBuffer.
*/ function toArrayBufferBacked(arr) {
    if (arr.buffer instanceof SharedArrayBuffer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexclaveAssertionError"]("SharedArrayBuffer-backed Uint8Arrays are not supported in this context");
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "typeAssert",
    ()=>typeAssert,
    "typeAssertExtends",
    ()=>typeAssertExtends,
    "typeAssertIs",
    ()=>typeAssertIs
]);
//#region src/utils/types.tsx
typeAssertIs()();
typeAssertIs()();
typeAssertIs()();
/**
* Can be used to create assertions on types. For example, if passed any T other than `true`, the following will
* show a type error:
*
* ```ts
* typeAssert<T>()();  // the second pair of braces is important!
* ```
*/ function typeAssert() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
/**
* Functionally equivalent to `typeAssert<T extends S ? true : false>()()`, but with better error messages.
*/ function typeAssertExtends() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
function typeAssertIs() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/urls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUrlIfValid",
    ()=>createUrlIfValid,
    "getDefaultApiUrls",
    ()=>getDefaultApiUrls,
    "getHardcodedFallbackUrls",
    ()=>getHardcodedFallbackUrls,
    "getRelativePart",
    ()=>getRelativePart,
    "isChildPath",
    ()=>isChildPath,
    "isChildUrl",
    ()=>isChildUrl,
    "isLocalhost",
    ()=>isLocalhost,
    "isRelative",
    ()=>isRelative,
    "isValidHostname",
    ()=>isValidHostname,
    "isValidHostnameWithWildcards",
    ()=>isValidHostnameWithWildcards,
    "isValidUrl",
    ()=>isValidUrl,
    "matchHostnamePattern",
    ()=>matchHostnamePattern,
    "url",
    ()=>url,
    "urlString",
    ()=>urlString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/crypto.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/strings.js [app-client] (ecmascript)");
;
;
//#region src/utils/urls.tsx
function createUrlIfValid(...args) {
    try {
        return new URL(...args);
    } catch (e) {
        return null;
    }
}
function isValidUrl(url) {
    return !!createUrlIfValid(url);
}
function isValidHostname(hostname) {
    if (!hostname || hostname.startsWith(".") || hostname.endsWith(".") || hostname.includes("..")) return false;
    const url = createUrlIfValid(`https://${hostname}`);
    if (!url) return false;
    return url.hostname === hostname;
}
function isValidHostnameWithWildcards(hostname) {
    if (!hostname) return false;
    if (!hostname.includes("*")) return isValidHostname(hostname);
    if (hostname.startsWith(".") || hostname.endsWith(".")) return false;
    if (hostname.includes("..")) return false;
    const testHostname = hostname.replace(/\*+/g, "wildcard");
    if (!/^[a-zA-Z0-9.-]+$/.test(testHostname)) return false;
    const segments = hostname.split(/\*+/);
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (segment === "") continue;
        if (i === 0 && segment.startsWith(".")) return false;
        if (i === segments.length - 1 && segment.endsWith(".")) return false;
        if (segment.includes("..")) return false;
    }
    return true;
}
function matchHostnamePattern(pattern, hostname) {
    if (!pattern.includes("*")) return pattern === hostname;
    let regexPattern = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    const doubleWildcardPlaceholder = "\0DOUBLE_WILDCARD\0";
    regexPattern = regexPattern.replace(/\*\*/g, doubleWildcardPlaceholder);
    regexPattern = regexPattern.replace(/\*/g, "[^.]*");
    regexPattern = regexPattern.replace(new RegExp(doubleWildcardPlaceholder, "g"), ".*");
    regexPattern = "^" + regexPattern + "$";
    try {
        return new RegExp(regexPattern).test(hostname);
    } catch  {
        return false;
    }
}
function getHardcodedFallbackUrls(primaryBaseUrl) {
    if (primaryBaseUrl === "https://api.stack-auth.com") return [
        "https://api1.stack-auth.com",
        "https://api2.stack-auth.com"
    ];
    if (primaryBaseUrl === "https://api.dev.stack-auth.com") return [
        "https://api1.dev.stack-auth.com",
        "https://api2.dev.stack-auth.com"
    ];
    if (primaryBaseUrl === "https://api.hexclave.com") return [
        "https://api1.hexclave.com",
        "https://api2.hexclave.com"
    ];
    if (primaryBaseUrl === "https://api.dev.hexclave.com") return [
        "https://api1.dev.hexclave.com",
        "https://api2.dev.hexclave.com"
    ];
    const localhostMatch = primaryBaseUrl.match(/^http:\/\/localhost:(\d+)02$/);
    if (localhostMatch) return [
        `http://localhost:${localhostMatch[1]}10`
    ];
    return [];
}
function getDefaultApiUrls(primaryBaseUrl) {
    return [
        primaryBaseUrl,
        ...getHardcodedFallbackUrls(primaryBaseUrl)
    ];
}
function isLocalhost(urlOrString) {
    const url = createUrlIfValid(urlOrString);
    if (!url) return false;
    if (url.hostname === "localhost" || url.hostname.endsWith(".localhost")) return true;
    if (url.hostname.match(/^127\.\d+\.\d+\.\d+$/)) return true;
    if (url.hostname === "[::1]" || url.hostname === "::1") return true;
    return false;
}
function isRelative(url) {
    const randomDomain = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSecureRandomString"])()}.stack-auth.example.com`;
    const u = createUrlIfValid(url, `https://${randomDomain}`);
    if (!u) return false;
    if (u.host !== randomDomain) return false;
    if (u.protocol !== "https:") return false;
    return true;
}
function getRelativePart(url) {
    return url.pathname + url.search + url.hash;
}
/**
* A template literal tag that returns a URL.
*
* Any values passed are encoded.
*/ function url(strings, ...values) {
    return new URL(urlString(strings, ...values));
}
/**
* A template literal tag that returns a URL string.
*
* Any values passed are encoded.
*/ function urlString(strings, ...values) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateIdentity"])(strings, ...values.map(encodeURIComponent));
}
function isChildUrl(parentUrl, maybeChildUrl) {
    return parentUrl.origin === maybeChildUrl.origin && isChildPath(parentUrl.pathname, maybeChildUrl.pathname) && [
        ...parentUrl.searchParams
    ].every(([key, value])=>maybeChildUrl.searchParams.get(key) === value) && (!parentUrl.hash || parentUrl.hash === maybeChildUrl.hash);
}
function isChildPath(parentPath, maybeChildPath) {
    parentPath = parentPath.endsWith("/") ? parentPath : parentPath + "/";
    maybeChildPath = maybeChildPath.endsWith("/") ? maybeChildPath : maybeChildPath + "/";
    return maybeChildPath.startsWith(parentPath);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/uuids.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUuidV7Generator",
    ()=>createUuidV7Generator,
    "generateUuid",
    ()=>generateUuid,
    "isUuid",
    ()=>isUuid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/esm/utils/crypto.js [app-client] (ecmascript)");
;
//#region src/utils/uuids.tsx
function generateUuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c)=>(+c ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomValues"])(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
}
const uuidV7RandomMask = (1n << 74n) - 1n;
function createUuidV7Generator() {
    let lastTimestampMs = -1;
    let randomValue = 0n;
    return ()=>{
        let timestampMs = Date.now();
        if (timestampMs > lastTimestampMs) {
            lastTimestampMs = timestampMs;
            const randomBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hexclave$2f$ui$2f$node_modules$2f40$hexclave$2f$shared$2f$dist$2f$esm$2f$utils$2f$crypto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRandomValues"])(/* @__PURE__ */ new Uint8Array(10));
            randomValue = 0n;
            for (const byte of randomBytes)randomValue = randomValue << 8n | BigInt(byte);
            randomValue &= uuidV7RandomMask;
        } else {
            timestampMs = lastTimestampMs;
            randomValue++;
            if (randomValue > uuidV7RandomMask) {
                lastTimestampMs++;
                timestampMs = lastTimestampMs;
                randomValue = 0n;
            }
        }
        const uuid = /* @__PURE__ */ new Uint8Array(16);
        let timestamp = BigInt(timestampMs);
        for(let index = 5; index >= 0; index--){
            uuid[index] = Number(timestamp & 255n);
            timestamp >>= 8n;
        }
        const randomA = Number(randomValue >> 62n & 4095n);
        uuid[6] = 112 | randomA >> 8;
        uuid[7] = randomA & 255;
        let randomB = randomValue & (1n << 62n) - 1n;
        uuid[8] = 128 | Number(randomB >> 56n);
        for(let index = 15; index >= 9; index--){
            uuid[index] = Number(randomB & 255n);
            randomB >>= 8n;
        }
        return uuid;
    };
}
function isUuid(str) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(str);
}
;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/helpers/vault/client-side.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let ______utils_bytes_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/bytes.js [app-client] (ecmascript)");
let ______utils_crypto_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/crypto.js [app-client] (ecmascript)");
//#region src/helpers/vault/client-side.ts
const hashPurpose = "stack-data-vault-client-side-encryption-key-hash";
const encryptionSecretPurpose = "stack-data-vault-client-side-encryption-value-encryption-key-hash";
const encryptionValuePurpose = "stack-data-vault-client-side-encryption-value-encryption-value-encryption";
async function getDerivedKey(secret, key) {
    return await (0, ______utils_crypto_js.iteratedHash)({
        purpose: encryptionSecretPurpose,
        extra: secret,
        value: key,
        iterations: 1e5
    });
}
/**
* Use to hash the key so the server cannot infer it.
*/ async function hashKey(secret, key) {
    return (0, ______utils_bytes_js.encodeBase64)(await (0, ______utils_crypto_js.hash)({
        purpose: hashPurpose,
        extra: secret,
        value: await getDerivedKey(secret, key)
    }));
}
/**
* Use to encrypt the value so that the server cannot read the value without knowing the key.
*/ async function encryptValue(secret, key, value) {
    return (0, ______utils_bytes_js.encodeBase64)(await (0, ______utils_crypto_js.encrypt)({
        purpose: encryptionValuePurpose,
        secret: await getDerivedKey(secret, key),
        value: new TextEncoder().encode(value)
    }));
}
/**
* Use to decrypt the value. See encryptValue.
*/ async function decryptValue(secret, key, encryptedValue) {
    const bytesResult = await (0, ______utils_crypto_js.decrypt)({
        purpose: encryptionValuePurpose,
        secret: await getDerivedKey(secret, key),
        cipher: (0, ______utils_bytes_js.decodeBase64)(encryptedValue)
    });
    if (bytesResult.status === "error") throw new Error("Data vault client-side decryption failed. Are you sure you're using the correct secret?", {
        cause: bytesResult.error
    });
    return new TextDecoder().decode(bytesResult.data);
}
//#endregion
exports.decryptValue = decryptValue;
exports.encryptValue = encryptValue;
exports.hashKey = hashKey;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/hooks/use-async-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const require_rolldown_runtime = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/rolldown-runtime-D6vf50IK.js [app-client] (ecmascript)");
let ___utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
react = require_rolldown_runtime.__toESM(react);
//#region src/hooks/use-async-callback.tsx
function useAsyncCallback(callback, deps) {
    const [error, setError] = react.default.useState(void 0);
    const [loadingCount, setLoadingCount] = react.default.useState(0);
    return [
        react.default.useCallback({
            "useAsyncCallback.useCallback": async (...args)=>{
                setLoadingCount({
                    "useAsyncCallback.useCallback": (c)=>c + 1
                }["useAsyncCallback.useCallback"]);
                try {
                    return await callback(...args);
                } catch (e) {
                    setError(e);
                    throw e;
                } finally{
                    setLoadingCount({
                        "useAsyncCallback.useCallback": (c)=>c - 1
                    }["useAsyncCallback.useCallback"]);
                }
            }
        }["useAsyncCallback.useCallback"], deps),
        loadingCount > 0,
        error
    ];
}
function useAsyncCallbackWithLoggedError(callback, deps) {
    const [newCallback, loading] = useAsyncCallback({
        "useAsyncCallbackWithLoggedError.useAsyncCallback": async (...args)=>{
            try {
                return await callback(...args);
            } catch (e) {
                (0, ___utils_errors_js.captureError)("async-callback", e);
                throw e;
            }
        }
    }["useAsyncCallbackWithLoggedError.useAsyncCallback"], deps);
    return [
        newCallback,
        loading
    ];
}
//#endregion
exports.useAsyncCallback = useAsyncCallback;
exports.useAsyncCallbackWithLoggedError = useAsyncCallbackWithLoggedError;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __interface_admin_interface_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/admin-interface.js [app-client] (ecmascript)");
let __interface_client_interface_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/client-interface.js [app-client] (ecmascript)");
let __interface_server_interface_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/server-interface.js [app-client] (ecmascript)");
let __known_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)");
Object.defineProperty(exports, "HexclaveAdminInterface", {
    enumerable: true,
    get: function() {
        return __interface_admin_interface_js.HexclaveAdminInterface;
    }
});
Object.defineProperty(exports, "HexclaveClientInterface", {
    enumerable: true,
    get: function() {
        return __interface_client_interface_js.HexclaveClientInterface;
    }
});
Object.defineProperty(exports, "HexclaveServerInterface", {
    enumerable: true,
    get: function() {
        return __interface_server_interface_js.HexclaveServerInterface;
    }
});
Object.defineProperty(exports, "KnownError", {
    enumerable: true,
    get: function() {
        return __known_errors_js.KnownError;
    }
});
Object.defineProperty(exports, "KnownErrors", {
    enumerable: true,
    get: function() {
        return __known_errors_js.KnownErrors;
    }
});
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/admin-interface.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let ___utils_results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let ___utils_urls_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/urls.js [app-client] (ecmascript)");
let ___known_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)");
let __server_interface_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/server-interface.js [app-client] (ecmascript)");
//#region src/interface/admin-interface.ts
var HexclaveAdminInterface = class extends __server_interface_js.HexclaveServerInterface {
    constructor(options){
        super(options);
        this.options = options;
    }
    async sendAdminRequest(path, options, session, requestType = "admin") {
        return await this.sendServerRequest(path, {
            ...options,
            headers: {
                "x-hexclave-super-secret-admin-key": "superSecretAdminKey" in this.options ? this.options.superSecretAdminKey : "",
                ...options.headers
            }
        }, session, requestType);
    }
    async sendAdminRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return ___utils_results_js.Result.ok(await this.sendAdminRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return ___utils_results_js.Result.error(e);
            throw e;
        }
    }
    async getProject() {
        return await (await this.sendAdminRequest("/internal/projects/current", {
            method: "GET"
        }, null)).json();
    }
    async updateProject(update) {
        return await (await this.sendAdminRequest("/internal/projects/current", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, null)).json();
    }
    async createInternalApiKey(options) {
        return await (await this.sendAdminRequest("/internal/api-keys", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async listInternalApiKeys() {
        return (await (await this.sendAdminRequest("/internal/api-keys", {}, null)).json()).items;
    }
    async revokeInternalApiKeyById(id) {
        await this.sendAdminRequest(`/internal/api-keys/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                revoked: true
            })
        }, null);
    }
    async getInternalApiKey(id, session) {
        return await (await this.sendAdminRequest(`/internal/api-keys/${id}`, {}, session)).json();
    }
    async listInternalEmailTemplates() {
        return (await (await this.sendAdminRequest(`/internal/email-templates`, {}, null)).json()).templates;
    }
    async listWorkflows() {
        return (await (await this.sendAdminRequest(`/internal/workflows`, {}, null)).json()).workflows;
    }
    async createWorkflow(options) {
        return await (await this.sendAdminRequest(`/internal/workflows`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async updateWorkflowSource(workflowId, source) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}/source`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                source
            })
        }, null)).json();
    }
    async setWorkflowPaused(workflowId, isPaused) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                is_paused: isPaused
            })
        }, null)).json();
    }
    async deleteWorkflow(workflowId) {
        await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}`, {
            method: "DELETE"
        }, null);
    }
    async listWorkflowVersions(workflowId) {
        return (await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}/versions`, {}, null)).json()).versions;
    }
    async listWorkflowRuns(workflowId, filter = {}) {
        const params = new URLSearchParams();
        if (filter.state !== void 0) params.set("state", filter.state);
        if (filter.version !== void 0) params.set("version", String(filter.version));
        if (filter.run_key !== void 0) params.set("run_key", filter.run_key);
        if (filter.cursor !== void 0) params.set("cursor", filter.cursor);
        if (filter.limit !== void 0) params.set("limit", String(filter.limit));
        if (filter.include_state !== void 0) params.set("include_state", String(filter.include_state));
        const query = params.toString();
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}/runs` + (query ? `?${query}` : ""), {}, null)).json();
    }
    async getWorkflowRun(runId) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/runs/${runId}`, {}, null)).json();
    }
    async cancelWorkflowRuns(workflowId, filter) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}/runs/cancel`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(filter)
        }, null)).json();
    }
    async upgradeWorkflowRuns(workflowId, options) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/${workflowId}/runs/upgrade`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async retryWorkflowRun(runId) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/workflows/runs/${runId}/retry`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async sendWorkflowEvent(name, data) {
        return await (await this.sendAdminRequest(`/internal/workflows/events`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                data
            })
        }, null)).json();
    }
    async listInternalEmailDrafts() {
        return (await (await this.sendAdminRequest(`/internal/email-drafts`, {}, null)).json()).drafts;
    }
    async createEmailDraft(options) {
        return await (await this.sendAdminRequest(`/internal/email-drafts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async updateEmailDraft(id, data) {
        await this.sendAdminRequest(`/internal/email-drafts/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null);
    }
    async deleteEmailDraft(id) {
        await this.sendAdminRequest(`/internal/email-drafts/${id}`, {
            method: "DELETE"
        }, null);
    }
    async listEmailThemes() {
        return (await (await this.sendAdminRequest(`/internal/email-themes`, {}, null)).json()).themes;
    }
    async listTeamPermissionDefinitions() {
        return (await (await this.sendAdminRequest(`/team-permission-definitions`, {}, null)).json()).items;
    }
    async listTeamPermissionDefinitionsPaginated(options) {
        const params = new URLSearchParams();
        params.set("limit", String(options.limit));
        if (options.cursor) params.set("cursor", options.cursor);
        if (options.query) params.set("query", options.query);
        const result = await (await this.sendAdminRequest(`/team-permission-definitions?${params.toString()}`, {}, null)).json();
        return {
            items: result.items,
            nextCursor: result.pagination?.next_cursor ?? null
        };
    }
    async createTeamPermissionDefinition(data) {
        return await (await this.sendAdminRequest("/team-permission-definitions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateTeamPermissionDefinition(permissionId, data) {
        return await (await this.sendAdminRequest(`/team-permission-definitions/${permissionId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteTeamPermissionDefinition(permissionId) {
        await this.sendAdminRequest(`/team-permission-definitions/${permissionId}`, {
            method: "DELETE"
        }, null);
    }
    async listProjectPermissionDefinitions() {
        return (await (await this.sendAdminRequest(`/project-permission-definitions`, {}, null)).json()).items;
    }
    async createProjectPermissionDefinition(data) {
        return await (await this.sendAdminRequest("/project-permission-definitions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateProjectPermissionDefinition(permissionId, data) {
        return await (await this.sendAdminRequest(`/project-permission-definitions/${permissionId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteProjectPermissionDefinition(permissionId) {
        await this.sendAdminRequest(`/project-permission-definitions/${permissionId}`, {
            method: "DELETE"
        }, null);
    }
    async getSvixToken() {
        return await (await this.sendAdminRequest("/webhooks/svix-token", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async deleteProject() {
        await this.sendAdminRequest("/internal/projects/current", {
            method: "DELETE"
        }, null);
    }
    async getMetrics(includeAnonymous = false, filters) {
        const params = new URLSearchParams();
        if (includeAnonymous) params.append("include_anonymous", "true");
        if (filters?.country_code) params.append("filter_country_code", filters.country_code);
        if (filters?.referrer) params.append("filter_referrer", filters.referrer);
        if (filters?.browser) params.append("filter_browser", filters.browser);
        if (filters?.os) params.append("filter_os", filters.os);
        if (filters?.device) params.append("filter_device", filters.device);
        if (filters?.since) params.append("filter_since", filters.since);
        if (filters?.until) params.append("filter_until", filters.until);
        const queryString = params.toString();
        const body = await (await this.sendAdminRequest(`/internal/metrics${queryString ? `?${queryString}` : ""}`, {
            method: "GET"
        }, null)).json();
        const rawBody = body;
        const rawAnalytics = body.analytics_overview;
        return {
            ...body,
            live_users: rawBody.live_users ?? 0,
            hourly_users: rawBody.hourly_users ?? [],
            hourly_active_users: rawBody.hourly_active_users ?? [],
            analytics_overview: {
                ...body.analytics_overview,
                hourly_page_views: rawAnalytics.hourly_page_views ?? [],
                hourly_active_users: rawAnalytics.hourly_active_users ?? [],
                hourly_visitors: rawAnalytics.hourly_visitors ?? [],
                daily_anonymous_visitors_fallback: rawAnalytics.daily_anonymous_visitors_fallback ?? [],
                anonymous_visitors_fallback: rawAnalytics.anonymous_visitors_fallback ?? 0,
                top_regions: rawAnalytics.top_regions ?? [],
                bounce_rate: rawAnalytics.bounce_rate ?? 0,
                daily_bounce_rate: rawAnalytics.daily_bounce_rate ?? [],
                daily_avg_session_seconds: rawAnalytics.daily_avg_session_seconds ?? [],
                top_browsers: rawAnalytics.top_browsers ?? [],
                top_operating_systems: rawAnalytics.top_operating_systems ?? [],
                top_devices: rawAnalytics.top_devices ?? []
            }
        };
    }
    async getPlanUsage() {
        return await (await this.sendAdminRequest("/internal/plan-usage", {
            method: "GET"
        }, null)).json();
    }
    async getUserActivity(userId) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/internal/user-activity?user_id=${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async getAnalyticsClickmap(options) {
        return await (await this.sendAdminRequest("/internal/analytics/clickmap", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async createAnalyticsClickmapToken(options) {
        return await (await this.sendAdminRequest("/internal/analytics/clickmap-token", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).json();
    }
    async getMetricsUserCounts() {
        return await (await this.sendAdminRequest("/internal/metrics/user-counts", {
            method: "GET"
        }, null)).json();
    }
    async sendTestEmail(data) {
        return await (await this.sendAdminRequest(`/internal/send-test-email`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async sendTestWebhook(data) {
        return await (await this.sendAdminRequest(`/internal/send-test-webhook`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listSentEmails() {
        return await (await this.sendAdminRequest("/internal/emails", {
            method: "GET"
        }, null)).json();
    }
    async setupManagedEmailProvider(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/setup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async checkManagedEmailStatus(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/check", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listManagedEmailDomains() {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/list", {
            method: "GET"
        }, null)).json();
    }
    async deleteManagedEmailDomain(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/delete", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async applyManagedEmailProvider(data) {
        return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/apply", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async sendSignInInvitationEmail(email, callbackUrl) {
        await this.sendAdminRequest("/internal/send-sign-in-invitation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, null);
    }
    async saveChatMessage(threadId, message) {
        await this.sendAdminRequest(`/internal/ai-chat/${threadId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        }, null);
    }
    async listChatMessages(threadId) {
        return await (await this.sendAdminRequest(`/internal/ai-chat/${threadId}`, {
            method: "GET"
        }, null)).json();
    }
    async renderEmailPreview(options) {
        return await (await this.sendAdminRequest(`/emails/render-email`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                theme_id: options.themeId,
                theme_tsx_source: options.themeTsxSource,
                template_id: options.templateId,
                template_tsx_source: options.templateTsxSource,
                editable_markers: options.editableMarkers,
                editable_source: options.editableSource
            })
        }, null)).json();
    }
    async rewriteTemplateSourceWithAI(templateTsxSource) {
        return await (await this.sendAdminRequest(`/internal/rewrite-template-source`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                template_tsx_source: templateTsxSource
            })
        }, null)).json();
    }
    async createEmailTheme(displayName) {
        return await (await this.sendAdminRequest(`/internal/email-themes`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                display_name: displayName
            })
        }, null)).json();
    }
    async getEmailTheme(id) {
        return await (await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "GET"
        }, null)).json();
    }
    async updateEmailTheme(id, tsxSource) {
        await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                tsx_source: tsxSource
            })
        }, null);
    }
    async deleteEmailTheme(id) {
        await this.sendAdminRequest(`/internal/email-themes/${id}`, {
            method: "DELETE"
        }, null);
    }
    async updateEmailTemplate(id, tsxSource, themeId) {
        return await (await this.sendAdminRequest(`/internal/email-templates/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                tsx_source: tsxSource,
                theme_id: themeId
            })
        }, null)).json();
    }
    async getConfig() {
        return await (await this.sendAdminRequest(`/internal/config`, {
            method: "GET"
        }, null)).json();
    }
    async getConfigOverride(level) {
        return await (await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "GET"
        }, null)).json();
    }
    async setConfigOverride(level, configOverride, source) {
        await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_string: JSON.stringify(configOverride),
                ...source && {
                    source
                }
            })
        }, null);
    }
    async updateConfigOverride(level, configOverrideOverride) {
        await this.sendAdminRequest(`/internal/config/override/${level}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_override_string: JSON.stringify(configOverrideOverride)
            })
        }, null);
    }
    async getPushedConfigSource() {
        return (await (await this.sendAdminRequest(`/internal/config/source`, {
            method: "GET"
        }, null)).json()).source;
    }
    async unlinkPushedConfigSource() {
        await this.sendAdminRequest(`/internal/config/source`, {
            method: "DELETE"
        }, null);
    }
    /**
	* Reads a specific config-agent run's state (or `null`) for the linked GitHub
	* repo. Polled by the dashboard — using the id returned by `applyConfigViaAgent`
	* — for live progress and the review diff. Runs are independent, so each is
	* addressed by its own id rather than "the" run on the branch.
	*/ async getConfigAgentRun(runId) {
        return (await (await this.sendAdminRequest(`/internal/config/github/run?run_id=${encodeURIComponent(runId)}`, {
            method: "GET"
        }, null)).json()).agent_run ?? null;
    }
    /**
	* Applies a dashboard config change to the linked GitHub repo by running the
	* config agent in a sandbox (server-side). Returns immediately with the new run's
	* `id`; poll `getConfigAgentRun(id)` for progress. The GitHub access token is the
	* caller's own OAuth token and is used transiently server-side.
	*/ async applyConfigViaAgent(options) {
        return await (await this.sendAdminRequest(`/internal/config/github/apply`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                github_access_token: options.githubAccessToken,
                config_update_string: JSON.stringify(options.configUpdate)
            })
        }, null)).json();
    }
    /**
	* Cancels a specific in-flight agent-driven config write: hard-stops the sandbox
	* so the agent stops mid-work. Also cancels runs in `awaiting_review`. No revert
	* — if the agent already pushed, the commit stays. Returns `not-running` if the
	* run is gone or already terminal.
	*/ async cancelConfigAgentRun(runId) {
        return await (await this.sendAdminRequest(`/internal/config/github/cancel`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                run_id: runId
            })
        }, null)).json();
    }
    /**
	* Commits a specific run's reviewed change to GitHub. Only valid when that run is in
	* `awaiting_review` status; the change (diff + base commit) was captured at apply time
	* and is rebuilt + pushed via the GitHub API here, so no live sandbox is involved.
	* Returns `not-awaiting-review` if the run isn't in a committable state.
	*/ async commitConfigAgentRun(runId, options) {
        return await (await this.sendAdminRequest(`/internal/config/github/commit`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                run_id: runId,
                github_access_token: options.githubAccessToken,
                ...options.commitMessage ? {
                    commit_message: options.commitMessage
                } : {}
            })
        }, null)).json();
    }
    async resetConfigOverrideKeys(level, keys) {
        await this.sendAdminRequest(`/internal/config/override/${level}/reset-keys`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                keys
            })
        }, null);
    }
    async createEmailTemplate(displayName) {
        return await (await this.sendAdminRequest(`/internal/email-templates`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                display_name: displayName
            })
        }, null)).json();
    }
    async deleteEmailTemplate(id) {
        await this.sendAdminRequest(`/internal/email-templates/${id}`, {
            method: "DELETE"
        }, null);
    }
    async setupPayments() {
        return await (await this.sendAdminRequest("/internal/payments/setup", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async getStripeAccountInfo() {
        const response = await this.sendAdminRequestAndCatchKnownError("/internal/payments/stripe/account-info", {}, null, [
            ___known_errors_js.KnownErrors.StripeAccountInfoNotFound
        ]);
        if (response.status === "error") return null;
        return await response.data.json();
    }
    async getPaymentMethodConfigs() {
        const response = await this.sendAdminRequestAndCatchKnownError("/internal/payments/method-configs", {
            method: "GET"
        }, null, [
            ___known_errors_js.KnownErrors.StripeAccountInfoNotFound
        ]);
        if (response.status === "error") return null;
        const data = await response.data.json();
        return {
            configId: data.config_id,
            methods: data.methods
        };
    }
    async updatePaymentMethodConfigs(configId, updates) {
        await this.sendAdminRequest("/internal/payments/method-configs", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                config_id: configId,
                updates
            })
        }, null);
    }
    async createStripeWidgetAccountSession() {
        return await (await this.sendAdminRequest("/internal/payments/stripe-widgets/account-session", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async listTransactions(params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        if (params?.type) qs.set("type", params.type);
        if (params?.customerType) qs.set("customer_type", params.customerType);
        if (params?.customerId) qs.set("customer_id", params.customerId);
        const json = await (await this.sendAdminRequest(`/internal/payments/transactions${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
        return {
            transactions: json.transactions,
            nextCursor: json.next_cursor
        };
    }
    async refundTransaction(options) {
        const json = await (await this.sendAdminRequest("/internal/payments/transactions/refund", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                type: options.type,
                id: options.id,
                ...options.invoiceId !== void 0 ? {
                    invoice_id: options.invoiceId
                } : {},
                amount_usd: options.amountUsd,
                ...options.endAction !== void 0 ? {
                    end_action: options.endAction
                } : {}
            })
        }, null)).json();
        return {
            success: json.success,
            refundTransactionId: json.refund_transaction_id
        };
    }
    async previewAffectedUsersByOnboardingChange(onboarding, limit) {
        return await (await this.sendAdminRequest(`/internal/onboarding/preview-affected-users${limit ? `?limit=${limit}` : ""}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                onboarding
            })
        }, null)).json();
    }
    async listOutboxEmails(options) {
        const qs = new URLSearchParams();
        if (options?.status) qs.set("status", options.status);
        if (options?.simple_status) qs.set("simple_status", options.simple_status);
        if (options?.user_id) qs.set("user_id", options.user_id);
        if (options?.limit !== void 0) qs.set("limit", options.limit.toString());
        if (options?.cursor) qs.set("cursor", options.cursor);
        return await (await this.sendServerRequest(`/emails/outbox${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getOutboxEmail(id) {
        return await (await this.sendServerRequest(`/emails/outbox/${id}`, {
            method: "GET"
        }, null)).json();
    }
    async updateOutboxEmail(id, data) {
        return await (await this.sendServerRequest(`/emails/outbox/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listDeploymentServices() {
        return (await (await this.sendAdminRequest("/deployments/services", {
            method: "GET"
        }, null)).json()).items;
    }
    async listProjectSecrets() {
        return (await (await this.sendAdminRequest("/project-secrets", {
            method: "GET"
        }, null)).json()).items;
    }
    async setProjectSecret(key, value) {
        await this.sendAdminRequest("/project-secrets", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                key,
                value
            })
        }, null);
    }
    async deleteProjectSecret(key) {
        await this.sendAdminRequest(___utils_urls_js.urlString`/project-secrets/${key}`, {
            method: "DELETE"
        }, null);
    }
    async listDeployments(options) {
        return (await (await this.sendAdminRequest(`/deployments/deployments` + (options?.limit !== void 0 ? `?limit=${options.limit}` : ""), {
            method: "GET"
        }, null)).json()).items;
    }
    async getDeployment(deploymentId) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/deployments/deployments/${deploymentId}`, {
            method: "GET"
        }, null)).json();
    }
    async getDeploymentBuildLogs(deploymentId, options) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/deployments/deployments/${deploymentId}/logs`, {
            method: "GET",
            signal: options?.signal
        }, null)).text();
    }
    /**
	* Follows a service's runtime logs, calling `onLine` for each line as it arrives.
	*
	* The endpoint streams NDJSON and follows for a few minutes before closing, so
	* this resolves when the server stops following rather than when the service
	* stops running — there is no end to a runtime log. Resume by calling again
	* with the largest `at_millis` seen; omit it to start at the tail.
	*
	* Rejects if the stream ends in an error, AFTER delivering everything that
	* arrived before it: the lines already handed to `onLine` are real output and
	* the caller should keep them.
	*/ async getDeploymentServiceLogs(serviceId, options) {
        const params = new URLSearchParams();
        if (options.sinceMillis !== void 0) params.set("since_millis", String(options.sinceMillis));
        if (options.follow === false) params.set("follow", "false");
        const query = params.toString();
        const response = await this.sendAdminRequest(`${___utils_urls_js.urlString`/deployments/services/${serviceId}/logs`}${query === "" ? "" : `?${query}`}`, {
            method: "GET",
            signal: options.signal
        }, null);
        if (response.body === null) return;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        const stream = {
            error: null
        };
        const handleLine = (raw)=>{
            if (raw === "") return;
            let parsed;
            try {
                parsed = JSON.parse(raw);
            } catch  {
                return;
            }
            if (parsed === null || typeof parsed !== "object") return;
            const errorMessage = parsed._error;
            if (typeof errorMessage === "string") {
                stream.error = errorMessage;
                return;
            }
            if (typeof parsed.at_millis !== "number") return;
            options.onLine(parsed);
        };
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, {
                    stream: true
                });
                while(true){
                    const newlineIndex = buffer.indexOf("\n");
                    if (newlineIndex < 0) break;
                    handleLine(buffer.slice(0, newlineIndex));
                    buffer = buffer.slice(newlineIndex + 1);
                }
            }
            buffer += decoder.decode();
            handleLine(buffer);
        } finally{
            reader.releaseLock();
        }
        if (stream.error !== null) throw new Error(stream.error);
    }
    async addDeploymentServiceDomain(serviceId, hostname, options) {
        await this.sendAdminRequest(___utils_urls_js.urlString`/deployments/services/${serviceId}/domains`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hostname,
                ...options?.isPrimary ? {
                    is_primary: true
                } : {}
            })
        }, null);
    }
    async getDeploymentServiceDomain(serviceId, hostname) {
        return await (await this.sendAdminRequest(___utils_urls_js.urlString`/deployments/services/${serviceId}/domains/${hostname}`, {
            method: "GET"
        }, null)).json();
    }
    async deleteDeploymentServiceDomain(serviceId, hostname) {
        await this.sendAdminRequest(___utils_urls_js.urlString`/deployments/services/${serviceId}/domains/${hostname}`, {
            method: "DELETE"
        }, null);
    }
};
//#endregion
exports.HexclaveAdminInterface = HexclaveAdminInterface;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/client-interface.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let ___utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let ___utils_objects_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)");
let ___utils_strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let ___utils_oauth_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/oauth.js [app-client] (ecmascript)");
let ___utils_results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let ___utils_urls_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/urls.js [app-client] (ecmascript)");
let ___known_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)");
let ___sessions_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/sessions.js [app-client] (ecmascript)");
let ___utils_crypto_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/crypto.js [app-client] (ecmascript)");
let ___utils_globals_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/globals.js [app-client] (ecmascript)");
let ___utils_http_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/http.js [app-client] (ecmascript)");
let ___utils_promises_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)");
//#region ../../node_modules/.pnpm/oauth4webapi@3.8.5/node_modules/oauth4webapi/build/index.js
let USER_AGENT;
if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) USER_AGENT = `oauth4webapi/v3.8.5`;
function looseInstanceOf(input, expected) {
    if (input == null) return false;
    try {
        return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
    } catch  {
        return false;
    }
}
const ERR_INVALID_ARG_VALUE = "ERR_INVALID_ARG_VALUE";
const ERR_INVALID_ARG_TYPE = "ERR_INVALID_ARG_TYPE";
function CodedTypeError(message, code, cause) {
    const err = new TypeError(message, {
        cause
    });
    Object.assign(err, {
        code
    });
    return err;
}
const allowInsecureRequests = Symbol();
const clockSkew = Symbol();
const clockTolerance = Symbol();
const customFetch = Symbol();
const jweDecrypt = Symbol();
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function buf(input) {
    if (typeof input === "string") return encoder.encode(input);
    return decoder.decode(input);
}
let encodeBase64Url;
if (Uint8Array.prototype.toBase64) encodeBase64Url = (input)=>{
    if (input instanceof ArrayBuffer) input = new Uint8Array(input);
    return input.toBase64({
        alphabet: "base64url",
        omitPadding: true
    });
};
else {
    const CHUNK_SIZE = 32768;
    encodeBase64Url = (input)=>{
        if (input instanceof ArrayBuffer) input = new Uint8Array(input);
        const arr = [];
        for(let i = 0; i < input.byteLength; i += CHUNK_SIZE)arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
        return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
}
let decodeBase64Url;
if (Uint8Array.fromBase64) decodeBase64Url = (input)=>{
    try {
        return Uint8Array.fromBase64(input, {
            alphabet: "base64url"
        });
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
else decodeBase64Url = (input)=>{
    try {
        const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
        const bytes = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
        return bytes;
    } catch (cause) {
        throw CodedTypeError("The input to be decoded is not correctly encoded.", ERR_INVALID_ARG_VALUE, cause);
    }
};
function b64u(input) {
    if (typeof input === "string") return decodeBase64Url(input);
    return encodeBase64Url(input);
}
var UnsupportedOperationError = class extends Error {
    code;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = UNSUPPORTED_OPERATION;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var OperationProcessingError = class extends Error {
    code;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        if (options?.code) this.code = options?.code;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
function OPE(message, code, cause) {
    return new OperationProcessingError(message, {
        code,
        cause
    });
}
function isJsonObject(input) {
    if (input === null || typeof input !== "object" || Array.isArray(input)) return false;
    return true;
}
function prepareHeaders(input) {
    if (looseInstanceOf(input, Headers)) input = Object.fromEntries(input.entries());
    const headers = new Headers(input ?? {});
    if (USER_AGENT && !headers.has("user-agent")) headers.set("user-agent", USER_AGENT);
    if (headers.has("authorization")) throw CodedTypeError("\"options.headers\" must not include the \"authorization\" header name", ERR_INVALID_ARG_VALUE);
    return headers;
}
function signal(url, value) {
    if (value !== void 0) {
        if (typeof value === "function") value = value(url.href);
        if (!(value instanceof AbortSignal)) throw CodedTypeError("\"options.signal\" must return or be an instance of AbortSignal", ERR_INVALID_ARG_TYPE);
        return value;
    }
}
function assertNumber(input, allow0, it, code, cause) {
    try {
        if (typeof input !== "number" || !Number.isFinite(input)) throw CodedTypeError(`${it} must be a number`, ERR_INVALID_ARG_TYPE, cause);
        if (input > 0) return;
        if (allow0) {
            if (input !== 0) throw CodedTypeError(`${it} must be a non-negative number`, ERR_INVALID_ARG_VALUE, cause);
            return;
        }
        throw CodedTypeError(`${it} must be a positive number`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
        if (code) throw OPE(err.message, code, cause);
        throw err;
    }
}
function assertString(input, it, code, cause) {
    try {
        if (typeof input !== "string") throw CodedTypeError(`${it} must be a string`, ERR_INVALID_ARG_TYPE, cause);
        if (input.length === 0) throw CodedTypeError(`${it} must not be empty`, ERR_INVALID_ARG_VALUE, cause);
    } catch (err) {
        if (code) throw OPE(err.message, code, cause);
        throw err;
    }
}
function assertApplicationJson(response) {
    assertContentType(response, "application/json");
}
function notJson(response, ...types) {
    let msg = "\"response\" content-type must be ";
    if (types.length > 2) {
        const last = types.pop();
        msg += `${types.join(", ")}, or ${last}`;
    } else if (types.length === 2) msg += `${types[0]} or ${types[1]}`;
    else msg += types[0];
    return OPE(msg, RESPONSE_IS_NOT_JSON, response);
}
function assertContentType(response, contentType) {
    if (getContentType(response) !== contentType) throw notJson(response, contentType);
}
function getClockSkew(client) {
    const skew = client?.[clockSkew];
    return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
}
function getClockTolerance(client) {
    const tolerance = client?.[clockTolerance];
    return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
}
function epochTime() {
    return Math.floor(Date.now() / 1e3);
}
function assertAs(as) {
    if (typeof as !== "object" || as === null) throw CodedTypeError("\"as\" must be an object", ERR_INVALID_ARG_TYPE);
    assertString(as.issuer, "\"as.issuer\"");
}
function assertClient(client) {
    if (typeof client !== "object" || client === null) throw CodedTypeError("\"client\" must be an object", ERR_INVALID_ARG_TYPE);
    assertString(client.client_id, "\"client.client_id\"");
}
function ClientSecretPost(clientSecret) {
    assertString(clientSecret, "\"clientSecret\"");
    return (_as, client, body, _headers)=>{
        body.set("client_id", client.client_id);
        body.set("client_secret", clientSecret);
    };
}
const URLParse = URL.parse ? (url, base)=>URL.parse(url, base) : (url, base)=>{
    try {
        return new URL(url, base);
    } catch  {
        return null;
    }
};
function checkProtocol(url, enforceHttps) {
    if (enforceHttps && url.protocol !== "https:") throw OPE("only requests to HTTPS are allowed", HTTP_REQUEST_FORBIDDEN, url);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw OPE("only HTTP and HTTPS requests are allowed", REQUEST_PROTOCOL_FORBIDDEN, url);
}
function validateEndpoint(value, endpoint, useMtlsAlias, enforceHttps) {
    let url;
    if (typeof value !== "string" || !(url = URLParse(value))) throw OPE(`authorization server metadata does not contain a valid ${useMtlsAlias ? `"as.mtls_endpoint_aliases.${endpoint}"` : `"as.${endpoint}"`}`, value === void 0 ? MISSING_SERVER_METADATA : INVALID_SERVER_METADATA, {
        attribute: useMtlsAlias ? `mtls_endpoint_aliases.${endpoint}` : endpoint
    });
    checkProtocol(url, enforceHttps);
    return url;
}
function resolveEndpoint(as, endpoint, useMtlsAlias, enforceHttps) {
    if (useMtlsAlias && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias, enforceHttps);
    return validateEndpoint(as[endpoint], endpoint, useMtlsAlias, enforceHttps);
}
var ResponseBodyError = class extends Error {
    cause;
    code;
    error;
    status;
    error_description;
    response;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = RESPONSE_BODY_ERROR;
        this.cause = options.cause;
        this.error = options.cause.error;
        this.status = options.response.status;
        this.error_description = options.cause.error_description;
        Object.defineProperty(this, "response", {
            enumerable: false,
            value: options.response
        });
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var AuthorizationResponseError = class extends Error {
    cause;
    code;
    error;
    error_description;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = AUTHORIZATION_RESPONSE_ERROR;
        this.cause = options.cause;
        this.error = options.cause.get("error");
        this.error_description = options.cause.get("error_description") ?? void 0;
        Error.captureStackTrace?.(this, this.constructor);
    }
};
var WWWAuthenticateChallengeError = class extends Error {
    cause;
    code;
    response;
    status;
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        this.code = WWW_AUTHENTICATE_CHALLENGE;
        this.cause = options.cause;
        this.status = options.response.status;
        this.response = options.response;
        Object.defineProperty(this, "response", {
            enumerable: false
        });
        Error.captureStackTrace?.(this, this.constructor);
    }
};
const schemeRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)");
const quotedParamRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)\\s*=\\s*\"((?:[^\"\\\\]|\\\\[\\s\\S])*)\"[,\\s]*(.*)");
const unquotedParamRE = /* @__PURE__ */ new RegExp("^[,\\s]*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)\\s*=\\s*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)[,\\s]*(.*)");
const token68ParamRE = /* @__PURE__ */ new RegExp("^([a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2})(?:$|[,\\s])(.*)");
function parseWwwAuthenticateChallenges(response) {
    if (!looseInstanceOf(response, Response)) throw CodedTypeError("\"response\" must be an instance of Response", ERR_INVALID_ARG_TYPE);
    const header = response.headers.get("www-authenticate");
    if (header === null) return;
    const challenges = [];
    let rest = header;
    while(rest){
        let match = rest.match(schemeRE);
        const scheme = match?.["1"].toLowerCase();
        if (!scheme) return;
        const afterScheme = rest.substring(match[0].length);
        if (afterScheme && !afterScheme.match(/^[\s,]/)) return;
        const spaceMatch = afterScheme.match(/^\s+(.*)$/);
        const hasParameters = !!spaceMatch;
        rest = spaceMatch ? spaceMatch[1] : void 0;
        const parameters = {};
        let token68;
        if (hasParameters) while(rest){
            let key;
            let value;
            if (match = rest.match(quotedParamRE)) {
                [, key, value, rest] = match;
                if (value.includes("\\")) try {
                    value = JSON.parse(`"${value}"`);
                } catch  {}
                parameters[key.toLowerCase()] = value;
                continue;
            }
            if (match = rest.match(unquotedParamRE)) {
                [, key, value, rest] = match;
                parameters[key.toLowerCase()] = value;
                continue;
            }
            if (match = rest.match(token68ParamRE)) {
                if (Object.keys(parameters).length) break;
                [, token68, rest] = match;
                break;
            }
            return;
        }
        else rest = afterScheme || void 0;
        const challenge = {
            scheme,
            parameters
        };
        if (token68) challenge.token68 = token68;
        challenges.push(challenge);
    }
    if (!challenges.length) return;
    return challenges;
}
async function parseOAuthResponseErrorBody(response) {
    if (response.status > 399 && response.status < 500) {
        assertReadableResponse(response);
        assertApplicationJson(response);
        try {
            const json = await response.clone().json();
            if (isJsonObject(json) && typeof json.error === "string" && json.error.length) return json;
        } catch  {}
    }
}
async function checkOAuthBodyError(response, expected, label) {
    if (response.status !== expected) {
        checkAuthenticationChallenges(response);
        let err;
        if (err = await parseOAuthResponseErrorBody(response)) {
            await response.body?.cancel();
            throw new ResponseBodyError("server responded with an error in the response body", {
                cause: err,
                response
            });
        }
        throw OPE(`"response" is not a conform ${label} response (unexpected HTTP status code)`, RESPONSE_IS_NOT_CONFORM, response);
    }
}
function assertDPoP(option) {
    if (!branded.has(option)) throw CodedTypeError("\"options.DPoP\" is not a valid DPoPHandle", ERR_INVALID_ARG_VALUE);
}
function getContentType(input) {
    return input.headers.get("content-type")?.split(";")[0];
}
async function authenticatedRequest(as, client, clientAuthentication, url, body, headers, options) {
    await clientAuthentication(as, client, body, headers);
    headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    return (options?.[customFetch] || fetch)(url.href, {
        body,
        headers: Object.fromEntries(headers.entries()),
        method: "POST",
        redirect: "manual",
        signal: signal(url, options?.signal)
    });
}
async function tokenEndpointRequest(as, client, clientAuthentication, grantType, parameters, options) {
    const url = resolveEndpoint(as, "token_endpoint", client.use_mtls_endpoint_aliases, options?.[allowInsecureRequests] !== true);
    parameters.set("grant_type", grantType);
    const headers = prepareHeaders(options?.headers);
    headers.set("accept", "application/json");
    if (options?.DPoP !== void 0) {
        assertDPoP(options.DPoP);
        await options.DPoP.addProof(url, headers, "POST");
    }
    const response = await authenticatedRequest(as, client, clientAuthentication, url, parameters, headers, options);
    options?.DPoP?.cacheNonce(response, url);
    return response;
}
async function refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken, options) {
    assertAs(as);
    assertClient(client);
    assertString(refreshToken, "\"refreshToken\"");
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("refresh_token", refreshToken);
    return tokenEndpointRequest(as, client, clientAuthentication, "refresh_token", parameters, options);
}
const idTokenClaims = /* @__PURE__ */ new WeakMap();
const jwtRefs = /* @__PURE__ */ new WeakMap();
function getValidatedIdTokenClaims(ref) {
    if (!ref.id_token) return;
    const claims = idTokenClaims.get(ref);
    if (!claims) throw CodedTypeError("\"ref\" was already garbage collected or did not resolve from the proper sources", ERR_INVALID_ARG_VALUE);
    return claims;
}
async function processGenericAccessTokenResponse(as, client, response, additionalRequiredIdTokenClaims, decryptFn, recognizedTokenTypes) {
    assertAs(as);
    assertClient(client);
    if (!looseInstanceOf(response, Response)) throw CodedTypeError("\"response\" must be an instance of Response", ERR_INVALID_ARG_TYPE);
    await checkOAuthBodyError(response, 200, "Token Endpoint");
    assertReadableResponse(response);
    const json = await getResponseJsonBody(response);
    assertString(json.access_token, "\"response\" body \"access_token\" property", INVALID_RESPONSE, {
        body: json
    });
    assertString(json.token_type, "\"response\" body \"token_type\" property", INVALID_RESPONSE, {
        body: json
    });
    json.token_type = json.token_type.toLowerCase();
    if (json.expires_in !== void 0) {
        let expiresIn = typeof json.expires_in !== "number" ? parseFloat(json.expires_in) : json.expires_in;
        assertNumber(expiresIn, true, "\"response\" body \"expires_in\" property", INVALID_RESPONSE, {
            body: json
        });
        json.expires_in = expiresIn;
    }
    if (json.refresh_token !== void 0) assertString(json.refresh_token, "\"response\" body \"refresh_token\" property", INVALID_RESPONSE, {
        body: json
    });
    if (json.scope !== void 0 && typeof json.scope !== "string") throw OPE("\"response\" body \"scope\" property must be a string", INVALID_RESPONSE, {
        body: json
    });
    if (json.id_token !== void 0) {
        assertString(json.id_token, "\"response\" body \"id_token\" property", INVALID_RESPONSE, {
            body: json
        });
        const requiredClaims = [
            "aud",
            "exp",
            "iat",
            "iss",
            "sub"
        ];
        if (client.require_auth_time === true) requiredClaims.push("auth_time");
        if (client.default_max_age !== void 0) {
            assertNumber(client.default_max_age, true, "\"client.default_max_age\"");
            requiredClaims.push("auth_time");
        }
        if (additionalRequiredIdTokenClaims?.length) requiredClaims.push(...additionalRequiredIdTokenClaims);
        const { claims, jwt } = await validateJwt(json.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported, "RS256"), getClockSkew(client), getClockTolerance(client), decryptFn).then(validatePresence.bind(void 0, requiredClaims)).then(validateIssuer.bind(void 0, as)).then(validateAudience.bind(void 0, client.client_id));
        if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
            if (claims.azp === void 0) throw OPE("ID Token \"aud\" (audience) claim includes additional untrusted audiences", JWT_CLAIM_COMPARISON, {
                claims,
                claim: "aud"
            });
            if (claims.azp !== client.client_id) throw OPE("unexpected ID Token \"azp\" (authorized party) claim value", JWT_CLAIM_COMPARISON, {
                expected: client.client_id,
                claims,
                claim: "azp"
            });
        }
        if (claims.auth_time !== void 0) assertNumber(claims.auth_time, true, "ID Token \"auth_time\" (authentication time)", INVALID_RESPONSE, {
            claims
        });
        jwtRefs.set(response, jwt);
        idTokenClaims.set(json, claims);
    }
    if (recognizedTokenTypes?.[json.token_type] !== void 0) recognizedTokenTypes[json.token_type](response, json);
    else if (json.token_type !== "dpop" && json.token_type !== "bearer") throw new UnsupportedOperationError("unsupported `token_type` value", {
        cause: {
            body: json
        }
    });
    return json;
}
function checkAuthenticationChallenges(response) {
    let challenges;
    if (challenges = parseWwwAuthenticateChallenges(response)) throw new WWWAuthenticateChallengeError("server responded with a challenge in the WWW-Authenticate HTTP Header", {
        cause: challenges,
        response
    });
}
async function processRefreshTokenResponse(as, client, response, options) {
    return processGenericAccessTokenResponse(as, client, response, void 0, options?.[jweDecrypt], options?.recognizedTokenTypes);
}
function validateAudience(expected, result) {
    if (Array.isArray(result.claims.aud)) {
        if (!result.claims.aud.includes(expected)) throw OPE("unexpected JWT \"aud\" (audience) claim value", JWT_CLAIM_COMPARISON, {
            expected,
            claims: result.claims,
            claim: "aud"
        });
    } else if (result.claims.aud !== expected) throw OPE("unexpected JWT \"aud\" (audience) claim value", JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "aud"
    });
    return result;
}
function validateIssuer(as, result) {
    const expected = as[_expectedIssuer]?.(result) ?? as.issuer;
    if (result.claims.iss !== expected) throw OPE("unexpected JWT \"iss\" (issuer) claim value", JWT_CLAIM_COMPARISON, {
        expected,
        claims: result.claims,
        claim: "iss"
    });
    return result;
}
const branded = /* @__PURE__ */ new WeakSet();
function brand(searchParams) {
    branded.add(searchParams);
    return searchParams;
}
const nopkce = Symbol();
async function authorizationCodeGrantRequest(as, client, clientAuthentication, callbackParameters, redirectUri, codeVerifier, options) {
    assertAs(as);
    assertClient(client);
    if (!branded.has(callbackParameters)) throw CodedTypeError("\"callbackParameters\" must be an instance of URLSearchParams obtained from \"validateAuthResponse()\", or \"validateJwtAuthResponse()", ERR_INVALID_ARG_VALUE);
    assertString(redirectUri, "\"redirectUri\"");
    const code = getURLSearchParameter(callbackParameters, "code");
    if (!code) throw OPE("no authorization code in \"callbackParameters\"", INVALID_RESPONSE);
    const parameters = new URLSearchParams(options?.additionalParameters);
    parameters.set("redirect_uri", redirectUri);
    parameters.set("code", code);
    if (codeVerifier !== nopkce) {
        assertString(codeVerifier, "\"codeVerifier\"");
        parameters.set("code_verifier", codeVerifier);
    }
    return tokenEndpointRequest(as, client, clientAuthentication, "authorization_code", parameters, options);
}
const jwtClaimNames = {
    aud: "audience",
    c_hash: "code hash",
    client_id: "client id",
    exp: "expiration time",
    iat: "issued at",
    iss: "issuer",
    jti: "jwt id",
    nonce: "nonce",
    s_hash: "state hash",
    sub: "subject",
    ath: "access token hash",
    htm: "http method",
    htu: "http uri",
    cnf: "confirmation",
    auth_time: "authentication time"
};
function validatePresence(required, result) {
    for (const claim of required)if (result.claims[claim] === void 0) throw OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`, INVALID_RESPONSE, {
        claims: result.claims
    });
    return result;
}
const expectNoNonce = Symbol();
const skipAuthTimeCheck = Symbol();
async function processAuthorizationCodeResponse(as, client, response, options) {
    if (typeof options?.expectedNonce === "string" || typeof options?.maxAge === "number" || options?.requireIdToken) return processAuthorizationCodeOpenIDResponse(as, client, response, options.expectedNonce, options.maxAge, options[jweDecrypt], options.recognizedTokenTypes);
    return processAuthorizationCodeOAuth2Response(as, client, response, options?.[jweDecrypt], options?.recognizedTokenTypes);
}
async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge, decryptFn, recognizedTokenTypes) {
    const additionalRequiredClaims = [];
    switch(expectedNonce){
        case void 0:
            expectedNonce = expectNoNonce;
            break;
        case expectNoNonce:
            break;
        default:
            assertString(expectedNonce, "\"expectedNonce\" argument");
            additionalRequiredClaims.push("nonce");
    }
    maxAge ??= client.default_max_age;
    switch(maxAge){
        case void 0:
            maxAge = skipAuthTimeCheck;
            break;
        case skipAuthTimeCheck:
            break;
        default:
            assertNumber(maxAge, true, "\"maxAge\" argument");
            additionalRequiredClaims.push("auth_time");
    }
    const result = await processGenericAccessTokenResponse(as, client, response, additionalRequiredClaims, decryptFn, recognizedTokenTypes);
    assertString(result.id_token, "\"response\" body \"id_token\" property", INVALID_RESPONSE, {
        body: result
    });
    const claims = getValidatedIdTokenClaims(result);
    if (maxAge !== skipAuthTimeCheck) {
        const now = epochTime() + getClockSkew(client);
        const tolerance = getClockTolerance(client);
        if (claims.auth_time + maxAge < now - tolerance) throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance,
            claim: "auth_time"
        });
    }
    if (expectedNonce === expectNoNonce) {
        if (claims.nonce !== void 0) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
            expected: void 0,
            claims,
            claim: "nonce"
        });
    } else if (claims.nonce !== expectedNonce) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
        expected: expectedNonce,
        claims,
        claim: "nonce"
    });
    return result;
}
async function processAuthorizationCodeOAuth2Response(as, client, response, decryptFn, recognizedTokenTypes) {
    const result = await processGenericAccessTokenResponse(as, client, response, void 0, decryptFn, recognizedTokenTypes);
    const claims = getValidatedIdTokenClaims(result);
    if (claims) {
        if (client.default_max_age !== void 0) {
            assertNumber(client.default_max_age, true, "\"client.default_max_age\"");
            const now = epochTime() + getClockSkew(client);
            const tolerance = getClockTolerance(client);
            if (claims.auth_time + client.default_max_age < now - tolerance) throw OPE("too much time has elapsed since the last End-User authentication", JWT_TIMESTAMP_CHECK, {
                claims,
                now,
                tolerance,
                claim: "auth_time"
            });
        }
        if (claims.nonce !== void 0) throw OPE("unexpected ID Token \"nonce\" claim value", JWT_CLAIM_COMPARISON, {
            expected: void 0,
            claims,
            claim: "nonce"
        });
    }
    return result;
}
const WWW_AUTHENTICATE_CHALLENGE = "OAUTH_WWW_AUTHENTICATE_CHALLENGE";
const RESPONSE_BODY_ERROR = "OAUTH_RESPONSE_BODY_ERROR";
const UNSUPPORTED_OPERATION = "OAUTH_UNSUPPORTED_OPERATION";
const AUTHORIZATION_RESPONSE_ERROR = "OAUTH_AUTHORIZATION_RESPONSE_ERROR";
const PARSE_ERROR = "OAUTH_PARSE_ERROR";
const INVALID_RESPONSE = "OAUTH_INVALID_RESPONSE";
const RESPONSE_IS_NOT_JSON = "OAUTH_RESPONSE_IS_NOT_JSON";
const RESPONSE_IS_NOT_CONFORM = "OAUTH_RESPONSE_IS_NOT_CONFORM";
const HTTP_REQUEST_FORBIDDEN = "OAUTH_HTTP_REQUEST_FORBIDDEN";
const REQUEST_PROTOCOL_FORBIDDEN = "OAUTH_REQUEST_PROTOCOL_FORBIDDEN";
const JWT_TIMESTAMP_CHECK = "OAUTH_JWT_TIMESTAMP_CHECK_FAILED";
const JWT_CLAIM_COMPARISON = "OAUTH_JWT_CLAIM_COMPARISON_FAILED";
const MISSING_SERVER_METADATA = "OAUTH_MISSING_SERVER_METADATA";
const INVALID_SERVER_METADATA = "OAUTH_INVALID_SERVER_METADATA";
function assertReadableResponse(response) {
    if (response.bodyUsed) throw CodedTypeError("\"response\" body has been used already", ERR_INVALID_ARG_VALUE);
}
async function validateJwt(jws, checkAlg, clockSkew, clockTolerance, decryptJwt) {
    let { 0: protectedHeader, 1: payload, length } = jws.split(".");
    if (length === 5) if (decryptJwt !== void 0) {
        jws = await decryptJwt(jws);
        ({ 0: protectedHeader, 1: payload, length } = jws.split("."));
    } else throw new UnsupportedOperationError("JWE decryption is not configured", {
        cause: jws
    });
    if (length !== 3) throw OPE("Invalid JWT", INVALID_RESPONSE, jws);
    let header;
    try {
        header = JSON.parse(buf(b64u(protectedHeader)));
    } catch (cause) {
        throw OPE("failed to parse JWT Header body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(header)) throw OPE("JWT Header must be a top level object", INVALID_RESPONSE, jws);
    checkAlg(header);
    if (header.crit !== void 0) throw new UnsupportedOperationError("no JWT \"crit\" header parameter extensions are supported", {
        cause: {
            header
        }
    });
    let claims;
    try {
        claims = JSON.parse(buf(b64u(payload)));
    } catch (cause) {
        throw OPE("failed to parse JWT Payload body as base64url encoded JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(claims)) throw OPE("JWT Payload must be a top level object", INVALID_RESPONSE, jws);
    const now = epochTime() + clockSkew;
    if (claims.exp !== void 0) {
        if (typeof claims.exp !== "number") throw OPE("unexpected JWT \"exp\" (expiration time) claim type", INVALID_RESPONSE, {
            claims
        });
        if (claims.exp <= now - clockTolerance) throw OPE("unexpected JWT \"exp\" (expiration time) claim value, expiration is past current timestamp", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance: clockTolerance,
            claim: "exp"
        });
    }
    if (claims.iat !== void 0) {
        if (typeof claims.iat !== "number") throw OPE("unexpected JWT \"iat\" (issued at) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    if (claims.iss !== void 0) {
        if (typeof claims.iss !== "string") throw OPE("unexpected JWT \"iss\" (issuer) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    if (claims.nbf !== void 0) {
        if (typeof claims.nbf !== "number") throw OPE("unexpected JWT \"nbf\" (not before) claim type", INVALID_RESPONSE, {
            claims
        });
        if (claims.nbf > now + clockTolerance) throw OPE("unexpected JWT \"nbf\" (not before) claim value", JWT_TIMESTAMP_CHECK, {
            claims,
            now,
            tolerance: clockTolerance,
            claim: "nbf"
        });
    }
    if (claims.aud !== void 0) {
        if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) throw OPE("unexpected JWT \"aud\" (audience) claim type", INVALID_RESPONSE, {
            claims
        });
    }
    return {
        header,
        claims,
        jwt: jws
    };
}
function checkSigningAlgorithm(client, issuer, fallback, header) {
    if (client !== void 0) {
        if (typeof client === "string" ? header.alg !== client : !client.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: client,
            reason: "client configuration"
        });
        return;
    }
    if (Array.isArray(issuer)) {
        if (!issuer.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: issuer,
            reason: "authorization server metadata"
        });
        return;
    }
    if (fallback !== void 0) {
        if (typeof fallback === "string" ? header.alg !== fallback : typeof fallback === "function" ? !fallback(header.alg) : !fallback.includes(header.alg)) throw OPE("unexpected JWT \"alg\" header parameter", INVALID_RESPONSE, {
            header,
            expected: fallback,
            reason: "default value"
        });
        return;
    }
    throw OPE("missing client or server configuration to verify used JWT \"alg\" header parameter", void 0, {
        client,
        issuer,
        fallback
    });
}
function getURLSearchParameter(parameters, name) {
    const { 0: value, length } = parameters.getAll(name);
    if (length > 1) throw OPE(`"${name}" parameter must be provided only once`, INVALID_RESPONSE);
    return value;
}
const skipStateCheck = Symbol();
const expectNoState = Symbol();
function validateAuthResponse(as, client, parameters, expectedState) {
    assertAs(as);
    assertClient(client);
    if (parameters instanceof URL) parameters = parameters.searchParams;
    if (!(parameters instanceof URLSearchParams)) throw CodedTypeError("\"parameters\" must be an instance of URLSearchParams, or URL", ERR_INVALID_ARG_TYPE);
    if (getURLSearchParameter(parameters, "response")) throw OPE("\"parameters\" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()", INVALID_RESPONSE, {
        parameters
    });
    const iss = getURLSearchParameter(parameters, "iss");
    const state = getURLSearchParameter(parameters, "state");
    if (!iss && as.authorization_response_iss_parameter_supported) throw OPE("response parameter \"iss\" (issuer) missing", INVALID_RESPONSE, {
        parameters
    });
    if (iss && iss !== as.issuer) throw OPE("unexpected \"iss\" (issuer) response parameter value", INVALID_RESPONSE, {
        expected: as.issuer,
        parameters
    });
    switch(expectedState){
        case void 0:
        case expectNoState:
            if (state !== void 0) throw OPE("unexpected \"state\" response parameter encountered", INVALID_RESPONSE, {
                expected: void 0,
                parameters
            });
            break;
        case skipStateCheck:
            break;
        default:
            assertString(expectedState, "\"expectedState\" argument");
            if (state !== expectedState) throw OPE(state === void 0 ? "response parameter \"state\" missing" : "unexpected \"state\" response parameter value", INVALID_RESPONSE, {
                expected: expectedState,
                parameters
            });
    }
    if (getURLSearchParameter(parameters, "error")) throw new AuthorizationResponseError("authorization response from the server is an error", {
        cause: parameters
    });
    const id_token = getURLSearchParameter(parameters, "id_token");
    const token = getURLSearchParameter(parameters, "token");
    if (id_token !== void 0 || token !== void 0) throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
    return brand(new URLSearchParams(parameters));
}
async function getResponseJsonBody(response, check = assertApplicationJson) {
    let json;
    try {
        json = await response.json();
    } catch (cause) {
        check(response);
        throw OPE("failed to parse \"response\" body as JSON", PARSE_ERROR, cause);
    }
    if (!isJsonObject(json)) throw OPE("\"response\" body must be a top level object", INVALID_RESPONSE, {
        body: json
    });
    return json;
}
const _expectedIssuer = Symbol();
//#endregion
//#region src/interface/client-interface.ts
var ApiUrlsFailedError = class extends AggregateError {
    constructor(urlFailures){
        const primaryFailure = urlFailures[0] ?? (0, ___utils_errors_js.throwErr)("ApiUrlsFailedError requires at least one URL failure");
        super(urlFailures.map(({ error })=>error), `All API URLs failed; primary URL ${primaryFailure.url} failed: ${primaryFailure.error.message}`, {
            cause: primaryFailure.error
        });
        this.name = "ApiUrlsFailedError";
        this.urlFailures = urlFailures;
        if ("digest" in primaryFailure.error) Object.defineProperty(this, "digest", {
            value: primaryFailure.error.digest,
            enumerable: true
        });
    }
};
const botChallengeKnownErrors = [
    ___known_errors_js.KnownErrors.BotChallengeRequired,
    ___known_errors_js.KnownErrors.BotChallengeFailed
];
function isBotChallengeKnownError(error) {
    return ___known_errors_js.KnownErrors.BotChallengeRequired.isInstance(error) || ___known_errors_js.KnownErrors.BotChallengeFailed.isInstance(error);
}
function getBotChallengeRequestFields(botChallenge, context) {
    if (botChallenge?.unavailable) {
        if (botChallenge.token != null || botChallenge.phase != null) throw new ___utils_errors_js.HexclaveAssertionError(`${context} bot challenge unavailability cannot be combined with a token or phase.`);
        return {
            bot_challenge_unavailable: "true"
        };
    }
    const challengeToken = botChallenge?.token?.trim() || void 0;
    if (botChallenge?.phase === "visible") {
        if (challengeToken == null) return {
            bot_challenge_unavailable: "true"
        };
        return {
            bot_challenge_token: challengeToken,
            bot_challenge_phase: "visible"
        };
    }
    if (challengeToken == null) {
        if (botChallenge?.phase != null) throw new ___utils_errors_js.HexclaveAssertionError(`${context} bot challenge phase options require a token.`);
        return {};
    }
    if (botChallenge?.phase == null) return {
        bot_challenge_token: challengeToken
    };
    return {
        bot_challenge_token: challengeToken,
        bot_challenge_phase: "invisible"
    };
}
async function encodeGzipJsonBody(jsonBody, options) {
    if (options.keepalive) return {
        body: jsonBody,
        contentType: "application/json"
    };
    const CompressionStreamCtor = ___utils_globals_js.globalVar.CompressionStream;
    if (typeof CompressionStreamCtor !== "function" || typeof Blob === "undefined" || typeof Response === "undefined") return {
        body: jsonBody,
        contentType: "application/json"
    };
    try {
        const stream = new Blob([
            jsonBody
        ]).stream().pipeThrough(new CompressionStreamCtor("gzip"));
        const buffer = await new Response(stream).arrayBuffer();
        return {
            body: new Uint8Array(buffer),
            contentType: "application/octet-stream"
        };
    } catch  {
        return {
            body: jsonBody,
            contentType: "application/json"
        };
    }
}
var HexclaveClientInterface = class {
    constructor(options){
        this.options = options;
        this._requestListeners = /* @__PURE__ */ new Set();
        this._currentTargetApiUrl = null;
    }
    addRequestListener(listener) {
        this._requestListeners.add(listener);
        return ()=>{
            this._requestListeners.delete(listener);
        };
    }
    get projectId() {
        return this.options.projectId;
    }
    getApiUrl() {
        return this.options.getBaseUrl() + "/api/v1";
    }
    getApiUrls() {
        return this.options.getApiUrls().map((u)=>u + "/api/v1");
    }
    /**
	* Returns the current target API URL for browser-navigated URLs (e.g. OAuth
	* authorize) where `_withFallback` can't iterate hosts. Falls back to the
	* primary if the remembered URL is no longer in the list.
	*/ getCurrentTargetApiUrl() {
        const apiUrls = this.getApiUrls();
        if (this._currentTargetApiUrl != null && apiUrls.includes(this._currentTargetApiUrl)) return this._currentTargetApiUrl;
        return apiUrls[0];
    }
    /**
	* @deprecated Use {@link getCurrentTargetApiUrl} instead.
	*/ getBestApiUrl() {
        return this.getCurrentTargetApiUrl();
    }
    /**
	* Routes a request through an ordered URL ring with automatic failover.
	*
	* Starts at `_currentTargetApiUrl` (or primary if unset). On an outage-like
	* failure, walks `(start + k) % n` for two full laps. On success, remembers
	* that URL as the new current target. KnownErrors and smart-wrapped 4xx
	* responses are never retried on another host (application-level errors).
	*
	* Single-URL lists skip the ring and use 5-retry behavior directly.
	*/ async _withFallback(cb) {
        const apiUrls = this.getApiUrls();
        if (apiUrls.length <= 1) return await cb(apiUrls[0], {
            maxAttempts: 5,
            skipDiagnostics: false
        });
        const start = Math.max(0, this._currentTargetApiUrl != null ? apiUrls.indexOf(this._currentTargetApiUrl) : 0);
        const errorsByUrl = /* @__PURE__ */ new Map();
        for(let k = 0; k < apiUrls.length * 2; k++){
            const i = (start + k) % apiUrls.length;
            try {
                const result = await cb(apiUrls[i], {
                    maxAttempts: 1,
                    skipDiagnostics: true
                });
                this._currentTargetApiUrl = apiUrls[i];
                return result;
            } catch (e) {
                if (this._shouldSkipFallback(e)) {
                    this._currentTargetApiUrl = apiUrls[i];
                    throw e;
                }
                errorsByUrl.set(i, e instanceof Error ? e : new Error(String(e)));
            }
        }
        throw new ApiUrlsFailedError(apiUrls.map((url, i)=>({
                url,
                error: errorsByUrl.get(i) ?? (0, ___utils_errors_js.throwErr)(`Missing failure for API URL ${url}`)
            })));
    }
    /**
	* Returns true when the error is an application-level response that should
	* not hop to another host. Outages (network TypeError, 5xx, non-smart 4xx)
	* return false so the ring walk continues.
	*/ _shouldSkipFallback(error) {
        if (error instanceof ___known_errors_js.KnownError) return true;
        const response = this._getApiResponseFromError(error);
        if (response == null) return false;
        if (response.status >= 500) return false;
        if (response.status >= 400 && response.status < 500) return this._isSmartWrappedResponse(response);
        return false;
    }
    _isSmartWrappedResponse(response) {
        return response.headers.has("x-hexclave-request-id") || response.headers.has("x-stack-request-id") || response.headers.has("x-hexclave-known-error") || response.headers.has("x-stack-known-error");
    }
    _getApiResponseFromError(error, seenErrors = /* @__PURE__ */ new Set()) {
        if (error instanceof Response) return error;
        if (!(error instanceof Error) || seenErrors.has(error)) return null;
        seenErrors.add(error);
        return this._getApiResponseFromError(error.cause, seenErrors);
    }
    getAnalyticsApiUrl() {
        return (this.options.getAnalyticsBaseUrl ?? this.options.getBaseUrl)() + "/api/v1";
    }
    async runNetworkDiagnostics(session, requestType) {
        if (this.pendingNetworkDiagnostics) return await this.pendingNetworkDiagnostics;
        this.pendingNetworkDiagnostics = this._runNetworkDiagnosticsInner(session, requestType);
        try {
            return await this.pendingNetworkDiagnostics;
        } finally{
            this.pendingNetworkDiagnostics = void 0;
        }
    }
    async _runNetworkDiagnosticsInner(session, requestType) {
        const tryRequest = async (cb)=>{
            try {
                await cb();
                return "OK";
            } catch (e) {
                return `${e}`;
            }
        };
        const cfTrace = await tryRequest(async ()=>{
            const res = await fetch("https://1.1.1.1/cdn-cgi/trace");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const baseUrlBackend = await tryRequest(async ()=>{
            const res = await fetch(new URL("/health", this.getApiUrl()));
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const prodDashboard = await tryRequest(async ()=>{
            const res = await fetch("https://app.hexclave.com/health");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        const prodBackend = await tryRequest(async ()=>{
            const res = await fetch("https://api.hexclave.com/health");
            if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${await res.text()}`);
        });
        return {
            "navigator?.onLine": ___utils_globals_js.globalVar.navigator?.onLine,
            cfTrace,
            baseUrlBackend,
            prodDashboard,
            prodBackend
        };
    }
    async _createNetworkError(cause, session, requestType) {
        return new Error(___utils_strings_js.deindent`
      Hexclave is unable to connect to the server. Please check your internet connection and try again.

      If the problem persists, please contact support and provide a screenshot of your entire browser console.

      ${cause}

      ${JSON.stringify(await this.runNetworkDiagnostics(session, requestType), null, 2)}
    `, {
            cause
        });
    }
    async _networkRetry(cb, session, requestType, options) {
        const retriedResult = await ___utils_results_js.Result.retry(cb, options?.maxAttempts ?? 5, {
            exponentialDelayBase: 1e3
        });
        if (retriedResult.status === "error") {
            if (___utils_globals_js.globalVar.navigator && ___utils_globals_js.globalVar.navigator.onLine === false) throw new Error("You are offline. Please check your internet connection and try again. (window.navigator.onLine is false)", {
                cause: retriedResult.error
            });
            if (options?.skipDiagnostics) throw retriedResult.error;
            throw await this._createNetworkError(retriedResult.error, session, requestType);
        }
        return retriedResult.data;
    }
    async _networkRetryException(cb, session, requestType, options) {
        return await this._networkRetry(async ()=>await ___utils_results_js.Result.fromThrowingAsync(cb), session, requestType, options);
    }
    async fetchNewAccessToken(refreshToken) {
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for fetching new access token. Did you try to log in on a StackApp initiated with the admin session?");
        const clientSecret = this.options.publishableClientKey ?? ___utils_oauth_js.publishableClientKeyNotNecessarySentinel;
        return await this._withFallback(async (apiUrl, retryOptions)=>{
            return await this._fetchNewAccessTokenInner(refreshToken, clientSecret, apiUrl, retryOptions);
        });
    }
    async _fetchNewAccessTokenInner(refreshToken, clientSecret, apiUrl, retryOptions) {
        const tokenEndpoint = apiUrl + "/auth/oauth/token";
        const as = {
            issuer: this.options.getBaseUrl(),
            algorithm: "oauth2",
            token_endpoint: tokenEndpoint
        };
        const client = {
            client_id: this.projectId,
            client_secret: clientSecret
        };
        const clientAuthentication = ClientSecretPost(clientSecret);
        const allowInsecure = tokenEndpoint.startsWith("http://");
        const response = await this._networkRetryException(async ()=>{
            const rawResponse = await refreshTokenGrantRequest(as, client, clientAuthentication, refreshToken.token, {
                ...allowInsecure ? {
                    [allowInsecureRequests]: true
                } : {},
                [customFetch]: (url, options)=>fetch(url, {
                        ...options,
                        headers: {
                            ...options.headers,
                            "X-Hexclave-Random-Nonce": (0, ___utils_crypto_js.generateSecureRandomString)()
                        },
                        ..."WebSocketPair" in ___utils_globals_js.globalVar ? {} : {
                            cache: "no-store"
                        }
                    })
            });
            const response = await this._processResponse(rawResponse);
            if (response.status === "error") {
                const error = response.error;
                if (___known_errors_js.KnownErrors.RefreshTokenError.isInstance(error)) return null;
                throw error;
            }
            if (!response.data.ok) {
                const body = await response.data.text();
                throw new Error(`Failed to send refresh token request: ${response.status} ${body}`, {
                    cause: response.data
                });
            }
            return response.data;
        }, void 0, void 0, retryOptions);
        if (!response) return null;
        let result;
        try {
            result = await processRefreshTokenResponse(as, client, response);
        } catch (e) {
            if (e instanceof ResponseBodyError) throw new ___utils_errors_js.HexclaveAssertionError("ResponseBodyError when processing refresh token response", {
                cause: e.cause,
                code: e.code,
                error: e.error
            });
            throw new ___utils_errors_js.HexclaveAssertionError("Unexpected error when processing refresh token response", {
                cause: e
            });
        }
        if (!result.access_token) throw new ___utils_errors_js.HexclaveAssertionError("Access token not found in token endpoint response, this is weird!");
        return ___sessions_js.AccessToken.createIfValid(result.access_token) ?? (0, ___utils_errors_js.throwErr)("Access token in fetchNewAccessToken is invalid, looks like the backend is returning an invalid token!", {
            result
        });
    }
    async sendClientRequest(path, requestOptions, session, requestType = "client", apiUrlOverride, retryOptions) {
        session ??= this.createSession({
            refreshToken: null
        });
        if (apiUrlOverride) return await this._networkRetry(()=>this.sendClientRequestInner(path, requestOptions, session, requestType, apiUrlOverride, retryOptions), session, requestType, retryOptions);
        return await this._withFallback(async (apiUrl, fallbackRetryOptions)=>{
            return await this._networkRetry(()=>this.sendClientRequestInner(path, requestOptions, session, requestType, apiUrl, retryOptions), session, requestType, {
                ...fallbackRetryOptions,
                ...retryOptions
            });
        });
    }
    createSession(options) {
        return new ___sessions_js.InternalSession({
            refreshAccessTokenCallback: async (refreshToken)=>await this.fetchNewAccessToken(refreshToken),
            ...options
        });
    }
    async sendSessionReplayBatch(body, session, options) {
        try {
            const encoded = await encodeGzipJsonBody(body, {
                keepalive: options.keepalive
            });
            const response = await this.sendClientRequest("/session-replays/batch", {
                method: "POST",
                headers: {
                    "Content-Type": encoded.contentType
                },
                body: encoded.body,
                keepalive: options.keepalive
            }, session, "client", this.getAnalyticsApiUrl(), {
                maxAttempts: 1,
                skipDiagnostics: true
            });
            return ___utils_results_js.Result.ok(response);
        } catch (e) {
            return ___utils_results_js.Result.error(e instanceof Error ? e : new Error(String(e)));
        }
    }
    async sendAnalyticsEventBatch(body, session, options) {
        try {
            const encoded = await encodeGzipJsonBody(body, {
                keepalive: options.keepalive
            });
            const response = await this.sendClientRequest("/analytics/events/batch", {
                method: "POST",
                headers: {
                    "Content-Type": encoded.contentType
                },
                body: encoded.body,
                keepalive: options.keepalive
            }, session, "client", this.getAnalyticsApiUrl(), {
                maxAttempts: 1,
                skipDiagnostics: true
            });
            return ___utils_results_js.Result.ok(response);
        } catch (e) {
            return ___utils_results_js.Result.error(e instanceof Error ? e : new Error(String(e)));
        }
    }
    async sendClientRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return ___utils_results_js.Result.ok(await this.sendClientRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return ___utils_results_js.Result.error(e);
            throw e;
        }
    }
    async sendClientRequestInner(path, options, session, requestType, apiUrlOverride, innerOptions) {
        /**
		* `tokenObj === null` means the session is invalid/not logged in
		*/ let tokenObj = await session.getOrFetchLikelyValidTokens(2e4, null);
        let adminSession = null;
        let adminTokenObj = null;
        if ("projectOwnerSession" in this.options) {
            const projectOwnerSession = this.options.projectOwnerSession;
            if (typeof projectOwnerSession === "function") {
                const accessTokenString = await projectOwnerSession();
                if (accessTokenString) {
                    const accessToken = ___sessions_js.AccessToken.createIfValid(accessTokenString);
                    if (accessToken) adminTokenObj = {
                        accessToken,
                        refreshToken: null
                    };
                }
            } else {
                adminSession = projectOwnerSession;
                adminTokenObj = await projectOwnerSession.getOrFetchLikelyValidTokens(2e4, null);
            }
        }
        await this.options.prepareRequest?.();
        let url = (apiUrlOverride ?? this.getApiUrl()) + path;
        if (url.endsWith("/")) url = url.slice(0, -1);
        const params = {
            /**
			* This fetch may be cross-origin, in which case we don't want to send cookies of the
			* original origin (this is the default behavior of `credentials`).
			*
			* To help debugging, also omit cookies on same-origin, so we don't accidentally
			* implement reliance on cookies anywhere.
			*
			* However, Cloudflare Workers don't actually support `credentials`, so we only set it
			* if Cloudflare-exclusive globals are not detected. https://github.com/cloudflare/workers-sdk/issues/2514
			*/ ..."WebSocketPair" in ___utils_globals_js.globalVar ? {} : {
                credentials: "omit"
            },
            ...options,
            headers: {
                "X-Hexclave-Override-Error-Status": "true",
                "X-Hexclave-Project-Id": this.projectId,
                "X-Hexclave-Access-Type": requestType,
                "X-Hexclave-Client-Version": this.options.clientVersion,
                ...tokenObj ? {
                    "X-Hexclave-Access-Token": tokenObj.accessToken.token
                } : {},
                ...tokenObj?.refreshToken ? {
                    "X-Hexclave-Refresh-Token": tokenObj.refreshToken.token
                } : {},
                "X-Hexclave-Allow-Anonymous-User": "true",
                ..."publishableClientKey" in this.options && this.options.publishableClientKey ? {
                    "X-Hexclave-Publishable-Client-Key": this.options.publishableClientKey
                } : {},
                ...adminTokenObj ? {
                    "X-Hexclave-Admin-Access-Token": adminTokenObj.accessToken.token
                } : {},
                /**
				* Next.js until v15 would cache fetch requests by default, and forcefully disabling it was nearly impossible.
				*
				* This header is used to change the cache key and hence always disable it, because we do our own caching.
				*
				* When we drop support for Next.js <15, we may be able to remove this header, but please make sure that this is
				* the case (I haven't actually tested.)
				*/ "X-Hexclave-Random-Nonce": (0, ___utils_crypto_js.generateSecureRandomString)(),
                "ngrok-skip-browser-warning": "true",
                ...this.options.extraRequestHeaders,
                ...options.headers
            },
            /**
			* Cloudflare Workers does not support cache, so don't pass it there
			*/ ..."WebSocketPair" in ___utils_globals_js.globalVar ? {} : {
                cache: "no-store"
            }
        };
        const startTime = performance.now();
        let rawRes;
        try {
            rawRes = await fetch(url, params);
        } catch (e) {
            if (this._requestListeners.size > 0) {
                const entry = {
                    path,
                    method: (params.method ?? "GET").toUpperCase(),
                    duration: Math.round(performance.now() - startTime),
                    error: e instanceof Error ? e.message : "Network error"
                };
                this._requestListeners.forEach((l)=>l(entry));
            }
            if (e instanceof TypeError) if (___utils_http_js.HTTP_METHODS[params.method ?? "GET"].idempotent) return ___utils_results_js.Result.error(e);
            else if (innerOptions?.skipDiagnostics) throw e;
            else throw await this._createNetworkError(e, session, requestType);
            throw e;
        }
        const preprocessedRes = await this._preprocessResponse(rawRes);
        if (this._requestListeners.size > 0) {
            const entry = {
                path,
                method: (params.method ?? "GET").toUpperCase(),
                status: preprocessedRes.status,
                duration: Math.round(performance.now() - startTime)
            };
            this._requestListeners.forEach((l)=>l(entry));
        }
        const processedRes = await this._processResponse(preprocessedRes);
        if (processedRes.status === "error") {
            if (___known_errors_js.KnownErrors.InvalidAccessToken.isInstance(processedRes.error)) {
                if (!tokenObj) throw new ___utils_errors_js.HexclaveAssertionError("Received invalid access token, but session is not logged in", {
                    tokenObj,
                    processedRes
                });
                session.markAccessTokenExpired(tokenObj.accessToken);
                return ___utils_results_js.Result.error(processedRes.error);
            }
            if (adminSession && (___known_errors_js.KnownErrors.InvalidAdminAccessToken.isInstance(processedRes.error) || ___known_errors_js.KnownErrors.ApiKeyNotFound.isInstance(processedRes.error))) {
                if (!adminTokenObj) throw new ___utils_errors_js.HexclaveAssertionError("Received invalid admin access token, but admin session is not logged in", {
                    adminTokenObj,
                    processedRes
                });
                adminSession.markAccessTokenExpired(adminTokenObj.accessToken);
                return ___utils_results_js.Result.error(processedRes.error);
            }
            throw processedRes.error;
        }
        const res = Object.assign(processedRes.data, {
            usedTokens: tokenObj
        });
        if (res.ok) return ___utils_results_js.Result.ok(res);
        else if (res.status === 429) {
            const retryAfter = res.headers.get("Retry-After");
            if (retryAfter !== null) {
                console.log(`Rate limited while sending request to ${url}. Will retry after ${retryAfter} seconds...`);
                await (0, ___utils_promises_js.wait)(Number(retryAfter) * 1e3);
                return ___utils_results_js.Result.error(/* @__PURE__ */ new Error(`Rate limited, retrying after ${retryAfter} seconds`));
            }
            console.log(`Rate limited while sending request to ${url}, no retry-after header received. Retrying with default backoff...`);
            return ___utils_results_js.Result.error(/* @__PURE__ */ new Error("Rate limited, no retry-after header received"));
        } else {
            const error = await res.text();
            if (res.status >= 400 && res.status < 500) throw new Error(`Failed to send request to ${url}: ${res.status} ${error}`, {
                cause: res
            });
            const errorObj = new ___utils_errors_js.HexclaveAssertionError(`Failed to send request to ${url}: ${res.status} ${error}`, {
                request: params,
                res,
                path
            });
            if (res.status === 508 && error.includes("INFINITE_LOOP_DETECTED")) return ___utils_results_js.Result.error(errorObj);
            throw errorObj;
        }
    }
    async _preprocessResponse(rawRes) {
        let res = rawRes;
        if (rawRes.headers.has("x-hexclave-actual-status") || rawRes.headers.has("x-stack-actual-status")) {
            const actualStatus = Number(rawRes.headers.get("x-hexclave-actual-status") ?? rawRes.headers.get("x-stack-actual-status"));
            res = new Response(rawRes.body, {
                status: actualStatus,
                statusText: rawRes.statusText,
                headers: rawRes.headers
            });
        }
        return res;
    }
    async _processResponse(res) {
        if (res.headers.has("x-hexclave-known-error") || res.headers.has("x-stack-known-error")) {
            const errorJson = await res.json();
            if ((res.headers.get("x-hexclave-known-error") ?? res.headers.get("x-stack-known-error")) !== errorJson.code) throw new ___utils_errors_js.HexclaveAssertionError("Mismatch between x-hexclave-known-error/x-stack-known-error header and error code in body; the server's response is invalid");
            const error = ___known_errors_js.KnownError.fromJson(errorJson);
            return ___utils_results_js.Result.error(error);
        }
        return ___utils_results_js.Result.ok(res);
    }
    async checkFeatureSupport(options) {
        throw new ___utils_errors_js.HexclaveAssertionError(await (await this.sendClientRequest("/check-feature-support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, null)).text());
    }
    async consumeBrowserAction(actionId, session = null) {
        const body = await (await this.sendClientRequest("/browser-actions/consume", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action_id: actionId
            })
        }, session, "client")).json();
        if (typeof body !== "object" || body === null || !("javascript" in body) || typeof body.javascript !== "string") throw new ___utils_errors_js.HexclaveAssertionError("Browser action endpoint returned an invalid response");
        return {
            javascript: body.javascript
        };
    }
    async sendForgotPasswordEmail(email, callbackUrl) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/send-reset-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, null, [
            ___known_errors_js.KnownErrors.UserNotFound
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(void 0);
    }
    async sendVerificationEmail(email, callbackUrl, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/contact-channels/send-verification-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl
            })
        }, session, [
            ___known_errors_js.KnownErrors.EmailAlreadyVerified
        ]);
        if (res.status === "error") return res.error;
    }
    async sendMagicLinkEmail(email, callbackUrl, botChallenge) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/otp/send-sign-in-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                callback_url: callbackUrl,
                ...getBotChallengeRequestFields(botChallenge, "Magic link sign-in")
            })
        }, null, [
            ___known_errors_js.KnownErrors.RedirectUrlNotWhitelisted,
            ...botChallengeKnownErrors
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(await res.data.json());
    }
    async resetPassword(options) {
        const res = await this.sendClientRequestAndCatchKnownError("onlyVerifyCode" in options ? "/auth/password/reset/check-code" : "/auth/password/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: options.code,
                ..."password" in options ? {
                    password: options.password
                } : {}
            })
        }, null, [
            ___known_errors_js.KnownErrors.VerificationCodeError
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(void 0);
    }
    async updatePassword(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                old_password: options.oldPassword,
                new_password: options.newPassword
            })
        }, session, [
            ___known_errors_js.KnownErrors.PasswordConfirmationMismatch,
            ___known_errors_js.KnownErrors.PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async setPassword(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/set", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, [
            ___known_errors_js.KnownErrors.PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async verifyPasswordResetCode(code) {
        const res = await this.resetPassword({
            code,
            onlyVerifyCode: true
        });
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(void 0);
    }
    async verifyEmail(code) {
        const res = await this.sendClientRequestAndCatchKnownError("/contact-channels/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code
            })
        }, null, [
            ___known_errors_js.KnownErrors.VerificationCodeError
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(void 0);
    }
    async initiatePasskeyRegistration(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, []);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        return ___utils_results_js.Result.ok(await res.data.json());
    }
    async registerPasskey(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, [
            ___known_errors_js.KnownErrors.PasskeyRegistrationFailed
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        return ___utils_results_js.Result.ok(void 0);
    }
    async initiatePasskeyAuthentication(options, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-authentication", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }, session, []);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        return ___utils_results_js.Result.ok(await res.data.json());
    }
    async sendTeamInvitation(options) {
        await this.sendClientRequest("/team-invitations/send-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: options.email,
                team_id: options.teamId,
                callback_url: options.callbackUrl
            })
        }, options.session);
    }
    async acceptTeamInvitation(options) {
        const res = await this.sendClientRequestAndCatchKnownError(options.type === "check" ? "/team-invitations/accept/check-code" : options.type === "details" ? "/team-invitations/accept/details" : "/team-invitations/accept", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: options.code
            })
        }, options.session, [
            ___known_errors_js.KnownErrors.VerificationCodeError,
            ___known_errors_js.KnownErrors.TeamInvitationEmailMismatch
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        else return ___utils_results_js.Result.ok(await res.data.json());
    }
    async totpMfa(attemptCode, totp, session) {
        const result = await (await this.sendClientRequest("/auth/mfa/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: attemptCode,
                type: "totp",
                totp
            })
        }, session)).json();
        return {
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        };
    }
    async signInWithCredential(email, password, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }, session, [
            ___known_errors_js.KnownErrors.EmailPasswordMismatch
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signUpWithCredential(email, password, emailVerificationRedirectUrl, session, botChallenge) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/password/sign-up", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                verification_callback_url: emailVerificationRedirectUrl,
                ...getBotChallengeRequestFields(botChallenge, "Credential sign-up")
            })
        }, session, [
            ___known_errors_js.KnownErrors.UserWithEmailAlreadyExists,
            ___known_errors_js.KnownErrors.ContactChannelAlreadyUsedForAuthBySomeoneElse,
            ___known_errors_js.KnownErrors.PasswordRequirementsNotMet,
            ...botChallengeKnownErrors
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signUpAnonymously(session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/anonymous/sign-up", {
            method: "POST"
        }, session, []);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async signInWithMagicLink(code, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/otp/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code
            })
        }, session, [
            ___known_errors_js.KnownErrors.VerificationCodeError
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        });
    }
    async signInWithMfa(totp, code, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/mfa/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "totp",
                totp,
                code
            })
        }, session, [
            ___known_errors_js.KnownErrors.VerificationCodeError
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token,
            newUser: result.is_new_user
        });
    }
    async signInWithPasskey(body, session) {
        const res = await this.sendClientRequestAndCatchKnownError("/auth/passkey/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }, session, [
            ___known_errors_js.KnownErrors.PasskeyAuthenticationFailed
        ]);
        if (res.status === "error") return ___utils_results_js.Result.error(res.error);
        const result = await res.data.json();
        return ___utils_results_js.Result.ok({
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        });
    }
    async getOAuthUrl(options) {
        const updatedRedirectUrl = new URL(options.redirectUrl);
        for (const key of [
            "code",
            "state"
        ]){
            if (updatedRedirectUrl.searchParams.has(key)) console.warn("Redirect URL already contains " + key + " parameter, removing it as it will be overwritten by the OAuth callback");
            updatedRedirectUrl.searchParams.delete(key);
        }
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for OAuth");
        const clientSecret = this.options.publishableClientKey ?? ___utils_oauth_js.publishableClientKeyNotNecessarySentinel;
        const url = new URL(this.getCurrentTargetApiUrl() + "/auth/oauth/authorize/" + options.provider.toLowerCase());
        url.searchParams.set("client_id", this.projectId);
        url.searchParams.set("client_secret", clientSecret);
        url.searchParams.set("redirect_uri", updatedRedirectUrl.toString());
        url.searchParams.set("scope", "legacy");
        url.searchParams.set("state", options.state);
        url.searchParams.set("grant_type", "authorization_code");
        url.searchParams.set("code_challenge", options.codeChallenge);
        url.searchParams.set("code_challenge_method", "S256");
        url.searchParams.set("response_type", "code");
        url.searchParams.set("type", options.type);
        url.searchParams.set("error_redirect_url", options.errorRedirectUrl);
        const tokens = await options.session.getOrFetchLikelyValidTokens(45e3, 6e4);
        if (tokens) url.searchParams.set("token", tokens.accessToken.token);
        if (options.afterCallbackRedirectUrl) url.searchParams.set("after_callback_redirect_url", options.afterCallbackRedirectUrl);
        if (options.providerScope) url.searchParams.set("provider_scope", options.providerScope);
        for (const [key, value] of Object.entries(getBotChallengeRequestFields(options.botChallenge, `OAuth ${options.type}`)))url.searchParams.set(key, value);
        return url.toString();
    }
    async authorizeOAuth(options) {
        if (typeof window === "undefined") throw new ___utils_errors_js.HexclaveAssertionError("authorizeOAuth can currently only be called in a browser environment");
        await this.options.prepareRequest?.();
        const url = new URL(await this.getOAuthUrl(options));
        url.searchParams.set("hexclave_response_mode", "json");
        url.searchParams.set("stack_response_mode", "json");
        let rawRes;
        try {
            rawRes = await fetch(url, {
                method: "GET"
            });
        } catch (error) {
            if (error instanceof TypeError) throw await this._createNetworkError(error, options.session, "client");
            throw error;
        }
        const processedResponse = await this._processResponse(rawRes);
        if (processedResponse.status === "error") {
            if (isBotChallengeKnownError(processedResponse.error)) return ___utils_results_js.Result.error(processedResponse.error);
            throw processedResponse.error;
        }
        if (processedResponse.data.status !== 200) throw new ___utils_errors_js.HexclaveAssertionError(`OAuth authorize returned an unexpected status: ${processedResponse.data.status}`);
        const body = await processedResponse.data.json();
        if (body == null || typeof body !== "object" || Array.isArray(body)) throw new ___utils_errors_js.HexclaveAssertionError("OAuth authorize response body must be an object", {
            body
        });
        const location = body.location;
        if (typeof location !== "string") throw new ___utils_errors_js.HexclaveAssertionError("OAuth authorize response is missing a redirect location", {
            body
        });
        return ___utils_results_js.Result.ok(location);
    }
    async callOAuthCallback(options) {
        if ("projectOwnerSession" in this.options) throw new Error("Admin session token is currently not supported for OAuth");
        const clientSecret = this.options.publishableClientKey ?? ___utils_oauth_js.publishableClientKeyNotNecessarySentinel;
        return await this._withFallback(async (apiUrl)=>{
            return await this._callOAuthCallbackInner(options, clientSecret, apiUrl);
        });
    }
    async _callOAuthCallbackInner(options, clientSecret, apiUrl) {
        const tokenEndpoint = apiUrl + "/auth/oauth/token";
        const as = {
            issuer: this.options.getBaseUrl(),
            algorithm: "oauth2",
            token_endpoint: tokenEndpoint
        };
        const client = {
            client_id: this.projectId,
            client_secret: clientSecret
        };
        const clientAuthentication = ClientSecretPost(clientSecret);
        const allowInsecure = tokenEndpoint.startsWith("http://");
        let params;
        try {
            params = validateAuthResponse(as, client, options.oauthParams, options.state);
        } catch (e) {
            if (e instanceof AuthorizationResponseError) throw new ___utils_errors_js.HexclaveAssertionError("Authorization response error when validating outer OAuth response", {
                cause: Object.fromEntries(e.cause),
                code: e.code,
                error: e.error
            });
            throw new ___utils_errors_js.HexclaveAssertionError("Unexpected error when validating outer OAuth response", {
                cause: e
            });
        }
        const response = await authorizationCodeGrantRequest(as, client, clientAuthentication, params, options.redirectUri, options.codeVerifier, allowInsecure ? {
            [allowInsecureRequests]: true
        } : void 0);
        let result;
        try {
            result = await processAuthorizationCodeResponse(as, client, response);
        } catch (e) {
            if (e instanceof ResponseBodyError) {
                if (e.cause.code === "MULTI_FACTOR_AUTHENTICATION_REQUIRED") throw new ___known_errors_js.KnownErrors.MultiFactorAuthenticationRequired(e.cause.details.attempt_code);
                throw new ___utils_errors_js.HexclaveAssertionError("Outer OAuth error during authorization code response", {
                    cause: e.cause,
                    code: e.code,
                    error: e.error
                });
            }
            throw new ___utils_errors_js.HexclaveAssertionError("Unexpected error when processing authorization code response", {
                cause: e
            });
        }
        return {
            newUser: result.is_new_user,
            afterCallbackRedirectUrl: result.after_callback_redirect_url,
            accessToken: result.access_token,
            refreshToken: result.refresh_token ?? (0, ___utils_errors_js.throwErr)("Refresh token not found in outer OAuth response")
        };
    }
    async signOut(session) {
        if (await session.getOrFetchLikelyValidTokens(2e4, null)) {
            const resOrError = await this.sendClientRequestAndCatchKnownError("/auth/sessions/current", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({})
            }, session, [
                ___known_errors_js.KnownErrors.RefreshTokenError
            ]);
            if (resOrError.status === "error") if (___known_errors_js.KnownErrors.RefreshTokenError.isInstance(resOrError.error)) {} else throw new ___utils_errors_js.HexclaveAssertionError("Unexpected error", {
                cause: resOrError.error
            });
        }
        session.markInvalid();
    }
    async getClientUserByToken(session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/users/me", {}, session, [
            ___known_errors_js.KnownErrors.CannotGetOwnUserWithoutUser
        ]);
        if (responseOrError.status === "error") if (___known_errors_js.KnownErrors.CannotGetOwnUserWithoutUser.isInstance(responseOrError.error)) return null;
        else throw new ___utils_errors_js.HexclaveAssertionError("Unexpected uncaught error", {
            cause: responseOrError.error
        });
        const user = await responseOrError.data.json();
        if (!user) throw new ___utils_errors_js.HexclaveAssertionError("User endpoint returned null; this should never happen");
        return user;
    }
    async listTeamInvitations(options, session) {
        return (await (await this.sendClientRequest("/team-invitations?" + new URLSearchParams({
            team_id: options.teamId
        }), {}, session)).json()).items;
    }
    async listCurrentUserTeamInvitations(session) {
        return (await (await this.sendClientRequest("/team-invitations?" + new URLSearchParams({
            user_id: "me"
        }), {}, session)).json()).items;
    }
    async acceptTeamInvitationById(invitationId, session) {
        await this.sendClientRequest(___utils_urls_js.urlString`/team-invitations/${invitationId}/accept` + "?" + new URLSearchParams({
            user_id: "me"
        }), {
            method: "POST"
        }, session);
    }
    async revokeTeamInvitation(invitationId, teamId, session) {
        await this.sendClientRequest(`/team-invitations/${invitationId}?team_id=${teamId}`, {
            method: "DELETE"
        }, session);
    }
    async listTeamMemberProfiles(options, session) {
        return (await (await this.sendClientRequest("/team-member-profiles?" + new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            team_id: options.teamId,
            user_id: options.userId
        })), {}, session)).json()).items;
    }
    async getTeamMemberProfile(options, session) {
        return await (await this.sendClientRequest(`/team-member-profiles/${options.teamId}/${options.userId}`, {}, session)).json();
    }
    async leaveTeam(teamId, session) {
        await this.sendClientRequest(`/team-memberships/${teamId}/me`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session);
    }
    async removeUserFromTeam(teamId, userId, session) {
        await this.sendClientRequest(___utils_urls_js.urlString`/team-memberships/${teamId}/${userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session);
    }
    async updateTeamMemberProfile(options, session) {
        await this.sendClientRequest(`/team-member-profiles/${options.teamId}/${options.userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.profile)
        }, session);
    }
    async updateTeam(options, session) {
        await this.sendClientRequest(`/teams/${options.teamId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.data)
        }, session);
    }
    async listCurrentUserTeamPermissions(options, session) {
        return (await (await this.sendClientRequest(`/team-permissions?team_id=${options.teamId}&user_id=me&recursive=${options.recursive}`, {}, session)).json()).items;
    }
    async listCurrentUserProjectPermissions(options, session) {
        return (await (await this.sendClientRequest(`/project-permissions?user_id=me&recursive=${options.recursive}`, {}, session)).json()).items;
    }
    async listCurrentUserTeams(session) {
        return (await (await this.sendClientRequest("/teams?user_id=me", {}, session)).json()).items;
    }
    async getClientProject() {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/projects/current", {}, null, [
            ___known_errors_js.KnownErrors.ProjectNotFound
        ]);
        if (responseOrError.status === "error") return ___utils_results_js.Result.error(responseOrError.error);
        const project = await responseOrError.data.json();
        return ___utils_results_js.Result.ok(project);
    }
    async updateClientUser(update, session) {
        await this.sendClientRequest("/users/me", {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, session);
    }
    async listProjects(session) {
        const response = await this.sendClientRequest("/internal/projects", {}, session);
        if (!response.ok) throw new Error("Failed to list projects: " + response.status + " " + await response.text());
        return (await response.json()).items;
    }
    async createProject(project, session) {
        const fetchResponse = await this.sendClientRequest("/internal/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(project)
        }, session);
        if (!fetchResponse.ok) throw new Error("Failed to create project: " + fetchResponse.status + " " + await fetchResponse.text());
        return await fetchResponse.json();
    }
    async createProviderAccessToken(provider, scope, session) {
        return await (await this.sendClientRequest(`/connected-accounts/me/${provider}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, session)).json();
    }
    /**
	* Get access token for a specific connected account by provider ID and provider account ID.
	* This is the preferred method when dealing with multiple accounts of the same provider.
	*/ async createProviderAccessTokenByAccount(providerId, providerAccountId, scope, session) {
        return await (await this.sendClientRequest(`/connected-accounts/me/${encodeURIComponent(providerId)}/${encodeURIComponent(providerAccountId)}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, session)).json();
    }
    /**
	* List all connected accounts for the current user.
	*/ async listConnectedAccounts(session) {
        return await (await this.sendClientRequest(`/connected-accounts/me`, {
            method: "GET"
        }, session)).json();
    }
    async createClientTeam(data, session) {
        return await (await this.sendClientRequest("/teams", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async deleteTeam(teamId, session) {
        await this.sendClientRequest(`/teams/${teamId}`, {
            method: "DELETE"
        }, session);
    }
    async deleteCurrentUser(session) {
        await this.sendClientRequest("/users/me", {
            method: "DELETE"
        }, session);
    }
    async createClientContactChannel(data, session) {
        return await (await this.sendClientRequest("/contact-channels", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async updateClientContactChannel(id, data, session) {
        return await (await this.sendClientRequest(`/contact-channels/me/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async deleteClientContactChannel(id, session) {
        await this.sendClientRequest(`/contact-channels/me/${id}`, {
            method: "DELETE"
        }, session);
    }
    async deleteSession(sessionId, session) {
        await this.sendClientRequest(`/auth/sessions/${sessionId}?user_id=me`, {
            method: "DELETE"
        }, session);
    }
    async listSessions(session) {
        return await (await this.sendClientRequest("/auth/sessions?user_id=me", {
            method: "GET"
        }, session)).json();
    }
    async listClientContactChannels(session) {
        return (await (await this.sendClientRequest("/contact-channels?user_id=me", {
            method: "GET"
        }, session)).json()).items;
    }
    async sendCurrentUserContactChannelVerificationEmail(contactChannelId, callbackUrl, session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError(`/contact-channels/me/${contactChannelId}/send-verification-code`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                callback_url: callbackUrl
            })
        }, session, [
            ___known_errors_js.KnownErrors.EmailAlreadyVerified
        ]);
        if (responseOrError.status === "error") return ___utils_results_js.Result.error(responseOrError.error);
        return ___utils_results_js.Result.ok(void 0);
    }
    async cliLogin(loginCode, refreshToken, session) {
        const responseOrError = await this.sendClientRequestAndCatchKnownError("/auth/cli/complete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login_code: loginCode,
                refresh_token: refreshToken
            })
        }, session, [
            ___known_errors_js.KnownErrors.SchemaError
        ]);
        if (responseOrError.status === "error") return ___utils_results_js.Result.error(responseOrError.error);
        return ___utils_results_js.Result.ok(void 0);
    }
    async _getApiKeyRequestInfo(options) {
        if ("user_id" in options && "team_id" in options) throw new ___utils_errors_js.HexclaveAssertionError("Cannot specify both user_id and team_id in _getApiKeyRequestInfo");
        return {
            endpoint: "team_id" in options ? "/team-api-keys" : "/user-api-keys",
            queryParams: new URLSearchParams((0, ___utils_objects_js.filterUndefinedOrNull)(options))
        };
    }
    async listProjectApiKeys(options, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return (await (await sendRequest(`${endpoint}?${queryParams.toString()}`, {
            method: "GET"
        }, session, requestType)).json()).items;
    }
    async createProjectApiKey(data, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint } = await this._getApiKeyRequestInfo(data);
        return await (await sendRequest(`${endpoint}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session, requestType)).json();
    }
    async getProjectApiKey(options, keyId, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return await (await sendRequest(`${endpoint}/${keyId}?${queryParams.toString()}`, {
            method: "GET"
        }, session, requestType)).json();
    }
    async updateProjectApiKey(options, keyId, data, session, requestType) {
        const sendRequest = (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this);
        const { endpoint, queryParams } = await this._getApiKeyRequestInfo(options);
        return await (await sendRequest(`${endpoint}/${keyId}?${queryParams.toString()}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session, requestType)).json();
    }
    async checkProjectApiKey(type, apiKey, session, requestType) {
        const result = await (requestType === "client" ? this.sendClientRequestAndCatchKnownError : this.sendServerRequestAndCatchKnownError).bind(this)(`/${type}-api-keys/check`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                api_key: apiKey
            })
        }, session, [
            ___known_errors_js.KnownErrors.ApiKeyNotValid
        ]);
        if (result.status === "error") return null;
        return await result.data.json();
    }
    async listNotificationCategories(session) {
        return (await (await this.sendClientRequest(`/emails/notification-preference/me`, {}, session)).json()).items;
    }
    async setNotificationsEnabled(notificationCategoryId, enabled, session) {
        await this.sendClientRequest(`/emails/notification-preference/me/${notificationCategoryId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                enabled
            })
        }, session);
    }
    async getOAuthProvider(userId, providerId, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "GET"
        }, session)).json();
    }
    async updateOAuthProvider(userId, providerId, data, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, session)).json();
    }
    async listOAuthProviders(options = {}, session) {
        const queryParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)(options));
        return (await (await this.sendClientRequest(`/oauth-providers${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "GET"
        }, session)).json()).items;
    }
    async deleteOAuthProvider(userId, providerId, session) {
        return await (await this.sendClientRequest(`/oauth-providers/${userId}/${providerId}`, {
            method: "DELETE"
        }, session)).json();
    }
    async getItem(options, session, requestType = "client") {
        let customerType;
        let customerId;
        if ("userId" in options) {
            customerType = "user";
            customerId = options.userId;
        } else if ("teamId" in options) {
            customerType = "team";
            customerId = options.teamId;
        } else if ("customCustomerId" in options) {
            customerType = "custom";
            customerId = options.customCustomerId;
        } else throw new ___utils_errors_js.HexclaveAssertionError("getItem requires one of userId, teamId, or customCustomerId");
        return await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)(___utils_urls_js.urlString`/payments/items/${customerType}/${customerId}/${options.itemId}`, {}, session, requestType)).json();
    }
    async listProducts(options, session, requestType = "client") {
        const queryParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            cursor: options.cursor,
            limit: options.limit !== void 0 ? options.limit.toString() : void 0
        }));
        const path = ___utils_urls_js.urlString`/payments/products/${options.customer_type}/${options.customer_id}`;
        return await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {}, session, requestType)).json();
    }
    async listInvoices(options, session) {
        const queryParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            cursor: options.cursor,
            limit: options.limit !== void 0 ? options.limit.toString() : void 0
        }));
        const path = ___utils_urls_js.urlString`/payments/invoices/${options.customer_type}/${options.customer_id}`;
        return await (await this.sendClientRequest(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {}, session)).json();
    }
    async cancelSubscription(options, session) {
        const queryParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            subscription_id: options.subscription_id
        }));
        const path = ___utils_urls_js.urlString`/payments/products/${options.customer_type}/${options.customer_id}/${options.product_id}`;
        await this.sendClientRequest(`${path}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "DELETE"
        }, session);
    }
    async switchSubscription(options, session) {
        await this.sendClientRequest(___utils_urls_js.urlString`/payments/products/${options.customer_type}/${options.customer_id}/switch`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                from_product_id: options.from_product_id,
                to_product_id: options.to_product_id,
                price_id: options.price_id,
                quantity: options.quantity
            })
        }, session);
    }
    async createCheckoutUrl(customer_type, customer_id, productIdOrInline, session, returnUrl, requestType = "client") {
        const productBody = typeof productIdOrInline === "string" ? {
            product_id: productIdOrInline
        } : {
            product_inline: productIdOrInline
        };
        const { url } = await (await (requestType === "client" ? this.sendClientRequest : this.sendServerRequest).bind(this)("/payments/purchases/create-purchase-url", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                customer_type,
                customer_id,
                ...productBody,
                return_url: returnUrl
            })
        }, session, requestType)).json();
        return url;
    }
    async getCustomerBilling(customerType, customerId, session) {
        return await (await this.sendClientRequest(___utils_urls_js.urlString`/payments/billing/${customerType}/${customerId}`, {}, session)).json();
    }
    async createCustomerPaymentMethodSetupIntent(customerType, customerId, session) {
        return await (await this.sendClientRequest(___utils_urls_js.urlString`/payments/payment-method/${customerType}/${customerId}/setup-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session)).json();
    }
    async setDefaultCustomerPaymentMethodFromSetupIntent(customerType, customerId, setupIntentId, session) {
        return await (await this.sendClientRequest(___utils_urls_js.urlString`/payments/payment-method/${customerType}/${customerId}/set-default`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                setup_intent_id: setupIntentId
            })
        }, session)).json();
    }
    async transferProject(internalProjectSession, projectIdToTransfer, newTeamId) {
        if (this.options.projectId !== "internal") throw new ___utils_errors_js.HexclaveAssertionError("HexclaveClientInterface.transferProject() is only available for internal projects (please specify the project ID in the constructor)");
        await this.sendClientRequest("/internal/projects/transfer", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                project_id: projectIdToTransfer,
                new_team_id: newTeamId
            })
        }, internalProjectSession);
    }
};
//#endregion
exports.ApiUrlsFailedError = ApiUrlsFailedError;
exports.HexclaveClientInterface = HexclaveClientInterface;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/server-interface.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let ___utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let ___utils_objects_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)");
let ___utils_results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let ___utils_urls_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/urls.js [app-client] (ecmascript)");
let ___known_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)");
let ___sessions_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/sessions.js [app-client] (ecmascript)");
let __client_interface_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/interface/client-interface.js [app-client] (ecmascript)");
let ___helpers_vault_client_side_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/helpers/vault/client-side.js [app-client] (ecmascript)");
//#region src/interface/server-interface.ts
var HexclaveServerInterface = class extends __client_interface_js.HexclaveClientInterface {
    constructor(options){
        super(options);
        this.options = options;
    }
    async sendServerRequest(path, options, session, requestType = "server") {
        return await this.sendClientRequest(path, {
            ...options,
            headers: {
                "x-hexclave-secret-server-key": "secretServerKey" in this.options ? this.options.secretServerKey : "",
                ...options.headers
            }
        }, session, requestType);
    }
    async getCustomerBilling(customerType, customerId, session) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/payments/billing/${customerType}/${customerId}`, {}, session)).json();
    }
    async createCustomerPaymentMethodSetupIntent(customerType, customerId, session) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/payments/payment-method/${customerType}/${customerId}/setup-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, session)).json();
    }
    async setDefaultCustomerPaymentMethodFromSetupIntent(customerType, customerId, setupIntentId, session) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/payments/payment-method/${customerType}/${customerId}/set-default`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                setup_intent_id: setupIntentId
            })
        }, session)).json();
    }
    async sendServerRequestAndCatchKnownError(path, requestOptions, tokenStoreOrNull, errorsToCatch) {
        try {
            return ___utils_results_js.Result.ok(await this.sendServerRequest(path, requestOptions, tokenStoreOrNull));
        } catch (e) {
            for (const errorType of errorsToCatch)if (errorType.isInstance(e)) return ___utils_results_js.Result.error(e);
            throw e;
        }
    }
    async createServerUser(data) {
        return await (await this.sendServerRequest("/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async getServerUserByToken(session) {
        const responseOrError = await this.sendServerRequestAndCatchKnownError("/users/me", {}, session, [
            ___known_errors_js.KnownErrors.CannotGetOwnUserWithoutUser
        ]);
        if (responseOrError.status === "error") if (___known_errors_js.KnownErrors.CannotGetOwnUserWithoutUser.isInstance(responseOrError.error)) return null;
        else throw new ___utils_errors_js.HexclaveAssertionError("Unexpected uncaught error", {
            cause: responseOrError.error
        });
        const user = await responseOrError.data.json();
        if (!user) throw new ___utils_errors_js.HexclaveAssertionError("User endpoint returned null; this should never happen");
        return user;
    }
    async getServerUserById(userId) {
        const responseOrError = await this.sendServerRequestAndCatchKnownError(___utils_urls_js.urlString`/users/${userId}`, {}, null, [
            ___known_errors_js.KnownErrors.UserNotFound
        ]);
        if (responseOrError.status === "error") return ___utils_results_js.Result.error(responseOrError.error);
        const user = await responseOrError.data.json();
        return ___utils_results_js.Result.ok(user);
    }
    async listServerTeamInvitations(options) {
        return (await (await this.sendServerRequest(___utils_urls_js.urlString`/team-invitations?team_id=${options.teamId}`, {}, null)).json()).items;
    }
    async revokeServerTeamInvitation(invitationId, teamId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-invitations/${invitationId}?team_id=${teamId}`, {
            method: "DELETE"
        }, null);
    }
    async listServerTeamMemberProfiles(options) {
        return (await (await this.sendServerRequest(___utils_urls_js.urlString`/team-member-profiles?team_id=${options.teamId}`, {}, null)).json()).items;
    }
    async getServerTeamMemberProfile(options) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/team-member-profiles/${options.teamId}/${options.userId}`, {}, null)).json();
    }
    async listServerTeamPermissions(options, session) {
        return (await (await this.sendServerRequest(`/team-permissions?${new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            user_id: options.userId,
            team_id: options.teamId,
            recursive: options.recursive.toString()
        }))}`, {}, session)).json()).items;
    }
    async listServerProjectPermissions(options, session) {
        return (await (await this.sendServerRequest(`/project-permissions?${new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            user_id: options.userId,
            recursive: options.recursive.toString()
        }))}`, {}, session)).json()).items;
    }
    async listServerUsers(options) {
        const searchParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            cursor: options.cursor,
            limit: options.limit?.toString(),
            desc: options.desc?.toString(),
            team_id: options.teamId,
            ...options.orderBy ? {
                order_by: ({
                    signedUpAt: "signed_up_at",
                    lastActiveAt: "last_active_at"
                })[options.orderBy]
            } : {},
            ...options.query ? {
                query: options.query
            } : {},
            ...options.excludedEmailDomains && options.excludedEmailDomains.length > 0 ? {
                excluded_email_domains: options.excludedEmailDomains.join(",")
            } : {},
            ...options.includeRestricted ? {
                include_restricted: "true"
            } : {},
            ...options.includeAnonymous ? {
                include_anonymous: "true"
            } : {},
            ...options.onlyAnonymous ? {
                only_anonymous: "true"
            } : {}
        }));
        return await (await this.sendServerRequest("/users?" + searchParams.toString(), {}, null)).json();
    }
    async listServerTeams(options) {
        return (await this.listServerTeamsPaginated(options)).items;
    }
    async listServerTeamsPaginated(options) {
        return await (await this.sendServerRequest(`/teams?${new URLSearchParams((0, ___utils_objects_js.filterUndefined)({
            user_id: options?.userId,
            order_by: options?.orderBy === "createdAt" ? "created_at" : options?.orderBy,
            desc: options?.desc !== void 0 ? String(options.desc) : void 0,
            cursor: options?.cursor,
            limit: options?.limit?.toString(),
            query: options?.query
        }))}`, {}, null)).json();
    }
    async getServerTeam(teamId) {
        return await (await this.sendServerRequest(`/teams/${teamId}`, {}, null)).json();
    }
    async listServerTeamUsers(teamId) {
        return (await (await this.sendServerRequest(`/users?team_id=${teamId}`, {}, null)).json()).items;
    }
    async createServerTeam(data) {
        return await (await this.sendServerRequest("/teams", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateServerTeam(teamId, data) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/teams/${teamId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerTeam(teamId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/teams/${teamId}`, {
            method: "DELETE"
        }, null);
    }
    async addServerUserToTeam(options) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async removeServerUserFromTeam(options) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async listServerUserTeamInvitations(userId) {
        return (await (await this.sendServerRequest("/team-invitations?" + new URLSearchParams({
            user_id: userId
        }), {}, null)).json()).items;
    }
    async acceptServerTeamInvitationById(invitationId, userId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-invitations/${invitationId}/accept` + "?" + new URLSearchParams({
            user_id: userId
        }), {
            method: "POST"
        }, null);
    }
    async updateServerUser(userId, update) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/users/${userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        }, null)).json();
    }
    async createServerProviderAccessToken(userId, provider, scope) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/connected-accounts/${userId}/${provider}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, null)).json();
    }
    /**
	* Get access token for a specific connected account by provider ID and provider account ID.
	* This is the preferred method when dealing with multiple accounts of the same provider.
	*/ async createServerProviderAccessTokenByAccount(userId, providerId, providerAccountId, scope) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/connected-accounts/${userId}/${providerId}/${providerAccountId}/access-token`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                scope
            })
        }, null)).json();
    }
    /**
	* List all connected accounts for a user.
	*/ async listServerConnectedAccounts(userId) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/connected-accounts/${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async createServerUserSession(userId, expiresInMillis, isImpersonation) {
        const result = await (await this.sendServerRequest("/auth/sessions", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                expires_in_millis: expiresInMillis,
                is_impersonation: isImpersonation
            })
        }, null)).json();
        return {
            accessToken: result.access_token,
            refreshToken: result.refresh_token
        };
    }
    async leaveServerTeam(options) {
        await this.sendClientRequest(___utils_urls_js.urlString`/team-memberships/${options.teamId}/${options.userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async updateServerTeamMemberProfile(options) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-member-profiles/${options.teamId}/${options.userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(options.profile)
        }, null);
    }
    async grantServerTeamUserPermission(teamId, userId, permissionId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-permissions/${teamId}/${userId}/${permissionId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async grantServerProjectPermission(userId, permissionId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/project-permissions/${userId}/${permissionId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async revokeServerTeamUserPermission(teamId, userId, permissionId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/team-permissions/${teamId}/${userId}/${permissionId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async revokeServerProjectPermission(userId, permissionId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/project-permissions/${userId}/${permissionId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async deleteServerUser(userId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/users/${userId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({})
        }, null);
    }
    async createServerContactChannel(data) {
        return await (await this.sendServerRequest("/contact-channels", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async updateServerContactChannel(userId, contactChannelId, data) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/contact-channels/${userId}/${contactChannelId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerContactChannel(userId, contactChannelId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/contact-channels/${userId}/${contactChannelId}`, {
            method: "DELETE"
        }, null);
    }
    async listServerContactChannels(userId) {
        return (await (await this.sendServerRequest(___utils_urls_js.urlString`/contact-channels?user_id=${userId}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async listServerNotificationCategories(userId) {
        return (await (await this.sendServerRequest(___utils_urls_js.urlString`/emails/notification-preference/${userId}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async setServerNotificationsEnabled(userId, notificationCategoryId, enabled) {
        await this.sendServerRequest(___utils_urls_js.urlString`/emails/notification-preference/${userId}/${notificationCategoryId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                enabled
            })
        }, null);
    }
    async sendServerContactChannelVerificationEmail(userId, contactChannelId, callbackUrl) {
        await this.sendServerRequest(___utils_urls_js.urlString`/contact-channels/${userId}/${contactChannelId}/send-verification-code`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                callback_url: callbackUrl
            })
        }, null);
    }
    async listServerSessions(userId) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/auth/sessions?user_id=${userId}`, {
            method: "GET"
        }, null)).json();
    }
    async deleteServerSession(sessionId) {
        await this.sendServerRequest(___utils_urls_js.urlString`/auth/sessions/${sessionId}`, {
            method: "DELETE"
        }, null);
    }
    async sendServerTeamInvitation(options) {
        await this.sendServerRequest("/team-invitations/send-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: options.email,
                team_id: options.teamId,
                callback_url: options.callbackUrl
            })
        }, null);
    }
    async updatePassword(options) {
        const res = await this.sendServerRequestAndCatchKnownError("/auth/password/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                old_password: options.oldPassword,
                new_password: options.newPassword
            })
        }, null, [
            ___known_errors_js.KnownErrors.PasswordConfirmationMismatch,
            ___known_errors_js.KnownErrors.PasswordRequirementsNotMet
        ]);
        if (res.status === "error") return res.error;
    }
    async createServerOAuthProvider(data) {
        return await (await this.sendServerRequest("/oauth-providers", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async listServerOAuthProviders(options = {}) {
        const queryParams = new URLSearchParams((0, ___utils_objects_js.filterUndefined)(options));
        return (await (await this.sendServerRequest(`/oauth-providers${queryParams.toString() ? `?${queryParams.toString()}` : ""}`, {
            method: "GET"
        }, null)).json()).items;
    }
    async updateServerOAuthProvider(userId, providerId, data) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/oauth-providers/${userId}/${providerId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }, null)).json();
    }
    async deleteServerOAuthProvider(userId, providerId) {
        return await (await this.sendServerRequest(___utils_urls_js.urlString`/oauth-providers/${userId}/${providerId}`, {
            method: "DELETE"
        }, null)).json();
    }
    async sendEmail(options) {
        await this.sendServerRequest("/emails/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_ids: options.userIds,
                all_users: options.allUsers,
                emails: options.emails,
                theme_id: options.themeId,
                html: options.html,
                subject: options.subject,
                notification_category_name: options.notificationCategoryName,
                template_id: options.templateId,
                variables: options.variables,
                draft_id: options.draftId,
                scheduled_at_millis: options.scheduledAt?.getTime()
            })
        }, null);
        return ___utils_results_js.Result.ok(void 0);
    }
    async getEmailDeliveryInfo() {
        return await (await this.sendServerRequest("/emails/delivery-info", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }, null)).json();
    }
    async activateEmailCapacityBoost() {
        return await (await this.sendServerRequest("/emails/capacity-boost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        }, null)).json();
    }
    async queryAnalytics(options) {
        return await (await this.sendServerRequest("/analytics/query", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                query: options.query,
                params: options.params ?? {},
                timeout_ms: options.timeout_ms ?? 1e3,
                include_all_branches: options.include_all_branches ?? false
            })
        }, null)).json();
    }
    async updateItemQuantity(options, data) {
        let customerType;
        let customerId;
        const itemId = options.itemId;
        if ("userId" in options) {
            customerType = "user";
            customerId = options.userId;
        } else if ("teamId" in options) {
            customerType = "team";
            customerId = options.teamId;
        } else if ("customCustomerId" in options) {
            customerType = "custom";
            customerId = options.customCustomerId;
        } else throw new ___utils_errors_js.HexclaveAssertionError("updateItemQuantity requires one of userId, teamId, or customCustomerId");
        const queryParams = new URLSearchParams({
            allow_negative: (data.allow_negative ?? false).toString()
        });
        await this.sendServerRequest(`/payments/items/${customerType}/${customerId}/${itemId}/update-quantity?${queryParams.toString()}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                delta: data.delta,
                expires_at: data.expires_at,
                description: data.description
            })
        }, null);
    }
    async grantProduct(options) {
        if (!options.productId && !options.product) throw new ___utils_errors_js.HexclaveAssertionError("grantProduct requires either productId or product");
        if (options.productId && options.product) throw new ___utils_errors_js.HexclaveAssertionError("grantProduct should not receive both productId and product");
        const body = (0, ___utils_objects_js.filterUndefined)({
            product_id: options.productId,
            product_inline: options.product,
            quantity: options.quantity
        });
        await this.sendServerRequest(___utils_urls_js.urlString`/payments/products/${options.customerType}/${options.customerId}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        }, null);
    }
    async getDataVaultStoreValue(secret, storeId, key) {
        const hashedKey = await (0, ___helpers_vault_client_side_js.hashKey)(secret, key);
        const response = await this.sendServerRequestAndCatchKnownError(`/data-vault/stores/${storeId}/get`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hashed_key: hashedKey
            })
        }, null, [
            ___known_errors_js.KnownErrors.DataVaultStoreHashedKeyDoesNotExist
        ]);
        if (response.status === "error") if (___known_errors_js.KnownErrors.DataVaultStoreHashedKeyDoesNotExist.isInstance(response.error)) return null;
        else throw new ___utils_errors_js.HexclaveAssertionError("Unexpected uncaught error", {
            cause: response.error
        });
        const encryptedValue = (await response.data.json()).encrypted_value;
        if (typeof encryptedValue !== "string") throw new ___utils_errors_js.HexclaveAssertionError("encrypted_value is not a string", {
            type: typeof encryptedValue
        });
        return await (0, ___helpers_vault_client_side_js.decryptValue)(secret, key, encryptedValue);
    }
    async setDataVaultStoreValue(secret, storeId, key, value) {
        const hashedKey = await (0, ___helpers_vault_client_side_js.hashKey)(secret, key);
        const encryptedValue = await (0, ___helpers_vault_client_side_js.encryptValue)(secret, key, value);
        await this.sendServerRequest(`/data-vault/stores/${storeId}/set`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                hashed_key: hashedKey,
                encrypted_value: encryptedValue
            })
        }, null);
    }
    async initiateServerPasskeyRegistration(userId) {
        const { accessToken, refreshToken } = await this.createServerUserSession(userId, 6e4 * 2, false);
        const tempSession = new ___sessions_js.InternalSession({
            accessToken,
            refreshToken,
            refreshAccessTokenCallback: async ()=>null
        });
        return await this.initiatePasskeyRegistration({}, tempSession);
    }
    async listSessionReplays(params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        if (params?.user_ids && params.user_ids.length > 0) qs.set("user_ids", params.user_ids.join(","));
        if (params?.team_ids && params.team_ids.length > 0) qs.set("team_ids", params.team_ids.join(","));
        if (typeof params?.duration_ms_min === "number") qs.set("duration_ms_min", String(params.duration_ms_min));
        if (typeof params?.duration_ms_max === "number") qs.set("duration_ms_max", String(params.duration_ms_max));
        if (typeof params?.last_event_at_from_millis === "number") qs.set("last_event_at_from_millis", String(params.last_event_at_from_millis));
        if (typeof params?.last_event_at_to_millis === "number") qs.set("last_event_at_to_millis", String(params.last_event_at_to_millis));
        if (typeof params?.click_count_min === "number") qs.set("click_count_min", String(params.click_count_min));
        return await (await this.sendServerRequest(`/session-replays${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplay(sessionReplayId) {
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}`, {
            method: "GET"
        }, null)).json();
    }
    async listSessionReplayChunks(sessionReplayId, params) {
        const qs = new URLSearchParams();
        if (params?.cursor) qs.set("cursor", params.cursor);
        if (typeof params?.limit === "number") qs.set("limit", String(params.limit));
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/chunks${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplayChunkEvents(sessionReplayId, chunkId) {
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/chunks/${encodeURIComponent(chunkId)}/events`, {
            method: "GET"
        }, null)).json();
    }
    async getSessionReplayEvents(sessionReplayId, options) {
        const qs = new URLSearchParams();
        if (typeof options?.offset === "number") qs.set("offset", String(options.offset));
        if (typeof options?.limit === "number") qs.set("limit", String(options.limit));
        return await (await this.sendServerRequest(`/session-replays/${encodeURIComponent(sessionReplayId)}/events${qs.size ? `?${qs.toString()}` : ""}`, {
            method: "GET"
        }, null)).json();
    }
};
//#endregion
exports.HexclaveServerInterface = HexclaveServerInterface;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __utils_strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let __utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __utils_functions_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/functions.js [app-client] (ecmascript)");
//#region src/known-errors.tsx
var KnownError = class extends __utils_errors_js.StatusError {
    constructor(statusCode, humanReadableMessage, details){
        super(statusCode, humanReadableMessage);
        this.statusCode = statusCode;
        this.humanReadableMessage = humanReadableMessage;
        this.details = details;
        this.__stackKnownErrorBrand = "stack-known-error-brand-sentinel";
        this.name = "KnownError";
    }
    static isKnownError(error) {
        return typeof error === "object" && error !== null && "__stackKnownErrorBrand" in error && error.__stackKnownErrorBrand === "stack-known-error-brand-sentinel";
    }
    getBody() {
        return new TextEncoder().encode(JSON.stringify(this.toDescriptiveJson(), void 0, 2));
    }
    getHeaders() {
        return {
            "Content-Type": [
                "application/json; charset=utf-8"
            ],
            "X-Stack-Known-Error": [
                this.errorCode
            ],
            "X-Hexclave-Known-Error": [
                this.errorCode
            ]
        };
    }
    toDescriptiveJson() {
        return {
            code: this.errorCode,
            ...this.details ? {
                details: this.details
            } : {},
            error: this.humanReadableMessage
        };
    }
    get errorCode() {
        return this.constructor.errorCode ?? (0, __utils_errors_js.throwErr)(`Can't find error code for this KnownError. Is its constructor a KnownErrorConstructor? ${this}`);
    }
    static constructorArgsFromJson(json) {
        return [
            400,
            json.message,
            json
        ];
    }
    static fromJson(json) {
        for (const [_, KnownErrorType] of Object.entries(KnownErrors))if (json.code === KnownErrorType.prototype.errorCode) return new KnownErrorType(...KnownErrorType.constructorArgsFromJson(json));
        throw new Error(`An error occurred. Please update your version of the Hexclave SDK. ${json.code}: ${json.message}`);
    }
};
function createKnownErrorConstructor(SuperClass, errorCode, create, constructorArgsFromJson) {
    const createFn = create === "inherit" ? __utils_functions_js.identityArgs : create;
    const constructorArgsFromJsonFn = constructorArgsFromJson === "inherit" ? SuperClass.constructorArgsFromJson : constructorArgsFromJson;
    class KnownErrorImpl extends SuperClass {
        static{
            this.errorCode = errorCode;
        }
        constructor(...args){
            super(...createFn(...args));
            this.name = `KnownError<${errorCode}>`;
            this.constructorArgs = args;
        }
        static constructorArgsFromJson(json) {
            return constructorArgsFromJsonFn(json.details);
        }
        static isInstance(error) {
            if (!KnownError.isKnownError(error)) return false;
            let current = error;
            while(true){
                current = Object.getPrototypeOf(current);
                if (!current) break;
                if ("errorCode" in current.constructor && current.constructor.errorCode === errorCode) return true;
            }
            return false;
        }
    }
    return KnownErrorImpl;
}
const UnsupportedError = createKnownErrorConstructor(KnownError, "UNSUPPORTED_ERROR", (originalErrorCode)=>[
        500,
        `An error occurred that is not currently supported (possibly because it was added in a version of Stack that is newer than this client). The original unsupported error code was: ${originalErrorCode}`,
        {
            originalErrorCode
        }
    ], (json)=>[
        json?.originalErrorCode ?? (0, __utils_errors_js.throwErr)("originalErrorCode not found in UnsupportedError details")
    ]);
const BodyParsingError = createKnownErrorConstructor(KnownError, "BODY_PARSING_ERROR", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const SchemaError = createKnownErrorConstructor(KnownError, "SCHEMA_ERROR", (message)=>[
        400,
        message || (0, __utils_errors_js.throwErr)("SchemaError requires a message"),
        {
            message
        }
    ], (json)=>[
        json.message
    ]);
const AllOverloadsFailed = createKnownErrorConstructor(KnownError, "ALL_OVERLOADS_FAILED", (overloadErrors)=>[
        400,
        __utils_strings_js.deindent`
      This endpoint has multiple overloads, but they all failed to process the request.

        ${overloadErrors.map((e, i)=>__utils_strings_js.deindent`
          Overload ${i + 1}: ${JSON.stringify(e, void 0, 2)}
        `).join("\n\n")}
    `,
        {
            overload_errors: overloadErrors
        }
    ], (json)=>[
        json?.overload_errors ?? (0, __utils_errors_js.throwErr)("overload_errors not found in AllOverloadsFailed details")
    ]);
const ProjectAuthenticationError = createKnownErrorConstructor(KnownError, "PROJECT_AUTHENTICATION_ERROR", "inherit", "inherit");
const InvalidProjectAuthentication = createKnownErrorConstructor(ProjectAuthenticationError, "INVALID_PROJECT_AUTHENTICATION", "inherit", "inherit");
const ProjectKeyWithoutAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "PROJECT_KEY_WITHOUT_ACCESS_TYPE", ()=>[
        400,
        "Either an API key or an admin access token was provided, but the x-hexclave-access-type header is missing. Set it to 'client', 'server', or 'admin' as appropriate. (The legacy x-stack-access-type header is also accepted.)"
    ], ()=>[]);
const InvalidAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_ACCESS_TYPE", (accessType)=>[
        400,
        `The x-hexclave-access-type header must be 'client', 'server', or 'admin', but was '${accessType}'. (The legacy x-stack-access-type header is also accepted.)`
    ], (json)=>[
        json?.accessType ?? (0, __utils_errors_js.throwErr)("accessType not found in InvalidAccessType details")
    ]);
const AccessTypeWithoutProjectId = createKnownErrorConstructor(InvalidProjectAuthentication, "ACCESS_TYPE_WITHOUT_PROJECT_ID", (accessType)=>[
        400,
        __utils_strings_js.deindent`
      The x-hexclave-access-type header was '${accessType}', but the x-hexclave-project-id header was not provided. (The legacy x-stack-access-type and x-stack-project-id headers are also accepted.)
      
      For more information, see the docs on REST API authentication: https://docs.hexclave.com/api/overview#authentication
    `,
        {
            request_type: accessType
        }
    ], (json)=>[
        json.request_type
    ]);
const AccessTypeRequired = createKnownErrorConstructor(InvalidProjectAuthentication, "ACCESS_TYPE_REQUIRED", ()=>[
        400,
        __utils_strings_js.deindent`
      You must specify an access level for this Hexclave project. Make sure project API keys are provided (eg. x-hexclave-publishable-client-key) and you set the x-hexclave-access-type header to 'client', 'server', or 'admin'. (The legacy x-stack-* equivalents are also accepted.)
      
      For more information, see the docs on REST API authentication: https://docs.hexclave.com/api/overview#authentication
    `
    ], ()=>[]);
const InsufficientAccessType = createKnownErrorConstructor(InvalidProjectAuthentication, "INSUFFICIENT_ACCESS_TYPE", (actualAccessType, allowedAccessTypes)=>[
        401,
        `The x-hexclave-access-type header must be ${allowedAccessTypes.map((s)=>`'${s}'`).join(" or ")}, but was '${actualAccessType}'. (The legacy x-stack-access-type header is also accepted.)`,
        {
            actual_access_type: actualAccessType,
            allowed_access_types: allowedAccessTypes
        }
    ], (json)=>[
        json.actual_access_type,
        json.allowed_access_types
    ]);
const InvalidPublishableClientKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_PUBLISHABLE_CLIENT_KEY", (projectId)=>[
        401,
        `The publishable key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidSecretServerKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_SECRET_SERVER_KEY", (projectId)=>[
        401,
        `The secret server key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidSuperSecretAdminKey = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_SUPER_SECRET_ADMIN_KEY", (projectId)=>[
        401,
        `The super secret admin key is not valid for the project ${JSON.stringify(projectId)}. Does the project and/or the key exist?`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const InvalidAdminAccessToken = createKnownErrorConstructor(InvalidProjectAuthentication, "INVALID_ADMIN_ACCESS_TOKEN", "inherit", "inherit");
const UnparsableAdminAccessToken = createKnownErrorConstructor(InvalidAdminAccessToken, "UNPARSABLE_ADMIN_ACCESS_TOKEN", ()=>[
        401,
        "Admin access token is not parsable."
    ], ()=>[]);
const AdminAccessTokenExpired = createKnownErrorConstructor(InvalidAdminAccessToken, "ADMIN_ACCESS_TOKEN_EXPIRED", (expiredAt)=>[
        401,
        `Admin access token has expired. Please refresh it and try again.${expiredAt ? ` (The access token expired at ${expiredAt.toISOString()}.)` : ""}`,
        {
            expired_at_millis: expiredAt?.getTime() ?? null
        }
    ], (json)=>[
        json.expired_at_millis ? new Date(json.expired_at_millis) : void 0
    ]);
const InvalidProjectForAdminAccessToken = createKnownErrorConstructor(InvalidAdminAccessToken, "INVALID_PROJECT_FOR_ADMIN_ACCESS_TOKEN", ()=>[
        401,
        "Admin access tokens must be created on the internal project."
    ], ()=>[]);
const AdminAccessTokenIsNotAdmin = createKnownErrorConstructor(InvalidAdminAccessToken, "ADMIN_ACCESS_TOKEN_IS_NOT_ADMIN", ()=>[
        401,
        "Admin access token does not have the required permissions to access this project."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ProjectAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationError, "PROJECT_AUTHENTICATION_REQUIRED", "inherit", "inherit");
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The publishable client key must be provided."
    ], ()=>[]);
const PublishableClientKeyRequiredForProject = createKnownErrorConstructor(ProjectAuthenticationRequired, "PUBLISHABLE_CLIENT_KEY_REQUIRED_FOR_PROJECT", (projectId)=>[
        401,
        "Publishable client keys are required for this project. Create one in Project Keys, or disable this requirement there to allow keyless client access.",
        {
            project_id: projectId ?? null
        }
    ], (json)=>[
        json.project_id ?? void 0
    ]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ServerAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "SERVER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The secret server key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrServerAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_SERVER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key or the secret server key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrAdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key or the super secret admin key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const ClientOrServerOrAdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "CLIENT_OR_SERVER_OR_ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "Either the publishable client key, the secret server key, or the super secret admin key must be provided."
    ], ()=>[]);
/**
* @deprecated Use InsufficientAccessType instead
*/ const AdminAuthenticationRequired = createKnownErrorConstructor(ProjectAuthenticationRequired, "ADMIN_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "The super secret admin key must be provided."
    ], ()=>[]);
const ExpectedInternalProject = createKnownErrorConstructor(ProjectAuthenticationError, "EXPECTED_INTERNAL_PROJECT", ()=>[
        401,
        "The project ID is expected to be internal."
    ], ()=>[]);
const SessionAuthenticationError = createKnownErrorConstructor(KnownError, "SESSION_AUTHENTICATION_ERROR", "inherit", "inherit");
const InvalidSessionAuthentication = createKnownErrorConstructor(SessionAuthenticationError, "INVALID_SESSION_AUTHENTICATION", "inherit", "inherit");
const InvalidAccessToken = createKnownErrorConstructor(InvalidSessionAuthentication, "INVALID_ACCESS_TOKEN", "inherit", "inherit");
const UnparsableAccessToken = createKnownErrorConstructor(InvalidAccessToken, "UNPARSABLE_ACCESS_TOKEN", ()=>[
        401,
        "Access token is not parsable."
    ], ()=>[]);
const AccessTokenExpired = createKnownErrorConstructor(InvalidAccessToken, "ACCESS_TOKEN_EXPIRED", (expiredAt, projectId, userId, refreshTokenId)=>[
        401,
        __utils_strings_js.deindent`
      Access token has expired. Please refresh it and try again.${expiredAt ? ` (The access token expired at ${expiredAt.toISOString()}.)` : ""}${projectId ? ` Project ID: ${projectId}.` : ""}${userId ? ` User ID: ${userId}.` : ""}${refreshTokenId ? ` Refresh token ID: ${refreshTokenId}.` : ""}

      Debug info: Most likely, you fetched the access token before it expired (for example, in a server component, pre-rendered page, or on page load), but then didn't refresh it before it expired. If this is the case, and you're using the SDK, make sure you call getAccessToken() every time you need to use the access token. If you're not using the SDK, make sure you refresh the access token with the refresh endpoint.
    `,
        {
            expired_at_millis: expiredAt?.getTime() ?? null,
            project_id: projectId ?? null,
            user_id: userId ?? null,
            refresh_token_id: refreshTokenId ?? null
        }
    ], (json)=>[
        json.expired_at_millis ? new Date(json.expired_at_millis) : void 0,
        json.project_id ?? void 0,
        json.user_id ?? void 0,
        json.refresh_token_id ?? void 0
    ]);
const InvalidProjectForAccessToken = createKnownErrorConstructor(InvalidAccessToken, "INVALID_PROJECT_FOR_ACCESS_TOKEN", (expectedProjectId, actualProjectId)=>[
        401,
        `Access token not valid for this project. Expected project ID ${JSON.stringify(expectedProjectId)}, but the token is for project ID ${JSON.stringify(actualProjectId)}.`,
        {
            expected_project_id: expectedProjectId,
            actual_project_id: actualProjectId
        }
    ], (json)=>[
        json.expected_project_id,
        json.actual_project_id
    ]);
const RefreshTokenError = createKnownErrorConstructor(KnownError, "REFRESH_TOKEN_ERROR", "inherit", "inherit");
const RefreshTokenNotFoundOrExpired = createKnownErrorConstructor(RefreshTokenError, "REFRESH_TOKEN_NOT_FOUND_OR_EXPIRED", ()=>[
        401,
        "Refresh token not found for this project, or the session has expired/been revoked."
    ], ()=>[]);
const CannotDeleteCurrentSession = createKnownErrorConstructor(RefreshTokenError, "CANNOT_DELETE_CURRENT_SESSION", ()=>[
        400,
        "Cannot delete the current session."
    ], ()=>[]);
const ProviderRejected = createKnownErrorConstructor(RefreshTokenError, "PROVIDER_REJECTED", ()=>[
        401,
        "The provider refused to refresh their token. This usually means that the provider used to authenticate the user no longer regards this session as valid, and the user must re-authenticate."
    ], ()=>[]);
const UserWithEmailAlreadyExists = createKnownErrorConstructor(KnownError, "USER_EMAIL_ALREADY_EXISTS", (email, wouldWorkIfEmailWasVerified = false)=>[
        409,
        `A user with email ${JSON.stringify(email)} already exists${wouldWorkIfEmailWasVerified ? " but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method." : "."}`,
        {
            email,
            would_work_if_email_was_verified: wouldWorkIfEmailWasVerified
        }
    ], (json)=>[
        json.email,
        json.would_work_if_email_was_verified ?? false
    ]);
const EmailNotVerified = createKnownErrorConstructor(KnownError, "EMAIL_NOT_VERIFIED", ()=>[
        400,
        "The email is not verified."
    ], ()=>[]);
const CannotGetOwnUserWithoutUser = createKnownErrorConstructor(KnownError, "CANNOT_GET_OWN_USER_WITHOUT_USER", ()=>[
        400,
        "You have specified 'me' as a userId, but did not provide authentication for a user."
    ], ()=>[]);
const UserIdDoesNotExist = createKnownErrorConstructor(KnownError, "USER_ID_DOES_NOT_EXIST", (userId)=>[
        400,
        `The given user with the ID ${userId} does not exist.`,
        {
            user_id: userId
        }
    ], (json)=>[
        json.user_id
    ]);
const UserNotFound = createKnownErrorConstructor(KnownError, "USER_NOT_FOUND", ()=>[
        404,
        "User not found."
    ], ()=>[]);
const RestrictedUserNotAllowed = createKnownErrorConstructor(KnownError, "RESTRICTED_USER_NOT_ALLOWED", (restrictedReason)=>[
        403,
        `The user in the access token is in restricted state. Reason: ${restrictedReason.type}. Please pass the X-Stack-Allow-Restricted-User header if this is intended.`,
        {
            restricted_reason: restrictedReason
        }
    ], (json)=>[
        json.restricted_reason ?? {
            type: "anonymous"
        }
    ]);
const ProjectNotFound = createKnownErrorConstructor(KnownError, "PROJECT_NOT_FOUND", (projectId)=>{
    if (typeof projectId !== "string") throw new __utils_errors_js.HexclaveAssertionError("projectId of KnownErrors.ProjectNotFound must be a string");
    return [
        404,
        `Project ${projectId} not found or is not accessible with the current user.`,
        {
            project_id: projectId
        }
    ];
}, (json)=>[
        json.project_id
    ]);
const CurrentProjectNotFound = createKnownErrorConstructor(KnownError, "CURRENT_PROJECT_NOT_FOUND", (projectId)=>[
        400,
        `The current project with ID ${projectId} was not found. Please check the value of the x-hexclave-project-id header. (The legacy x-stack-project-id header is also accepted.)`,
        {
            project_id: projectId
        }
    ], (json)=>[
        json.project_id
    ]);
const BranchDoesNotExist = createKnownErrorConstructor(KnownError, "BRANCH_DOES_NOT_EXIST", (branchId)=>[
        400,
        `The branch with ID ${branchId} does not exist.`,
        {
            branch_id: branchId
        }
    ], (json)=>[
        json.branch_id
    ]);
const SignUpNotEnabled = createKnownErrorConstructor(KnownError, "SIGN_UP_NOT_ENABLED", ()=>[
        400,
        "Creation of new accounts is not enabled for this project. Please ask the project owner to enable it."
    ], ()=>[]);
const SignUpRejected = createKnownErrorConstructor(KnownError, "SIGN_UP_REJECTED", (message)=>[
        403,
        message ?? "Your sign up was rejected by an administrator's sign-up rule.",
        {
            message: message ?? "Your sign up was rejected by an administrator's sign-up rule."
        }
    ], (json)=>[
        json.message
    ]);
const BotChallengeRequired = createKnownErrorConstructor(KnownError, "BOT_CHALLENGE_REQUIRED", ()=>[
        409,
        "An additional bot challenge is required before sign-up can continue."
    ], ()=>[]);
const BotChallengeFailed = createKnownErrorConstructor(KnownError, "BOT_CHALLENGE_FAILED", (message)=>[
        400,
        message,
        {
            message
        }
    ], (json)=>[
        json.message
    ]);
const PasswordAuthenticationNotEnabled = createKnownErrorConstructor(KnownError, "PASSWORD_AUTHENTICATION_NOT_ENABLED", ()=>[
        400,
        "Password authentication is not enabled for this project."
    ], ()=>[]);
const DataVaultStoreDoesNotExist = createKnownErrorConstructor(KnownError, "DATA_VAULT_STORE_DOES_NOT_EXIST", (storeId)=>[
        400,
        `Data vault store with ID ${storeId} does not exist.`,
        {
            store_id: storeId
        }
    ], (json)=>[
        json.store_id
    ]);
const DataVaultStoreHashedKeyDoesNotExist = createKnownErrorConstructor(KnownError, "DATA_VAULT_STORE_HASHED_KEY_DOES_NOT_EXIST", (storeId, hashedKey)=>[
        400,
        `Data vault store with ID ${storeId} does not contain a key with hash ${hashedKey}.`,
        {
            store_id: storeId,
            hashed_key: hashedKey
        }
    ], (json)=>[
        json.store_id,
        json.hashed_key
    ]);
const PasskeyAuthenticationNotEnabled = createKnownErrorConstructor(KnownError, "PASSKEY_AUTHENTICATION_NOT_ENABLED", ()=>[
        400,
        "Passkey authentication is not enabled for this project."
    ], ()=>[]);
const AnonymousAccountsNotEnabled = createKnownErrorConstructor(KnownError, "ANONYMOUS_ACCOUNTS_NOT_ENABLED", ()=>[
        400,
        "Anonymous accounts are not enabled for this project."
    ], ()=>[]);
const AnonymousAuthenticationNotAllowed = createKnownErrorConstructor(KnownError, "ANONYMOUS_AUTHENTICATION_NOT_ALLOWED", ()=>[
        401,
        "X-Stack-Access-Token is for an anonymous user, but anonymous users are not enabled. Set the X-Stack-Allow-Anonymous-User header of this request to 'true' to allow anonymous users."
    ], ()=>[]);
const EmailPasswordMismatch = createKnownErrorConstructor(KnownError, "EMAIL_PASSWORD_MISMATCH", ()=>[
        400,
        "Wrong e-mail or password."
    ], ()=>[]);
const RedirectUrlNotWhitelisted = createKnownErrorConstructor(KnownError, "REDIRECT_URL_NOT_WHITELISTED", (redirectUrl)=>[
        400,
        "Redirect URL not whitelisted. Did you forget to add this domain to the trusted domains list on the Hexclave dashboard?",
        redirectUrl === void 0 ? void 0 : {
            redirect_url: redirectUrl
        }
    ], (json)=>[
        json?.redirect_url
    ]);
const PasswordRequirementsNotMet = createKnownErrorConstructor(KnownError, "PASSWORD_REQUIREMENTS_NOT_MET", "inherit", "inherit");
const PasswordTooShort = createKnownErrorConstructor(PasswordRequirementsNotMet, "PASSWORD_TOO_SHORT", (minLength)=>[
        400,
        `Password too short. Minimum length is ${minLength}.`,
        {
            min_length: minLength
        }
    ], (json)=>[
        json?.min_length ?? (0, __utils_errors_js.throwErr)("min_length not found in PasswordTooShort details")
    ]);
const PasswordTooLong = createKnownErrorConstructor(PasswordRequirementsNotMet, "PASSWORD_TOO_LONG", (maxLength)=>[
        400,
        `Password too long. Maximum length is ${maxLength}.`,
        {
            maxLength
        }
    ], (json)=>[
        json?.maxLength ?? (0, __utils_errors_js.throwErr)("maxLength not found in PasswordTooLong details")
    ]);
const UserDoesNotHavePassword = createKnownErrorConstructor(KnownError, "USER_DOES_NOT_HAVE_PASSWORD", ()=>[
        400,
        "This user does not have password authentication enabled."
    ], ()=>[]);
const VerificationCodeError = createKnownErrorConstructor(KnownError, "VERIFICATION_ERROR", "inherit", "inherit");
const VerificationCodeNotFound = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_NOT_FOUND", ()=>[
        404,
        "The verification code does not exist for this project."
    ], ()=>[]);
const VerificationCodeExpired = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_EXPIRED", ()=>[
        400,
        "The verification code has expired."
    ], ()=>[]);
const VerificationCodeAlreadyUsed = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_ALREADY_USED", ()=>[
        409,
        "The verification link has already been used."
    ], ()=>[]);
const VerificationCodeMaxAttemptsReached = createKnownErrorConstructor(VerificationCodeError, "VERIFICATION_CODE_MAX_ATTEMPTS_REACHED", ()=>[
        400,
        "The verification code nonce has reached the maximum number of attempts. This code is not valid anymore."
    ], ()=>[]);
const PasswordConfirmationMismatch = createKnownErrorConstructor(KnownError, "PASSWORD_CONFIRMATION_MISMATCH", ()=>[
        400,
        "Passwords do not match."
    ], ()=>[]);
const EmailAlreadyVerified = createKnownErrorConstructor(KnownError, "EMAIL_ALREADY_VERIFIED", ()=>[
        409,
        "The e-mail is already verified."
    ], ()=>[]);
const EmailNotAssociatedWithUser = createKnownErrorConstructor(KnownError, "EMAIL_NOT_ASSOCIATED_WITH_USER", ()=>[
        400,
        "The e-mail is not associated with a user that could log in with that e-mail."
    ], ()=>[]);
const EmailIsNotPrimaryEmail = createKnownErrorConstructor(KnownError, "EMAIL_IS_NOT_PRIMARY_EMAIL", (email, primaryEmail)=>[
        400,
        `The given e-mail (${email}) must equal the user's primary e-mail (${primaryEmail}).`,
        {
            email,
            primary_email: primaryEmail
        }
    ], (json)=>[
        json.email,
        json.primary_email
    ]);
const PasskeyRegistrationFailed = createKnownErrorConstructor(KnownError, "PASSKEY_REGISTRATION_FAILED", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const PasskeyWebAuthnError = createKnownErrorConstructor(KnownError, "PASSKEY_WEBAUTHN_ERROR", (message, code)=>[
        400,
        message,
        {
            message,
            code
        }
    ], (json)=>[
        json.message,
        json.code
    ]);
const PasskeyAuthenticationFailed = createKnownErrorConstructor(KnownError, "PASSKEY_AUTHENTICATION_FAILED", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const PermissionNotFound = createKnownErrorConstructor(KnownError, "PERMISSION_NOT_FOUND", (permissionId)=>[
        404,
        `Permission "${permissionId}" not found. Make sure you created it on the dashboard.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const PermissionScopeMismatch = createKnownErrorConstructor(KnownError, "WRONG_PERMISSION_SCOPE", (permissionId, expectedScope, actualScope)=>[
        404,
        `Permission ${JSON.stringify(permissionId)} not found. (It was found for a different scope ${JSON.stringify(actualScope)}, but scope ${JSON.stringify(expectedScope)} was expected.)`,
        {
            permission_id: permissionId,
            expected_scope: expectedScope,
            actual_scope: actualScope
        }
    ], (json)=>[
        json.permission_id,
        json.expected_scope,
        json.actual_scope
    ]);
const ContainedPermissionNotFound = createKnownErrorConstructor(KnownError, "CONTAINED_PERMISSION_NOT_FOUND", (permissionId)=>[
        400,
        `Contained permission with ID "${permissionId}" not found. Make sure you created it on the dashboard.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const TeamNotFound = createKnownErrorConstructor(KnownError, "TEAM_NOT_FOUND", (teamId)=>[
        404,
        `Team ${teamId} not found.`,
        {
            team_id: teamId
        }
    ], (json)=>[
        json.team_id
    ]);
createKnownErrorConstructor(KnownError, "TEAM_ALREADY_EXISTS", (teamId)=>[
        409,
        `Team ${teamId} already exists.`,
        {
            team_id: teamId
        }
    ], (json)=>[
        json.team_id
    ]);
const TeamMembershipNotFound = createKnownErrorConstructor(KnownError, "TEAM_MEMBERSHIP_NOT_FOUND", (teamId, userId)=>[
        404,
        `User ${userId} is not found in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId
        }
    ], (json)=>[
        json.team_id,
        json.user_id
    ]);
const TeamInvitationRestrictedUserNotAllowed = createKnownErrorConstructor(KnownError, "TEAM_INVITATION_RESTRICTED_USER_NOT_ALLOWED", (restrictedReason)=>[
        403,
        `Restricted users cannot accept team invitations. Reason: ${restrictedReason.type}. Please complete the onboarding process before accepting team invitations.`,
        {
            restricted_reason: restrictedReason
        }
    ], (json)=>[
        json.restricted_reason ?? {
            type: "anonymous"
        }
    ]);
const TeamInvitationEmailMismatch = createKnownErrorConstructor(KnownError, "TEAM_INVITATION_EMAIL_MISMATCH", ()=>[
        403,
        "This team invitation was sent to a different email address. Sign in with the invited email, or add and verify that email on your account, then try again."
    ], ()=>[]);
const EmailTemplateAlreadyExists = createKnownErrorConstructor(KnownError, "EMAIL_TEMPLATE_ALREADY_EXISTS", ()=>[
        409,
        "Email template already exists."
    ], ()=>[]);
const OAuthConnectionNotConnectedToUser = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_NOT_CONNECTED_TO_USER", ()=>[
        400,
        "The OAuth connection is not connected to any user."
    ], ()=>[]);
const OAuthConnectionAlreadyConnectedToAnotherUser = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_ALREADY_CONNECTED_TO_ANOTHER_USER", ()=>[
        409,
        "The OAuth connection is already connected to another user."
    ], ()=>[]);
const OAuthConnectionDoesNotHaveRequiredScope = createKnownErrorConstructor(KnownError, "OAUTH_CONNECTION_DOES_NOT_HAVE_REQUIRED_SCOPE", ()=>[
        400,
        "The OAuth connection does not have the required scope."
    ], ()=>[]);
const OAuthAccessTokenNotAvailable = createKnownErrorConstructor(KnownError, "OAUTH_ACCESS_TOKEN_NOT_AVAILABLE", (provider, details)=>[
        400,
        `Failed to retrieve an OAuth access token for the connected account (provider: ${provider}). ${details}`,
        {
            provider,
            details
        }
    ], (json)=>[
        json.provider,
        json.details
    ]);
const OAuthExtraScopeNotAvailableWithSharedOAuthKeys = createKnownErrorConstructor(KnownError, "OAUTH_EXTRA_SCOPE_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS", ()=>[
        400,
        "Extra scopes are not available with shared OAuth keys. Please add your own OAuth keys on the Hexclave dashboard to use extra scopes."
    ], ()=>[]);
const OAuthAccessTokenNotAvailableWithSharedOAuthKeys = createKnownErrorConstructor(KnownError, "OAUTH_ACCESS_TOKEN_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS", ()=>[
        400,
        "Access tokens are not available with shared OAuth keys. Please add your own OAuth keys on the Hexclave dashboard to use access tokens."
    ], ()=>[]);
const InvalidOAuthClientIdOrSecret = createKnownErrorConstructor(KnownError, "INVALID_OAUTH_CLIENT_ID_OR_SECRET", (clientId)=>[
        400,
        "The OAuth client ID or secret is invalid. The client ID must be equal to the project ID (potentially with a hash and a branch ID), and the client secret must be a publishable client key.",
        {
            client_id: clientId ?? null
        }
    ], (json)=>[
        json.client_id ?? void 0
    ]);
const InvalidScope = createKnownErrorConstructor(KnownError, "INVALID_SCOPE", (scope)=>[
        400,
        `The scope "${scope}" is not a valid OAuth scope for Stack.`
    ], (json)=>[
        json.scope
    ]);
const UserAlreadyConnectedToAnotherOAuthConnection = createKnownErrorConstructor(KnownError, "USER_ALREADY_CONNECTED_TO_ANOTHER_OAUTH_CONNECTION", ()=>[
        409,
        "The user is already connected to another OAuth account. Did you maybe selected the wrong account?"
    ], ()=>[]);
const OuterOAuthTimeout = createKnownErrorConstructor(KnownError, "OUTER_OAUTH_TIMEOUT", ()=>[
        408,
        "The OAuth flow has timed out. Please sign in again."
    ], ()=>[]);
const OAuthProviderNotFoundOrNotEnabled = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_NOT_FOUND_OR_NOT_ENABLED", ()=>[
        400,
        "The OAuth provider is not found or not enabled."
    ], ()=>[]);
const AppleBundleIdNotConfigured = createKnownErrorConstructor(KnownError, "APPLE_BUNDLE_ID_NOT_CONFIGURED", ()=>[
        400,
        "Apple Sign In is enabled, but no Bundle IDs are configured. Please add your app's Bundle ID in the Hexclave dashboard under OAuth Providers > Apple > Apple Bundle IDs."
    ], ()=>[]);
const OAuthProviderAccountIdAlreadyUsedForSignIn = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_ACCOUNT_ID_ALREADY_USED_FOR_SIGN_IN", ()=>[
        400,
        `A provider with the same account ID is already used for signing in.`
    ], ()=>[]);
const MultiFactorAuthenticationRequired = createKnownErrorConstructor(KnownError, "MULTI_FACTOR_AUTHENTICATION_REQUIRED", (attemptCode)=>[
        400,
        `Multi-factor authentication is required for this user.`,
        {
            attempt_code: attemptCode
        }
    ], (json)=>[
        json.attempt_code
    ]);
const InvalidTotpCode = createKnownErrorConstructor(KnownError, "INVALID_TOTP_CODE", ()=>[
        400,
        "The TOTP code is invalid. Please try again."
    ], ()=>[]);
const UserAuthenticationRequired = createKnownErrorConstructor(KnownError, "USER_AUTHENTICATION_REQUIRED", ()=>[
        401,
        "User authentication required for this endpoint."
    ], ()=>[]);
const TeamMembershipAlreadyExists = createKnownErrorConstructor(KnownError, "TEAM_MEMBERSHIP_ALREADY_EXISTS", ()=>[
        409,
        "Team membership already exists."
    ], ()=>[]);
const ProjectPermissionRequired = createKnownErrorConstructor(KnownError, "PROJECT_PERMISSION_REQUIRED", (userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId}.`,
        {
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.user_id,
        json.permission_id
    ]);
const TeamPermissionRequired = createKnownErrorConstructor(KnownError, "TEAM_PERMISSION_REQUIRED", (teamId, userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId} in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.team_id,
        json.user_id,
        json.permission_id
    ]);
const TeamPermissionNotFound = createKnownErrorConstructor(KnownError, "TEAM_PERMISSION_NOT_FOUND", (teamId, userId, permissionId)=>[
        401,
        `User ${userId} does not have permission ${permissionId} in team ${teamId}.`,
        {
            team_id: teamId,
            user_id: userId,
            permission_id: permissionId
        }
    ], (json)=>[
        json.team_id,
        json.user_id,
        json.permission_id
    ]);
const InvalidSharedOAuthProviderId = createKnownErrorConstructor(KnownError, "INVALID_SHARED_OAUTH_PROVIDER_ID", (providerId)=>[
        400,
        `The shared OAuth provider with ID ${providerId} is not valid.`,
        {
            provider_id: providerId
        }
    ], (json)=>[
        json.provider_id
    ]);
const InvalidStandardOAuthProviderId = createKnownErrorConstructor(KnownError, "INVALID_STANDARD_OAUTH_PROVIDER_ID", (providerId)=>[
        400,
        `The standard OAuth provider with ID ${providerId} is not valid.`,
        {
            provider_id: providerId
        }
    ], (json)=>[
        json.provider_id
    ]);
const InvalidAuthorizationCode = createKnownErrorConstructor(KnownError, "INVALID_AUTHORIZATION_CODE", ()=>[
        400,
        "The given authorization code is invalid."
    ], ()=>[]);
const InvalidAppleCredentials = createKnownErrorConstructor(KnownError, "INVALID_APPLE_CREDENTIALS", ()=>[
        400,
        "The Apple Sign In credentials could not be verified. Please try signing in again."
    ], ()=>[]);
const OAuthProviderAccessDenied = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_ACCESS_DENIED", ()=>[
        400,
        "The OAuth provider denied access to the user."
    ], ()=>[]);
const OAuthProviderTemporarilyUnavailable = createKnownErrorConstructor(KnownError, "OAUTH_PROVIDER_TEMPORARILY_UNAVAILABLE", ()=>[
        503,
        "The OAuth provider is temporarily unavailable. Please try again later."
    ], ()=>[]);
const ContactChannelAlreadyUsedForAuthBySomeoneElse = createKnownErrorConstructor(KnownError, "CONTACT_CHANNEL_ALREADY_USED_FOR_AUTH_BY_SOMEONE_ELSE", (type, contactChannelValue, wouldWorkIfEmailWasVerified = false)=>[
        409,
        `This ${type} ${contactChannelValue ? `"(${contactChannelValue})"` : ""} is already used for authentication by another account${wouldWorkIfEmailWasVerified ? " but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method." : "."}`,
        {
            type,
            contact_channel_value: contactChannelValue ?? null,
            would_work_if_email_was_verified: wouldWorkIfEmailWasVerified
        }
    ], (json)=>[
        json.type,
        json.contact_channel_value,
        json.would_work_if_email_was_verified ?? false
    ]);
const InvalidPollingCodeError = createKnownErrorConstructor(KnownError, "INVALID_POLLING_CODE", (details)=>[
        400,
        "The polling code is invalid or does not exist.",
        details
    ], (json)=>[
        json
    ]);
const CliAuthError = createKnownErrorConstructor(KnownError, "CLI_AUTH_ERROR", (message)=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const CliAuthExpiredError = createKnownErrorConstructor(KnownError, "CLI_AUTH_EXPIRED_ERROR", (message = "CLI authentication request expired. Please try again.")=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const CliAuthUsedError = createKnownErrorConstructor(KnownError, "CLI_AUTH_USED_ERROR", (message = "This authentication token has already been used.")=>[
        400,
        message
    ], (json)=>[
        json.message
    ]);
const ApiKeyNotValid = createKnownErrorConstructor(KnownError, "API_KEY_NOT_VALID", "inherit", "inherit");
const ApiKeyExpired = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_EXPIRED", ()=>[
        401,
        "API key has expired."
    ], ()=>[]);
const ApiKeyRevoked = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_REVOKED", ()=>[
        401,
        "API key has been revoked."
    ], ()=>[]);
const WrongApiKeyType = createKnownErrorConstructor(ApiKeyNotValid, "WRONG_API_KEY_TYPE", (expectedType, actualType)=>[
        400,
        `This endpoint is for ${expectedType} API keys, but a ${actualType} API key was provided.`,
        {
            expected_type: expectedType,
            actual_type: actualType
        }
    ], (json)=>[
        json.expected_type,
        json.actual_type
    ]);
const ApiKeyNotFound = createKnownErrorConstructor(ApiKeyNotValid, "API_KEY_NOT_FOUND", ()=>[
        404,
        "API key not found."
    ], ()=>[]);
const PublicApiKeyCannotBeRevoked = createKnownErrorConstructor(ApiKeyNotValid, "PUBLIC_API_KEY_CANNOT_BE_REVOKED", ()=>[
        400,
        "Public API keys cannot be revoked by the secretscanner endpoint."
    ], ()=>[]);
const PermissionIdAlreadyExists = createKnownErrorConstructor(KnownError, "PERMISSION_ID_ALREADY_EXISTS", (permissionId)=>[
        400,
        `Permission with ID "${permissionId}" already exists. Choose a different ID.`,
        {
            permission_id: permissionId
        }
    ], (json)=>[
        json.permission_id
    ]);
const EmailRenderingError = createKnownErrorConstructor(KnownError, "EMAIL_RENDERING_ERROR", (error)=>[
        400,
        `Failed to render email with theme: ${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const TemplateSourceRewriteError = createKnownErrorConstructor(KnownError, "TEMPLATE_SOURCE_REWRITE_ERROR", (error)=>[
        400,
        `Failed to rewrite template source: ${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const RequiresCustomEmailServer = createKnownErrorConstructor(KnownError, "REQUIRES_CUSTOM_EMAIL_SERVER", ()=>[
        400,
        `This action requires a custom SMTP server. Please edit your email server configuration and try again.`
    ], ()=>[]);
const EmailCapacityBoostAlreadyActive = createKnownErrorConstructor(KnownError, "EMAIL_CAPACITY_BOOST_ALREADY_ACTIVE", (expiresAt)=>[
        409,
        `Email capacity boost is already active until ${expiresAt}.`,
        {
            expires_at: expiresAt
        }
    ], (json)=>[
        json.expires_at
    ]);
const EmailNotEditable = createKnownErrorConstructor(KnownError, "EMAIL_NOT_EDITABLE", (emailId, status)=>[
        400,
        `Email with ID "${emailId}" cannot be edited because it is in status "${status}". Only emails in PAUSED, PREPARING, RENDERING, RENDER_ERROR, SCHEDULED, QUEUED, or SERVER_ERROR status can be edited.`,
        {
            email_id: emailId,
            status
        }
    ], (json)=>[
        json.email_id,
        json.status
    ]);
const ItemNotFound = createKnownErrorConstructor(KnownError, "ITEM_NOT_FOUND", (itemId)=>[
        404,
        `Item with ID "${itemId}" not found.`,
        {
            item_id: itemId
        }
    ], (json)=>[
        json.item_id
    ]);
const ItemCustomerTypeDoesNotMatch = createKnownErrorConstructor(KnownError, "ITEM_CUSTOMER_TYPE_DOES_NOT_MATCH", (itemId, customerId, itemCustomerType, actualCustomerType)=>[
        400,
        `The ${actualCustomerType} with ID ${JSON.stringify(customerId)} is not a valid customer for the item with ID ${JSON.stringify(itemId)}. ${itemCustomerType ? `The item is configured to only be available for ${itemCustomerType} customers, but the customer is a ${actualCustomerType}.` : `The item is missing a customer type field. Please make sure it is set up correctly in your project configuration.`}`,
        {
            item_id: itemId,
            customer_id: customerId,
            item_customer_type: itemCustomerType ?? null,
            actual_customer_type: actualCustomerType
        }
    ], (json)=>[
        json.item_id,
        json.customer_id,
        json.item_customer_type ?? void 0,
        json.actual_customer_type
    ]);
const CustomerDoesNotExist = createKnownErrorConstructor(KnownError, "CUSTOMER_DOES_NOT_EXIST", (customerId)=>[
        400,
        `Customer with ID ${JSON.stringify(customerId)} does not exist.`,
        {
            customer_id: customerId
        }
    ], (json)=>[
        json.customer_id
    ]);
const SubscriptionInvoiceNotFound = createKnownErrorConstructor(KnownError, "SUBSCRIPTION_INVOICE_NOT_FOUND", (subscriptionInvoiceId)=>[
        404,
        `Subscription invoice with ID ${JSON.stringify(subscriptionInvoiceId)} does not exist.`,
        {
            subscription_invoice_id: subscriptionInvoiceId
        }
    ], (json)=>[
        json.subscription_invoice_id
    ]);
const OneTimePurchaseNotFound = createKnownErrorConstructor(KnownError, "ONE_TIME_PURCHASE_NOT_FOUND", (purchaseId)=>[
        404,
        `One-time purchase with ID ${JSON.stringify(purchaseId)} does not exist.`,
        {
            one_time_purchase_id: purchaseId
        }
    ], (json)=>[
        json.one_time_purchase_id
    ]);
const SubscriptionAlreadyRefunded = createKnownErrorConstructor(KnownError, "SUBSCRIPTION_ALREADY_REFUNDED", (subscriptionId)=>[
        400,
        `Subscription with ID ${JSON.stringify(subscriptionId)} was already refunded.`,
        {
            subscription_id: subscriptionId
        }
    ], (json)=>[
        json.subscription_id
    ]);
const OneTimePurchaseAlreadyRefunded = createKnownErrorConstructor(KnownError, "ONE_TIME_PURCHASE_ALREADY_REFUNDED", (purchaseId)=>[
        400,
        `One-time purchase with ID ${JSON.stringify(purchaseId)} was already refunded.`,
        {
            one_time_purchase_id: purchaseId
        }
    ], (json)=>[
        json.one_time_purchase_id
    ]);
const TestModePurchaseNonRefundable = createKnownErrorConstructor(KnownError, "TEST_MODE_PURCHASE_NON_REFUNDABLE", ()=>[
        400,
        "Test mode purchases are not refundable."
    ], ()=>[]);
const ProductDoesNotExist = createKnownErrorConstructor(KnownError, "PRODUCT_DOES_NOT_EXIST", (productId, context)=>[
        400,
        `Product with ID ${JSON.stringify(productId)} ${context === "server_only" ? "is marked as server-only and cannot be accessed client side." : context === "item_exists" ? "does not exist, but an item with this ID exists." : "does not exist."}`,
        {
            product_id: productId,
            context
        }
    ], (json)=>[
        json.product_id,
        json.context
    ]);
const ProductCustomerTypeDoesNotMatch = createKnownErrorConstructor(KnownError, "PRODUCT_CUSTOMER_TYPE_DOES_NOT_MATCH", (productId, customerId, productCustomerType, actualCustomerType)=>[
        400,
        `The ${actualCustomerType} with ID ${JSON.stringify(customerId)} is not a valid customer for the inline product that has been passed in. ${productCustomerType ? `The product is configured to only be available for ${productCustomerType} customers, but the customer is a ${actualCustomerType}.` : `The product is missing a customer type field. Please make sure it is set up correctly in your project configuration.`}`,
        {
            product_id: productId ?? null,
            customer_id: customerId,
            product_customer_type: productCustomerType ?? null,
            actual_customer_type: actualCustomerType
        }
    ], (json)=>[
        json.product_id ?? void 0,
        json.customer_id,
        json.product_customer_type ?? void 0,
        json.actual_customer_type
    ]);
const ProductAlreadyGranted = createKnownErrorConstructor(KnownError, "PRODUCT_ALREADY_GRANTED", (productId, customerId)=>[
        400,
        `Customer with ID ${JSON.stringify(customerId)} already owns product ${JSON.stringify(productId)}.`,
        {
            product_id: productId,
            customer_id: customerId
        }
    ], (json)=>[
        json.product_id,
        json.customer_id
    ]);
const ItemQuantityInsufficientAmount = createKnownErrorConstructor(KnownError, "ITEM_QUANTITY_INSUFFICIENT_AMOUNT", (itemId, customerId, quantity)=>[
        400,
        `The item with ID ${JSON.stringify(itemId)} has an insufficient quantity for the customer with ID ${JSON.stringify(customerId)}. An attempt was made to charge ${quantity} credits.`,
        {
            item_id: itemId,
            customer_id: customerId,
            quantity
        }
    ], (json)=>[
        json.item_id,
        json.customer_id,
        json.quantity
    ]);
const StripeAccountInfoNotFound = createKnownErrorConstructor(KnownError, "STRIPE_ACCOUNT_INFO_NOT_FOUND", ()=>[
        404,
        "Stripe account information not found. Please make sure the user has onboarded with Stripe."
    ], ()=>[]);
const AnalyticsQueryTimeout = createKnownErrorConstructor(KnownError, "ANALYTICS_QUERY_TIMEOUT", (timeoutMs)=>[
        400,
        `The query timed out. Please try again with a shorter query or increase the timeout. Timeout was ${timeoutMs}ms.`,
        {
            timeout_ms: timeoutMs
        }
    ], (json)=>[
        json.timeout_ms
    ]);
const AnalyticsQueryError = createKnownErrorConstructor(KnownError, "ANALYTICS_QUERY_ERROR", (error)=>[
        400,
        `${error}`,
        {
            error
        }
    ], (json)=>[
        json.error
    ]);
const AnalyticsNotEnabled = createKnownErrorConstructor(KnownError, "ANALYTICS_NOT_ENABLED", ()=>[
        400,
        "Analytics is not enabled for this project."
    ], ()=>[]);
const KnownErrors = {
    CannotDeleteCurrentSession,
    UnsupportedError,
    BodyParsingError,
    SchemaError,
    AllOverloadsFailed,
    ProjectAuthenticationError,
    PermissionIdAlreadyExists,
    CliAuthError,
    CliAuthExpiredError,
    CliAuthUsedError,
    InvalidProjectAuthentication,
    ProjectKeyWithoutAccessType,
    InvalidAccessType,
    AccessTypeWithoutProjectId,
    AccessTypeRequired,
    CannotGetOwnUserWithoutUser,
    InsufficientAccessType,
    InvalidPublishableClientKey,
    InvalidSecretServerKey,
    InvalidSuperSecretAdminKey,
    InvalidAdminAccessToken,
    UnparsableAdminAccessToken,
    AdminAccessTokenExpired,
    InvalidProjectForAdminAccessToken,
    AdminAccessTokenIsNotAdmin,
    ProjectAuthenticationRequired,
    ClientAuthenticationRequired,
    PublishableClientKeyRequiredForProject,
    ServerAuthenticationRequired,
    ClientOrServerAuthenticationRequired,
    ClientOrAdminAuthenticationRequired,
    ClientOrServerOrAdminAuthenticationRequired,
    AdminAuthenticationRequired,
    ExpectedInternalProject,
    SessionAuthenticationError,
    InvalidSessionAuthentication,
    InvalidAccessToken,
    UnparsableAccessToken,
    AccessTokenExpired,
    InvalidProjectForAccessToken,
    RefreshTokenError,
    ProviderRejected,
    RefreshTokenNotFoundOrExpired,
    UserWithEmailAlreadyExists,
    EmailNotVerified,
    UserIdDoesNotExist,
    UserNotFound,
    RestrictedUserNotAllowed,
    ApiKeyNotFound,
    PublicApiKeyCannotBeRevoked,
    ProjectNotFound,
    CurrentProjectNotFound,
    BranchDoesNotExist,
    SignUpNotEnabled,
    SignUpRejected,
    BotChallengeRequired,
    BotChallengeFailed,
    PasswordAuthenticationNotEnabled,
    PasskeyAuthenticationNotEnabled,
    AnonymousAccountsNotEnabled,
    AnonymousAuthenticationNotAllowed,
    EmailPasswordMismatch,
    RedirectUrlNotWhitelisted,
    PasswordRequirementsNotMet,
    PasswordTooShort,
    PasswordTooLong,
    UserDoesNotHavePassword,
    VerificationCodeError,
    VerificationCodeNotFound,
    VerificationCodeExpired,
    VerificationCodeAlreadyUsed,
    VerificationCodeMaxAttemptsReached,
    PasswordConfirmationMismatch,
    EmailAlreadyVerified,
    EmailNotAssociatedWithUser,
    EmailIsNotPrimaryEmail,
    PasskeyRegistrationFailed,
    PasskeyWebAuthnError,
    PasskeyAuthenticationFailed,
    PermissionNotFound,
    PermissionScopeMismatch,
    ContainedPermissionNotFound,
    TeamNotFound,
    TeamMembershipNotFound,
    TeamInvitationRestrictedUserNotAllowed,
    TeamInvitationEmailMismatch,
    EmailTemplateAlreadyExists,
    OAuthConnectionNotConnectedToUser,
    OAuthConnectionAlreadyConnectedToAnotherUser,
    OAuthConnectionDoesNotHaveRequiredScope,
    OAuthAccessTokenNotAvailable,
    OAuthExtraScopeNotAvailableWithSharedOAuthKeys,
    OAuthAccessTokenNotAvailableWithSharedOAuthKeys,
    InvalidOAuthClientIdOrSecret,
    InvalidScope,
    UserAlreadyConnectedToAnotherOAuthConnection,
    OuterOAuthTimeout,
    OAuthProviderNotFoundOrNotEnabled,
    AppleBundleIdNotConfigured,
    OAuthProviderAccountIdAlreadyUsedForSignIn,
    MultiFactorAuthenticationRequired,
    InvalidTotpCode,
    UserAuthenticationRequired,
    TeamMembershipAlreadyExists,
    ProjectPermissionRequired,
    TeamPermissionRequired,
    InvalidSharedOAuthProviderId,
    InvalidStandardOAuthProviderId,
    InvalidAuthorizationCode,
    InvalidAppleCredentials,
    TeamPermissionNotFound,
    OAuthProviderAccessDenied,
    OAuthProviderTemporarilyUnavailable,
    ContactChannelAlreadyUsedForAuthBySomeoneElse,
    InvalidPollingCodeError,
    ApiKeyNotValid,
    ApiKeyExpired,
    ApiKeyRevoked,
    WrongApiKeyType,
    EmailRenderingError,
    TemplateSourceRewriteError,
    RequiresCustomEmailServer,
    EmailCapacityBoostAlreadyActive,
    EmailNotEditable,
    ItemNotFound,
    ItemCustomerTypeDoesNotMatch,
    CustomerDoesNotExist,
    ProductDoesNotExist,
    ProductCustomerTypeDoesNotMatch,
    ProductAlreadyGranted,
    SubscriptionInvoiceNotFound,
    OneTimePurchaseNotFound,
    SubscriptionAlreadyRefunded,
    OneTimePurchaseAlreadyRefunded,
    TestModePurchaseNonRefundable,
    ItemQuantityInsufficientAmount,
    StripeAccountInfoNotFound,
    DefaultPaymentMethodRequired: createKnownErrorConstructor(KnownError, "DEFAULT_PAYMENT_METHOD_REQUIRED", (customerType, customerId)=>[
            400,
            "No default payment method is set for this customer.",
            {
                customer_type: customerType,
                customer_id: customerId
            }
        ], (json)=>[
            json.customer_type,
            json.customer_id
        ]),
    NewPurchasesBlocked: createKnownErrorConstructor(KnownError, "NEW_PURCHASES_BLOCKED", ()=>[
            403,
            "New purchases are currently blocked for this project. Please contact support for more information."
        ], ()=>[]),
    DataVaultStoreDoesNotExist,
    DataVaultStoreHashedKeyDoesNotExist,
    AnalyticsQueryTimeout,
    AnalyticsQueryError,
    AnalyticsNotEnabled
};
const knownErrorCodes = /* @__PURE__ */ new Set();
for (const [_, KnownError] of Object.entries(KnownErrors)){
    if (knownErrorCodes.has(KnownError.errorCode)) throw new Error(`Duplicate known error code: ${KnownError.errorCode}`);
    knownErrorCodes.add(KnownError.errorCode);
}
//#endregion
exports.KnownError = KnownError;
exports.KnownErrors = KnownErrors;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/rolldown-runtime-D6vf50IK.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") for(var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++){
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ((k)=>from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
//#endregion
Object.defineProperty(exports, "__toESM", {
    enumerable: true,
    get: function() {
        return __toESM;
    }
});
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/schema-fields.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const require_rolldown_runtime = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/rolldown-runtime-D6vf50IK.js [app-client] (ecmascript)");
let __utils_objects_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)");
let __utils_strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let __known_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/known-errors.js [app-client] (ecmascript)");
let __utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let yup = __turbopack_context__.r("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
yup = require_rolldown_runtime.__toESM(yup);
let __utils_bytes_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/bytes.js [app-client] (ecmascript)");
let __utils_country_codes_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/country-codes.js [app-client] (ecmascript)");
let __utils_currency_constants_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/currency-constants.js [app-client] (ecmascript)");
let __utils_env_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/env.js [app-client] (ecmascript)");
let __utils_http_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/http.js [app-client] (ecmascript)");
let __utils_oauth_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/oauth.js [app-client] (ecmascript)");
let __utils_urls_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/urls.js [app-client] (ecmascript)");
let __utils_uuids_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/uuids.js [app-client] (ecmascript)");
//#region src/schema-fields.ts
const MAX_IMAGE_SIZE_BASE64_BYTES = 1e6;
const PROTOTYPE_KEY = "__proto__";
function hasOwnPrototypeKey(value) {
    return typeof value === "object" && value !== null && Object.prototype.hasOwnProperty.call(value, PROTOTYPE_KEY);
}
const originalObjectSchemaCast = yup.ObjectSchema.prototype._cast;
yup.ObjectSchema.prototype._cast = function(value, options = {}) {
    if (!hasOwnPrototypeKey(value)) return originalObjectSchemaCast.call(this, value, options);
    const prototypeEntry = Object.getOwnPropertyDescriptor(value, PROTOTYPE_KEY).value;
    const withoutPrototypeKey = {};
    for (const key of Object.keys(value)){
        if (key === PROTOTYPE_KEY) continue;
        withoutPrototypeKey[key] = value[key];
    }
    const cast = originalObjectSchemaCast.call(this, withoutPrototypeKey, options);
    if ((options.stripUnknown ?? this.spec?.noUnknown) || typeof cast !== "object" || cast === null) return cast;
    Object.defineProperty(cast, PROTOTYPE_KEY, {
        value: prototypeEntry,
        writable: true,
        enumerable: true,
        configurable: true
    });
    return cast;
};
yup.addMethod(yup.string, "nonEmpty", function(message) {
    return this.test("non-empty", message ?? (({ path })=>`${path} must not be empty`), (value)=>{
        return value !== "";
    });
});
yup.addMethod(yup.Schema, "hasNested", function(path) {
    if (!path.match(/^[a-zA-Z0-9_$:-]*$/)) throw new __utils_errors_js.HexclaveAssertionError(`yupSchema.hasNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(path)}`);
    const schemaInfo = this.meta()?.hexclaveSchemaInfo;
    if (schemaInfo?.type === "record") return schemaInfo.keySchema.isValidSync(path);
    else if (schemaInfo?.type === "union") return schemaInfo.items.some((s)=>s.hasNested(path));
    else try {
        yup.reach(this, path);
        return true;
    } catch (e) {
        if (e instanceof Error && e.message.includes("The schema does not contain the path")) return false;
        throw e;
    }
});
yup.addMethod(yup.Schema, "getNested", function(path) {
    if (!path.match(/^[a-zA-Z0-9_$:-]*$/)) throw new __utils_errors_js.HexclaveAssertionError(`yupSchema.getNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(path)}`);
    if (!this.hasNested(path)) throw new __utils_errors_js.HexclaveAssertionError(`Tried to call yupSchema.getNested, but key is not present in the schema. Provided key: ${path}`, {
        path,
        schema: this
    });
    const schemaInfo = this.meta()?.hexclaveSchemaInfo;
    if (schemaInfo?.type === "record") return schemaInfo.valueSchema;
    else if (schemaInfo?.type === "union") return yupUnion(...schemaInfo.items.filter((s)=>s.hasNested(path)).map((s)=>s.getNested(path)));
    else return yup.reach(this, path);
});
async function yupValidate(schema, obj, options) {
    try {
        return await schema.validate(obj, {
            ...(0, __utils_objects_js.omit)(options ?? {}, [
                "currentUserId"
            ]),
            context: {
                ...options?.context,
                hexclaveAllowUserIdMe: options?.currentUserId !== void 0
            }
        });
    } catch (error) {
        if (error instanceof ReplaceFieldWithOwnUserId) {
            const currentUserId = options?.currentUserId;
            if (!currentUserId) throw new __known_errors_js.KnownErrors.CannotGetOwnUserWithoutUser();
            let pathRemaining = error.path;
            const fieldPath = [];
            while(pathRemaining.length > 0)if (pathRemaining.startsWith("[")) {
                const index = pathRemaining.indexOf("]");
                if (index < 0) throw new __utils_errors_js.HexclaveAssertionError("Invalid path");
                fieldPath.push(JSON.parse(pathRemaining.slice(1, index)));
                pathRemaining = pathRemaining.slice(index + 1);
            } else {
                let dotIndex = pathRemaining.indexOf(".");
                if (dotIndex === -1) dotIndex = pathRemaining.length;
                fieldPath.push(pathRemaining.slice(0, dotIndex));
                pathRemaining = pathRemaining.slice(dotIndex + 1);
            }
            const newObj = (0, __utils_objects_js.deepPlainClone)(obj);
            let it = newObj;
            for (const field of fieldPath.slice(0, -1)){
                if (!Object.prototype.hasOwnProperty.call(it, field)) throw new __utils_errors_js.HexclaveAssertionError(`Segment ${field} of path ${error.path} not found in object`);
                it = it[field];
            }
            it[fieldPath[fieldPath.length - 1]] = currentUserId;
            return await yupValidate(schema, newObj, options);
        }
        throw error;
    }
}
const _idDescription = (identify)=>`The unique identifier of the ${identify}`;
const _displayNameDescription = (identify)=>`Human-readable ${identify} display name. This is not a unique identifier.`;
const _clientMetaDataDescription = (identify)=>`Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.`;
const _clientReadOnlyMetaDataDescription = (identify)=>`Client read-only, server-writable metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client. The client can read this data, but cannot modify it. This is useful for things like subscription status.`;
const _profileImageUrlDescription = (identify)=>`URL of the profile image for ${identify}. Can be a Base64 encoded image. Must be smaller than 100KB. Please compress and crop to a square before passing in.`;
const _serverMetaDataDescription = (identify)=>`Server metadata. Used as a data store, only accessible from the server side. You can store secret information related to the ${identify} here.`;
const _atMillisDescription = (identify)=>`(the number of milliseconds since epoch, January 1, 1970, UTC)`;
const _createdAtMillisDescription = (identify)=>`The time the ${identify} was created ${_atMillisDescription(identify)}`;
const _signedUpAtMillisDescription = `The time the user signed up ${_atMillisDescription}`;
const _lastActiveAtMillisDescription = `The time the user was last active ${_atMillisDescription}`;
function yupString(...args) {
    return yup.string(...args).meta({
        hexclaveSchemaInfo: {
            type: "string"
        }
    });
}
function yupNumber(...args) {
    return yup.number(...args).meta({
        hexclaveSchemaInfo: {
            type: "number"
        }
    });
}
function yupBoolean(...args) {
    return yup.boolean(...args).meta({
        hexclaveSchemaInfo: {
            type: "boolean"
        }
    });
}
/**
* @deprecated, use number of milliseconds since epoch instead
*/ function yupDate(...args) {
    return yup.date(...args).meta({
        hexclaveSchemaInfo: {
            type: "date"
        }
    });
}
function _yupMixedInternal(...args) {
    return yup.mixed(...args);
}
function yupMixed(...args) {
    return _yupMixedInternal(...args).meta({
        hexclaveSchemaInfo: {
            type: "mixed"
        }
    });
}
function yupArray(...args) {
    return yup.array(...args).meta({
        hexclaveSchemaInfo: {
            type: "array"
        }
    });
}
function yupTuple(schemas) {
    if (schemas.length === 0) throw new Error("yupTuple must have at least one schema");
    return yup.tuple(schemas).meta({
        hexclaveSchemaInfo: {
            type: "tuple",
            items: schemas
        }
    });
}
function yupObjectWithAutoDefault(...args) {
    return yup.object(...args).test("no-unknown-object-properties", ({ path })=>`${path} contains unknown properties`, (value, context)=>{
        if (context.options.context?.noUnknownPathPrefixes?.some((prefix)=>context.path.startsWith(prefix))) {
            if (context.schema.spec.noUnknown !== false) {
                const availableKeys = new Set(Object.keys(context.schema.fields));
                const unknownKeys = Object.keys(value ?? {}).filter((key)=>!availableKeys.has(key));
                if (unknownKeys.length > 0) return context.createError({
                    message: `${context.path || "Object"} contains unknown properties: ${unknownKeys.join(", ")}`,
                    path: context.path,
                    params: {
                        unknownKeys,
                        availableKeys
                    }
                });
            }
        }
        return true;
    }).meta({
        hexclaveSchemaInfo: {
            type: "object"
        }
    });
}
function yupObject(...args) {
    return yupObjectWithAutoDefault(...args).default(void 0);
}
function yupNever() {
    return _yupMixedInternal().meta({
        hexclaveSchemaInfo: {
            type: "never"
        }
    }).test("never", "This value should never be reached", ()=>false);
}
function yupUnion(...args) {
    if (args.length === 0) throw new Error("yupUnion must have at least one schema");
    return _yupMixedInternal().meta({
        hexclaveSchemaInfo: {
            type: "union",
            items: args
        }
    }).test("is-one-of", "Invalid value", async (value, context)=>{
        if (value == null) return true;
        const errors = [];
        for (const schema of args)try {
            await yupValidate(schema, value, context.options);
            return true;
        } catch (e) {
            errors.push(e);
        }
        return context.createError({
            message: __utils_strings_js.deindent`
        ${context.path} is not matched by any of the provided schemas:
          ${errors.map((e, i)=>__utils_strings_js.deindent`
            Schema ${i}:
              ${e.errors.join("\n")}
          `).join("\n")}`,
            path: context.path
        });
    });
}
function yupRecord(keySchema, valueSchema) {
    return yupObject().meta({
        hexclaveSchemaInfo: {
            type: "record",
            keySchema,
            valueSchema
        }
    }).unknown(true).test("record", "${path} must be a record of valid values", async function(value, context) {
        if (value == null) return true;
        const { path, createError } = this;
        if (typeof value !== "object") return createError({
            message: `${path} must be an object`
        });
        for (const key of Object.keys(value)){
            await yupValidate(keySchema, key, context.options);
            try {
                const childOptions = {
                    abortEarly: context.options.abortEarly,
                    disableStackTrace: context.options.disableStackTrace,
                    recursive: context.options.recursive,
                    path: context.options.path,
                    strict: false,
                    stripUnknown: context.options.stripUnknown,
                    context: {
                        ...context.options.context,
                        path: path ? `${path}.${key}` : key
                    }
                };
                const validatedValue = await yupValidate(valueSchema, value[key], childOptions);
                Object.defineProperty(value, key, {
                    value: validatedValue,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            } catch (e) {
                return createError({
                    path: path ? `${path}.${key}` : key,
                    message: e.message
                });
            }
        }
        return true;
    });
}
function ensureObjectSchema(schema) {
    if (!(schema instanceof yup.ObjectSchema)) throw new __utils_errors_js.HexclaveAssertionError(`assertObjectSchema: schema is not an ObjectSchema: ${schema.describe().type}`);
    return schema;
}
const adaptSchema = yupMixed();
/**
* Yup's URL schema does not recognize some URLs (including `http://localhost`) as a valid URL. This schema is a workaround for that.
*/ const urlSchema = yupString().test({
    name: "no-spaces",
    message: (params)=>`${params.path} contains spaces`,
    test: (value)=>value == null || !value.includes(" ")
}).test({
    name: "url",
    message: (params)=>`${params.path} is not a valid URL`,
    test: (value)=>value == null || (0, __utils_urls_js.isValidUrl)(value)
});
/**
* URL schema that supports wildcard patterns in hostnames (e.g., "https://*.example.com", "http://*:8080")
*/ const wildcardUrlSchema = yupString().test({
    name: "no-spaces",
    message: (params)=>`${params.path} contains spaces`,
    test: (value)=>value == null || !value.includes(" ")
}).test({
    name: "wildcard-url",
    message: (params)=>`${params.path} is not a valid URL or wildcard URL pattern`,
    test: (value)=>{
        if (value == null) return true;
        if (!value.includes("*")) return (0, __utils_urls_js.isValidUrl)(value);
        try {
            const PLACEHOLDER = "wildcard-placeholder";
            const normalizedUrl = value.replace(/\*/g, PLACEHOLDER);
            const url = new URL(normalizedUrl);
            if (url.username.includes(PLACEHOLDER) || url.password.includes(PLACEHOLDER) || url.pathname.includes(PLACEHOLDER) || url.search.includes(PLACEHOLDER) || url.hash.includes(PLACEHOLDER)) return false;
            if (url.protocol !== "http:" && url.protocol !== "https:") return false;
            return (0, __utils_urls_js.isValidHostnameWithWildcards)(url.hostname.split(PLACEHOLDER).join("*"));
        } catch (e) {
            return false;
        }
    }
});
const wildcardProtocolAndDomainSchema = wildcardUrlSchema.test({
    name: "is-protocol-and-domain",
    message: (params)=>`${params.path} must be a protocol and domain (with optional port) without any path, query parameters, or hash`,
    test: (value)=>{
        if (value == null) return true;
        try {
            const normalized = value.replace(/\*/g, "wildcard-placeholder");
            const url = new URL(normalized);
            return url.protocol !== "" && url.hostname !== "" && url.pathname === "/" && url.search === "" && url.hash === "";
        } catch (e) {
            return false;
        }
    }
});
const jsonSchema = yupMixed().nullable().defined().transform((value)=>JSON.parse(JSON.stringify(value)));
const jsonStringSchema = yupString().test("json", (params)=>`${params.path} is not valid JSON`, (value)=>{
    if (value == null) return true;
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
});
const jsonStringOrEmptySchema = yupString().test("json", (params)=>`${params.path} is not valid JSON`, (value)=>{
    if (!value) return true;
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
});
const base64Schema = yupString().test("is-base64", (params)=>`${params.path} is not valid base64`, (value)=>{
    if (value == null) return true;
    return (0, __utils_bytes_js.isBase64)(value);
});
const passwordSchema = yupString().max(70);
const countryCodeSchema = yupString().transform((value)=>typeof value === "string" ? (0, __utils_country_codes_js.normalizeCountryCode)(value) : value).test({
    name: "country-code",
    message: (params)=>`${params.path} must be a 2-letter country code`,
    test: (value)=>value == null || (0, __utils_country_codes_js.isValidCountryCode)(value)
});
const intervalSchema = yupTuple([
    yupNumber().min(1).integer().defined(),
    yupString().oneOf([
        "millisecond",
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "year"
    ]).defined()
]);
const dayIntervalSchema = yupTuple([
    yupNumber().min(1).integer().defined(),
    yupString().oneOf([
        "day",
        "week",
        "month",
        "year"
    ]).defined()
]);
const intervalOrNeverSchema = yupUnion(intervalSchema.defined(), yupString().oneOf([
    "never"
]).defined());
const dayIntervalOrNeverSchema = yupUnion(dayIntervalSchema.defined(), yupString().oneOf([
    "never"
]).defined());
/**
* This schema is useful for fields where the user can specify the ID, such as price IDs. It is particularly common
* for IDs in the config schema.
*
* Valid IDs:
* - Must contain only letters, numbers, underscores, and hyphens
* - Must not start with a hyphen
* - Maximum length of 63 characters
*/ const USER_SPECIFIED_ID_PATTERN = /^[a-zA-Z0-9_][a-zA-Z0-9_-]*$/;
const USER_SPECIFIED_ID_MAX_LENGTH = 63;
/**
* Ids that cannot be used as an object KEY, which is what these ids are for.
*
* `__proto__` is the one that actually breaks: `obj["__proto__"] = value` on a
* plain object invokes the prototype setter instead of creating an own
* property, so the value silently disappears — and Prisma's JSON serializer
* strips the key even when the object is built prototype-less, so a record
* keyed by one cannot be stored at all. Refusing it at the door turns a
* confusing mid-flight failure ("no image was built for __proto__", a service
* stuck at "pending" whatever the runtime reports) into a message that names
* the problem.
*
* `constructor` and `prototype` assign cleanly and are listed for the same
* reason a reserved-word list exists at all: they are a trap for the next
* consumer that reaches for `in` or a prototype-bearing lookup.
*/ const RESERVED_USER_SPECIFIED_IDS = /* @__PURE__ */ new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
/**
* Checks if the given string is a valid user-specified ID.
*/ function isValidUserSpecifiedId(id) {
    return id.length > 0 && id.length <= 63 && USER_SPECIFIED_ID_PATTERN.test(id) && !RESERVED_USER_SPECIFIED_IDS.has(id);
}
/**
* Gets the error message for an invalid user-specified ID.
*/ function getUserSpecifiedIdErrorMessage(idName) {
    return `${idName} must contain only letters, numbers, underscores, and hyphens, and not start with a hyphen, and must not be one of ${[
        ...RESERVED_USER_SPECIFIED_IDS
    ].join(", ")}`;
}
/**
* Sanitizes user input to create a valid user-specified ID.
* Converts to lowercase and replaces invalid characters with hyphens.
* Strips leading hyphens.
*/ function sanitizeUserSpecifiedId(input) {
    return input.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9_-]/g, "").replace(/^-+/, "");
}
const userSpecifiedIdSchema = (idName)=>yupString().max(63).matches(USER_SPECIFIED_ID_PATTERN, getUserSpecifiedIdErrorMessage(idName)).test("not-reserved", `${idName} must not be a reserved name (${[
        ...RESERVED_USER_SPECIFIED_IDS
    ].join(", ")})`, (value)=>value == null || !RESERVED_USER_SPECIFIED_IDS.has(value));
/**
* Validates that a value is a decimal string like `"9.99"` or `"1000"` (see `MoneyAmount`).
*
* Currency amounts are always strings in `"<integer>"` or `"<integer>.<decimals>"` format — never
* cent integers or minor-unit numbers. For example, `"9.99"` means $9.99, not `999`.
*/ const moneyAmountSchema = (currency)=>yupString().test("money-amount", "Invalid money amount", (value, context)=>{
        if (value == null) return true;
        const match = value.match(/^([0-9]+)(\.([0-9]+))?$/);
        if (!match) return context.createError({
            message: "Money amount must be in the format of <number> or <number>.<number>"
        });
        const whole = match[1];
        const decimals = match[3];
        if (decimals && decimals.length > currency.decimals) return context.createError({
            message: `Too many decimals; ${currency.code} only has ${currency.decimals} decimals`
        });
        if (whole !== "0" && whole.startsWith("0")) return context.createError({
            message: "Money amount must not have leading zeros"
        });
        return true;
    });
/**
* A stricter email schema that does some additional checks for UX input. (Some emails are allowed by the spec, for
* example `test@localhost` or `abc@gmail`, but almost certainly a user input error.)
*
* Note that some users in the DB have an email that doesn't match this regex, so most of the time you should use
* `emailSchema` instead until we do the DB migration.
*/ const strictEmailSchema = (message)=>yupString().email(message).max(256).matches(/^[^.]+(\.[^.]+)*@.*\.[^.][^.]+$/, message);
const emailSchema = yupString().email();
const clientOrHigherAuthTypeSchema = yupString().oneOf([
    "client",
    "server",
    "admin"
]).defined();
const serverOrHigherAuthTypeSchema = yupString().oneOf([
    "server",
    "admin"
]).defined();
const adminAuthTypeSchema = yupString().oneOf([
    "admin"
]).defined();
const projectIdSchema = yupString().test((v)=>v === void 0 || v === "internal" || (0, __utils_uuids_js.isUuid)(v)).meta({
    openapiField: {
        description: _idDescription("project"),
        exampleValue: "e0b52f4d-dece-408c-af49-d23061bb0f8d"
    }
});
const projectBranchIdSchema = yupString().nonEmpty().max(255).meta({
    openapiField: {
        description: _idDescription("project branch"),
        exampleValue: "main"
    }
});
const projectDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("project"),
        exampleValue: "MyMusic"
    }
});
const projectLogoUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the logo for the project. This is usually a close to 1:1 image of the company logo.",
        exampleValue: "https://example.com/logo.png"
    }
});
const projectLogoFullUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the full logo for the project. This is usually a vertical image with the logo and the company name.",
        exampleValue: "https://example.com/full-logo.png"
    }
});
const projectLogoDarkModeUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the dark mode logo for the project. This is usually a close to 1:1 image of the company logo optimized for dark backgrounds.",
        exampleValue: "https://example.com/logo-dark.png"
    }
});
const projectLogoFullDarkModeUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: "URL of the dark mode full logo for the project. This is usually a vertical image with the logo and the company name optimized for dark backgrounds.",
        exampleValue: "https://example.com/full-logo-dark.png"
    }
});
const projectDescriptionSchema = yupString().nullable().meta({
    openapiField: {
        description: "A human readable description of the project",
        exampleValue: "A music streaming service"
    }
});
const projectCreatedAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _createdAtMillisDescription("project"),
        exampleValue: 163e10
    }
});
const projectIsProductionModeSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the project is in production mode",
        exampleValue: true
    }
});
const projectOnboardingStatusValues = [
    "config_choice",
    "apps_selection",
    "auth_setup",
    "domain_setup",
    "email_theme_setup",
    "payments_setup",
    "welcome",
    "completed"
];
const projectOnboardingStatusSchema = yupString().oneOf(projectOnboardingStatusValues).meta({
    openapiField: {
        description: "The current dashboard onboarding stage for this project.",
        exampleValue: "config_choice"
    }
});
const projectConfigIdSchema = yupString().meta({
    openapiField: {
        description: _idDescription("project config"),
        exampleValue: "d09201f0-54f5-40bd-89ff-6d1815ddad24"
    }
});
const projectAllowLocalhostSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether localhost is allowed as a domain for this project. Should only be allowed in development mode",
        exampleValue: true
    }
});
const projectCreateTeamOnSignUpSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether a team should be created for each user that signs up",
        exampleValue: true
    }
});
const projectMagicLinkEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether magic link authentication is enabled for this project",
        exampleValue: true
    }
});
const projectPasskeyEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether passkey authentication is enabled for this project",
        exampleValue: true
    }
});
const projectClientTeamCreationEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether client users can create teams",
        exampleValue: true
    }
});
const projectClientUserDeletionEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether client users can delete their own account from the client",
        exampleValue: true
    }
});
const projectSignUpEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether users can sign up new accounts, or whether they are only allowed to sign in to existing accounts. Regardless of this option, the server API can always create new users with the `POST /users` endpoint.",
        exampleValue: true
    }
});
const projectCredentialEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether email password authentication is enabled for this project",
        exampleValue: true
    }
});
const oauthIdSchema = yupString().oneOf(__utils_oauth_js.allProviders).meta({
    openapiField: {
        description: `OAuth provider ID, one of ${__utils_oauth_js.allProviders.map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "google"
    }
});
const oauthEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the OAuth provider is enabled. If an provider is first enabled, then disabled, it will be shown in the list but with enabled=false",
        exampleValue: true
    }
});
const oauthTypeSchema = yupString().oneOf([
    "shared",
    "standard"
]).meta({
    openapiField: {
        description: "OAuth provider type, one of shared, standard. \"shared\" uses Stack shared OAuth keys and it is only meant for development. \"standard\" uses your own OAuth keys and will show your logo and company name when signing in with the provider.",
        exampleValue: "standard"
    }
});
const oauthClientIdSchema = yupString().meta({
    openapiField: {
        description: "OAuth client ID. Needs to be specified when using type=\"standard\"",
        exampleValue: "google-oauth-client-id"
    }
});
const oauthClientSecretSchema = yupString().meta({
    openapiField: {
        description: "OAuth client secret. Needs to be specified when using type=\"standard\"",
        exampleValue: "google-oauth-client-secret"
    }
});
const oauthCustomCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The OAuth redirect/callback URL sent to the provider. When omitted, the default callback URL is used. Cannot be set for shared providers.",
        exampleValue: "https://api.hexclave.com/api/v1/auth/oauth/callback/google"
    }
});
const oauthFacebookConfigIdSchema = yupString().meta({
    openapiField: {
        description: "The configuration id for Facebook business login (for things like ads and marketing). This is only required if you are using the standard OAuth with Facebook and you are using Facebook business login."
    }
});
const oauthMicrosoftTenantIdSchema = yupString().meta({
    openapiField: {
        description: "The Microsoft tenant id for Microsoft directory. This is only required if you are using the standard OAuth with Microsoft and you have an Azure AD tenant."
    }
});
const oauthAppleTeamIdSchema = yupString().meta({
    openapiField: {
        description: "Apple Developer Team ID used to mint a client secret for Sign in with Apple."
    }
});
const oauthAppleKeyIdSchema = yupString().meta({
    openapiField: {
        description: "Apple private key ID used to mint a client secret for Sign in with Apple."
    }
});
const oauthApplePrivateKeySchema = yupString().meta({
    openapiField: {
        description: "Apple Sign in with Apple private key contents in .p8 PEM format."
    }
});
const oauthAppleBundleIdsSchema = yupArray(yupString().defined()).meta({
    openapiField: {
        description: "Apple Bundle IDs for native iOS/macOS apps. Required for native Sign In with Apple (in addition to web Apple OAuth which uses the Client ID/Services ID).",
        exampleValue: [
            "com.example.ios",
            "com.example.macos"
        ]
    }
});
const oauthAppleBundleIdSchema = yupString().defined().meta({
    openapiField: {
        description: "Apple Bundle ID for native iOS/macOS apps.",
        exampleValue: "com.example.ios"
    }
});
const oauthAccountMergeStrategySchema = yupString().oneOf([
    "link_method",
    "raise_error",
    "allow_duplicates"
]).meta({
    openapiField: {
        description: "Determines how to handle OAuth logins that match an existing user by email. `link_method` adds the OAuth method to the existing user. `raise_error` rejects the login with an error. `allow_duplicates` creates a new user.",
        exampleValue: "link_method"
    }
});
const oauthIssuerUrlSchema = urlSchema.meta({
    openapiField: {
        description: "OIDC issuer URL for custom OIDC providers. Must support OIDC discovery (/.well-known/openid-configuration). Only used when type is \"custom_oidc\".",
        exampleValue: "https://accounts.google.com"
    }
});
const oauthScopeSchema = yupString().meta({
    openapiField: {
        description: "Space-separated OAuth scopes to request from the custom OIDC provider. Defaults to \"openid email profile\" if not specified.",
        exampleValue: "openid email profile"
    }
});
const emailTypeSchema = yupString().oneOf([
    "shared",
    "standard"
]).meta({
    openapiField: {
        description: "Email provider type, one of shared, standard. \"shared\" uses Stack shared email provider and it is only meant for development. \"standard\" uses your own email server and will have your email address as the sender.",
        exampleValue: "standard"
    }
});
const emailSenderNameSchema = yupString().meta({
    openapiField: {
        description: "Email sender name. Needs to be specified when using type=\"standard\"",
        exampleValue: "Stack"
    }
});
const emailHostSchema = yupString().meta({
    openapiField: {
        description: "Email host. Needs to be specified when using type=\"standard\"",
        exampleValue: "smtp.your-domain.com"
    }
});
const emailPortSchema = yupNumber().min(0).max(65535).meta({
    openapiField: {
        description: "Email port. Needs to be specified when using type=\"standard\"",
        exampleValue: 587
    }
});
const emailUsernameSchema = yupString().meta({
    openapiField: {
        description: "Email username. Needs to be specified when using type=\"standard\"",
        exampleValue: "smtp-email"
    }
});
const emailSenderEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Email sender email. Needs to be specified when using type=\"standard\"",
        exampleValue: "example@your-domain.com"
    }
});
const emailPasswordSchema = yupString().max(256).meta({
    openapiField: {
        description: "Email password. Needs to be specified when using type=\"standard\"",
        exampleValue: "your-email-password"
    }
});
const handlerPathSchema = yupString().test("is-handler-path", "Handler path must start with /", (value)=>value?.startsWith("/")).meta({
    openapiField: {
        description: "Handler path. If you did not setup a custom handler path, it should be \"/handler\" by default. It needs to start with /",
        exampleValue: "/handler"
    }
});
const emailThemeSchema = yupString().meta({
    openapiField: {
        description: "Email theme id for the project. Determines the visual style of emails sent by the project."
    }
});
const emailThemeListSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Email theme name",
            exampleValue: "Default Light"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Email theme source code tsx component"
        }
    }).defined()
})).meta({
    openapiField: {
        description: "Record of email theme IDs to their display name and source code"
    }
});
const templateThemeIdSchema = yupMixed().test((v)=>v === void 0 || v === false || v === null || typeof v === "string" && (0, __utils_uuids_js.isUuid)(v)).meta({
    openapiField: {
        description: "Email theme id for the template"
    }
}).optional();
const emailTemplateListSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Email template name",
            exampleValue: "Email Verification"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Email template source code tsx component"
        }
    }).defined(),
    themeId: templateThemeIdSchema
})).meta({
    openapiField: {
        description: "Record of email template IDs to their display name and source code"
    }
});
const customDashboardsSchema = yupRecord(yupString().uuid(), yupObject({
    displayName: yupString().meta({
        openapiField: {
            description: "Custom dashboard name",
            exampleValue: "User Growth Dashboard"
        }
    }).defined(),
    tsxSource: yupString().meta({
        openapiField: {
            description: "Custom dashboard source code tsx component"
        }
    }).defined()
})).meta({
    openapiField: {
        description: "Record of custom dashboard IDs to their display name and source code"
    }
});
const customerTypeSchema = yupString().oneOf([
    "user",
    "team",
    "custom"
]);
const validateHasAtLeastOneSupportedCurrency = (value, context)=>{
    if (!value) return true;
    if (Object.keys(value).filter((key)=>__utils_currency_constants_js.SUPPORTED_CURRENCIES.some((c)=>c.code === key)).length === 0) return context.createError({
        message: "At least one currency is required"
    });
    return true;
};
/**
* Schema for a single product price. Each currency field (USD, EUR, etc.) is a decimal string
* like `"9.99"` or `"1000"` — never cent integers. See `MoneyAmount` for the exact format.
*/ const productPriceSchema = yupObject({
    ...(0, __utils_objects_js.typedFromEntries)(__utils_currency_constants_js.SUPPORTED_CURRENCIES.map((currency)=>[
            currency.code,
            moneyAmountSchema(currency).optional()
        ])),
    interval: dayIntervalSchema.optional(),
    serverOnly: yupBoolean(),
    freeTrial: dayIntervalSchema.optional()
}).test("at-least-one-currency", (value, context)=>validateHasAtLeastOneSupportedCurrency(value, context));
const pricesSchema = yupRecord(userSpecifiedIdSchema("priceId"), productPriceSchema);
const productSchema = yupObject({
    displayName: yupString(),
    productLineId: userSpecifiedIdSchema("productLineId").optional().meta({
        openapiField: {
            description: "The ID of the product line this product belongs to. Within a product line, all products are mutually exclusive unless they are an add-on to another product in the product line.",
            exampleValue: "product-line-id"
        }
    }),
    isAddOnTo: yupUnion(yupBoolean().isFalse(), yupRecord(userSpecifiedIdSchema("productId"), yupBoolean().isTrue().defined())).optional().meta({
        openapiField: {
            description: "The products that this product is an add-on to. If this is set, the customer must already have one of the products in the record to be able to purchase this product.",
            exampleValue: {
                "product-id": true
            }
        }
    }),
    customerType: customerTypeSchema.defined(),
    freeTrial: dayIntervalSchema.optional(),
    serverOnly: yupBoolean(),
    stackable: yupBoolean(),
    prices: pricesSchema.defined(),
    includedItems: yupRecord(userSpecifiedIdSchema("itemId"), yupObject({
        quantity: yupNumber().defined(),
        repeat: dayIntervalOrNeverSchema.optional(),
        expires: yupString().oneOf([
            "never",
            "when-purchase-expires",
            "when-repeated"
        ]).optional()
    }))
});
const productMetadataExample = {
    featureFlag: true,
    source: "marketing-campaign"
};
const productClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("product"),
        exampleValue: productMetadataExample
    }
});
const productSchemaWithMetadata = productSchema.concat(yupObject({
    clientMetadata: productClientMetadataSchema.optional(),
    clientReadOnlyMetadata: productClientReadOnlyMetadataSchema.optional(),
    serverMetadata: productServerMetadataSchema.optional()
}));
const inlineProductSchema = yupObject({
    display_name: yupString().defined(),
    customer_type: customerTypeSchema.defined(),
    free_trial: dayIntervalSchema.optional(),
    server_only: yupBoolean().default(true),
    stackable: yupBoolean().default(false),
    prices: yupRecord(userSpecifiedIdSchema("priceId"), yupObject({
        ...(0, __utils_objects_js.typedFromEntries)(__utils_currency_constants_js.SUPPORTED_CURRENCIES.map((currency)=>[
                currency.code,
                moneyAmountSchema(currency).optional()
            ])),
        interval: dayIntervalSchema.optional(),
        free_trial: dayIntervalSchema.optional()
    }).test("at-least-one-currency", (value, context)=>validateHasAtLeastOneSupportedCurrency(value, context))),
    included_items: yupRecord(userSpecifiedIdSchema("itemId"), yupObject({
        quantity: yupNumber(),
        repeat: dayIntervalOrNeverSchema.optional(),
        expires: yupString().oneOf([
            "never",
            "when-purchase-expires",
            "when-repeated"
        ]).optional()
    })),
    client_metadata: productClientMetadataSchema.optional(),
    client_read_only_metadata: productClientReadOnlyMetadataSchema.optional(),
    server_metadata: productServerMetadataSchema.optional()
});
var ReplaceFieldWithOwnUserId = class extends Error {
    constructor(path){
        super(`This error should be caught by whoever validated the schema, and the field in the path '${path}' should be replaced with the current user's id. This is a workaround to yup not providing access to the context inside the transform function.`);
        this.path = path;
    }
};
const userIdMeSentinelUuid = "cad564fd-f81b-43f4-b390-98abf3fcc17e";
const userIdOrMeSchema = yupString().uuid().transform((v)=>{
    if (v === "me") return userIdMeSentinelUuid;
    else return v;
}).test((v, context)=>{
    if (!("hexclaveAllowUserIdMe" in (context.options.context ?? {}))) throw new __utils_errors_js.HexclaveAssertionError("userIdOrMeSchema is not allowed in this context. Make sure you're using yupValidate from schema-fields.ts to validate, instead of schema.validate(...).");
    if (!context.options.context?.hexclaveAllowUserIdMe) throw new __utils_errors_js.HexclaveAssertionError("userIdOrMeSchema is not allowed in this context. Make sure you're passing in the currentUserId option in yupValidate.");
    if (v === userIdMeSentinelUuid) throw new ReplaceFieldWithOwnUserId(context.path);
    return true;
}).meta({
    openapiField: {
        description: "The ID of the user, or the special value `me` for the currently authenticated user",
        exampleValue: "3241a285-8329-4d69-8f3d-316e08cf140c"
    }
});
const userIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("user"),
        exampleValue: "3241a285-8329-4d69-8f3d-316e08cf140c"
    }
});
const primaryEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Primary email",
        exampleValue: "johndoe@example.com"
    }
});
const primaryEmailAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the primary email is used for authentication. If this is set to `false`, the user will not be able to sign in with the primary email with password or OTP",
        exampleValue: true
    }
});
const primaryEmailVerifiedSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the primary email has been verified to belong to this user",
        exampleValue: true
    }
});
const userDisplayNameSchema = yupString().nullable().max(256).meta({
    openapiField: {
        description: _displayNameDescription("user"),
        exampleValue: "John Doe"
    }
});
const selectedTeamIdSchema = yupString().uuid().meta({
    openapiField: {
        description: "ID of the team currently selected by the user",
        exampleValue: "team-id"
    }
});
const profileImageUrlSchema = urlSchema.max(MAX_IMAGE_SIZE_BASE64_BYTES).meta({
    openapiField: {
        description: _profileImageUrlDescription("user"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const signedUpAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _signedUpAtMillisDescription,
        exampleValue: 163e10
    }
});
const userClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("user"),
        exampleValue: {
            key: "value"
        }
    }
});
const userOAuthProviderSchema = yupObject({
    id: yupString().defined(),
    type: yupString().oneOf(__utils_oauth_js.allProviders).defined(),
    provider_user_id: yupString().defined()
});
const userLastActiveAtMillisSchema = yupNumber().nullable().meta({
    openapiField: {
        description: _lastActiveAtMillisDescription,
        exampleValue: 163e10
    }
});
const userPasskeyAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has passkeys enabled",
        exampleValue: false
    }
});
const userOtpAuthEnabledSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has OTP/magic link enabled. ",
        exampleValue: true
    }
});
const userOtpAuthEnabledMutationSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has OTP/magic link enabled. Note that only accounts with verified emails can sign-in with OTP.",
        exampleValue: true
    }
});
const userHasPasswordSchema = yupBoolean().meta({
    openapiField: {
        hidden: true,
        description: "Whether the user has a password set. If the user does not have a password set, they will not be able to sign in with email/password.",
        exampleValue: true
    }
});
const userPasswordMutationSchema = passwordSchema.nullable().meta({
    openapiField: {
        description: "Sets the user's password. Doing so revokes all current sessions.",
        exampleValue: "my-new-password"
    }
}).max(70);
const userPasswordHashMutationSchema = yupString().nonEmpty().meta({
    openapiField: {
        description: "If `password` is not given, sets the user's password hash to the given string in Modular Crypt Format (ex.: `$2a$10$VIhIOofSMqGdGlL4wzE//e.77dAQGqNtF/1dT7bqCrVtQuInWy2qi`). Doing so revokes all current sessions."
    }
});
const userTotpSecretMutationSchema = base64Schema.nullable().meta({
    openapiField: {
        description: "Enables 2FA and sets a TOTP secret for the user. Set to null to disable 2FA.",
        exampleValue: "dG90cC1zZWNyZXQ="
    }
});
const restrictedReasonTypes = [
    "anonymous",
    "email_not_verified",
    "restricted_by_administrator"
];
const restrictedReasonSchema = yupObject({
    type: yupString().oneOf(restrictedReasonTypes).defined()
});
const accessTokenPayloadSchema = yupObject({
    sub: yupString().defined(),
    exp: yupNumber().optional(),
    iat: yupNumber().defined(),
    iss: yupString().defined(),
    aud: yupString().defined(),
    project_id: yupString().defined(),
    branch_id: yupString().defined(),
    refresh_token_id: yupString().defined(),
    role: yupString().oneOf([
        "authenticated"
    ]).defined(),
    name: yupString().defined().nullable(),
    email: yupString().defined().nullable(),
    email_verified: yupBoolean().defined(),
    selected_team_id: yupString().defined().nullable(),
    signed_up_at: yupNumber().defined(),
    is_anonymous: yupBoolean().defined(),
    is_restricted: yupBoolean().defined(),
    restricted_reason: restrictedReasonSchema.defined().nullable(),
    requires_totp_mfa: yupBoolean().defined()
});
const signInEmailSchema = strictEmailSchema(void 0).meta({
    openapiField: {
        description: "The email to sign in with.",
        exampleValue: "johndoe@example.com"
    }
});
const emailOtpSignInCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct the magic link from. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/auth/otp/sign-in` endpoint.",
        exampleValue: "https://example.com/handler/magic-link-callback"
    }
});
const emailVerificationCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct a verification link for the verification e-mail. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/contact-channels/verify` endpoint.",
        exampleValue: "https://example.com/handler/email-verification"
    }
});
const accessTokenResponseSchema = yupString().meta({
    openapiField: {
        description: "Short-lived access token that can be used to authenticate the user",
        exampleValue: "eyJhmMiJB2TO...diI4QT"
    }
});
const refreshTokenResponseSchema = yupString().meta({
    openapiField: {
        description: "Long-lived refresh token that can be used to obtain a new access token",
        exampleValue: "i8ns3aq2...14y"
    }
});
const signInResponseSchema = yupObject({
    refresh_token: refreshTokenResponseSchema.defined(),
    access_token: accessTokenResponseSchema.defined(),
    is_new_user: yupBoolean().meta({
        openapiField: {
            description: "Whether the user is a new user",
            exampleValue: true
        }
    }).defined(),
    user_id: userIdSchema.defined()
});
const teamSystemPermissions = [
    "$update_team",
    "$delete_team",
    "$read_members",
    "$remove_members",
    "$invite_members",
    "$manage_api_keys"
];
const permissionDefinitionIdSchema = yupString().matches(/^\$?[a-z0-9_:]+$/, "Only lowercase letters, numbers, \":\", \"_\" and optional \"$\" at the beginning are allowed").test("is-system-permission", "System permissions must start with a dollar sign", (value, ctx)=>{
    if (!value) return true;
    if (value.startsWith("$") && !teamSystemPermissions.includes(value)) return ctx.createError({
        message: "Invalid system permission"
    });
    return true;
}).meta({
    openapiField: {
        description: `The permission ID used to uniquely identify a permission. Can either be a custom permission with lowercase letters, numbers, \`:\`, and \`_\` characters, or one of the system permissions: ${teamSystemPermissions.map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "read_secret_info"
    }
});
const customPermissionDefinitionIdSchema = yupString().matches(/^[a-z0-9_:]+$/, "Only lowercase letters, numbers, \":\", \"_\" are allowed").meta({
    openapiField: {
        description: "The permission ID used to uniquely identify a permission. Can only contain lowercase letters, numbers, \":\", and \"_\" characters",
        exampleValue: "read_secret_info"
    }
});
const teamPermissionDescriptionSchema = yupString().meta({
    openapiField: {
        description: "A human-readable description of the permission",
        exampleValue: "Read secret information"
    }
});
const containedPermissionIdsSchema = yupArray(permissionDefinitionIdSchema.defined()).meta({
    openapiField: {
        description: "The IDs of the permissions that are contained in this permission",
        exampleValue: [
            "read_public_info"
        ]
    }
});
const teamIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("team"),
        exampleValue: "ad962777-8244-496a-b6a2-e0c6a449c79e"
    }
});
const teamDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("team"),
        exampleValue: "My Team"
    }
});
const teamProfileImageUrlSchema = urlSchema.max(1e6).meta({
    openapiField: {
        description: _profileImageUrlDescription("team"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const teamClientMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamClientReadOnlyMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _clientReadOnlyMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamServerMetadataSchema = jsonSchema.meta({
    openapiField: {
        description: _serverMetaDataDescription("team"),
        exampleValue: {
            key: "value"
        }
    }
});
const teamCreatedAtMillisSchema = yupNumber().meta({
    openapiField: {
        description: _createdAtMillisDescription("team"),
        exampleValue: 163e10
    }
});
const teamInvitationEmailSchema = emailSchema.meta({
    openapiField: {
        description: "The email of the user to invite.",
        exampleValue: "johndoe@example.com"
    }
});
const teamInvitationCallbackUrlSchema = urlSchema.meta({
    openapiField: {
        description: "The base callback URL to construct an invite link with. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/team-invitations/accept` endpoint.",
        exampleValue: "https://example.com/handler/team-invitation"
    }
});
const teamCreatorUserIdSchema = userIdOrMeSchema.meta({
    openapiField: {
        description: "The ID of the creator of the team. If not specified, the user will not be added to the team. Can be either \"me\" or the ID of the user. Only used on the client side.",
        exampleValue: "me"
    }
});
const teamMemberDisplayNameSchema = yupString().meta({
    openapiField: {
        description: _displayNameDescription("team member") + " Note that this is separate from the display_name of the user.",
        exampleValue: "John Doe"
    }
});
const teamMemberProfileImageUrlSchema = urlSchema.max(1e6).meta({
    openapiField: {
        description: _profileImageUrlDescription("team member"),
        exampleValue: "https://example.com/image.jpg"
    }
});
const contactChannelIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("contact channel"),
        exampleValue: "b3d396b8-c574-4c80-97b3-50031675ceb2"
    }
});
const contactChannelTypeSchema = yupString().oneOf([
    "email"
]).meta({
    openapiField: {
        description: `The type of the contact channel. Currently only "email" is supported.`,
        exampleValue: "email"
    }
});
const contactChannelValueSchema = yupString().when("type", {
    is: "email",
    then: (schema)=>schema.email()
}).meta({
    openapiField: {
        description: "The value of the contact channel. For email, this should be a valid email address.",
        exampleValue: "johndoe@example.com"
    }
});
const contactChannelUsedForAuthSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel is used for authentication. If this is set to `true`, the user will be able to sign in with the contact channel with password or OTP.",
        exampleValue: true
    }
});
const contactChannelIsVerifiedSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel has been verified. If this is set to `true`, the contact channel has been verified to belong to the user.",
        exampleValue: true
    }
});
const contactChannelIsPrimarySchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the contact channel is the primary contact channel. If this is set to `true`, it will be used for authentication and notifications by default.",
        exampleValue: true
    }
});
const oauthProviderIdSchema = yupString().uuid().meta({
    openapiField: {
        description: _idDescription("OAuth provider"),
        exampleValue: "b3d396b8-c574-4c80-97b3-50031675ceb2"
    }
});
const oauthProviderEmailSchema = emailSchema.meta({
    openapiField: {
        description: "Email of the OAuth provider. This is used to display and identify the OAuth provider in the UI.",
        exampleValue: "test@gmail.com"
    }
});
const oauthProviderTypeSchema = yupString().oneOf(__utils_oauth_js.allProviders).meta({
    openapiField: {
        description: `OAuth provider type, one of ${__utils_oauth_js.allProviders.map((x)=>`\`${x}\``).join(", ")}`,
        exampleValue: "google"
    }
});
const oauthProviderAllowSignInSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the user can use this OAuth provider to sign in. Only one OAuth provider per type can have this set to `true`.",
        exampleValue: true
    }
});
const oauthProviderAllowConnectedAccountsSchema = yupBoolean().meta({
    openapiField: {
        description: "Whether the user can use this OAuth provider as connected account. Multiple OAuth providers per type can have this set to `true`.",
        exampleValue: true
    }
});
const oauthProviderAccountIdSchema = yupString().meta({
    openapiField: {
        description: "Account ID of the OAuth provider. This uniquely identifies the account on the provider side.",
        exampleValue: "google-account-id-12345"
    }
});
const oauthProviderProviderConfigIdSchema = yupString().meta({
    openapiField: {
        description: "Provider config ID of the OAuth provider. This uniquely identifies the provider config on config.json file",
        exampleValue: "google"
    }
});
const configAgentSafeErrorMessages = [
    "The config agent failed to apply the change.",
    "Sandbox session expired. Please retry the update.",
    "Failed to commit and push the config changes.",
    "The GitHub branch changed before the config commit could be pushed. Retry the update to apply the same changes on the latest branch."
];
const configAgentSafeErrorMessageSchema = yupString().oneOf(configAgentSafeErrorMessages);
const basicAuthorizationHeaderSchema = yupString().test("is-basic-authorization-header", "Authorization header must be in the format \"Basic <base64>\"", (value)=>{
    if (!value) return true;
    return (0, __utils_http_js.decodeBasicAuthorizationHeader)(value) !== null;
});
const neonAuthorizationHeaderSchema = basicAuthorizationHeaderSchema.test("is-authorization-header", "Invalid client_id:client_secret values; did you use the correct values for the integration?", (value)=>{
    if (!value) return true;
    const decoded = (0, __utils_http_js.decodeBasicAuthorizationHeader)(value);
    if (decoded === null) return true;
    const [clientId, clientSecret] = decoded;
    for (const neonClientConfig of JSON.parse((0, __utils_env_js.getProcessEnv)("STACK_INTEGRATION_CLIENTS_CONFIG") || "[]"))if (clientId === neonClientConfig.client_id && clientSecret === neonClientConfig.client_secret) return true;
    return false;
});
function yupDefinedWhen(schema, triggers) {
    const entries = Object.entries(triggers);
    return schema.when(entries.map(([key])=>key), {
        is: (...values)=>entries.every(([key, value], index)=>value === values[index]),
        then: (schema)=>schema.defined(),
        otherwise: (schema)=>schema.optional()
    });
}
function yupDefinedAndNonEmptyWhen(schema, triggers) {
    const entries = Object.entries(triggers);
    return schema.when(entries.map(([key])=>key), {
        is: (...values)=>entries.every(([key, value], index)=>value === values[index]),
        then: (schema)=>schema.defined().nonEmpty(),
        otherwise: (schema)=>schema.optional()
    });
}
const branchConfigSourceSchema = yupUnion(yupObject({
    type: yupString().oneOf([
        "pushed-from-github"
    ]).defined(),
    owner: yupString().defined(),
    repo: yupString().defined(),
    branch: yupString().defined(),
    commit_hash: yupString().defined(),
    config_file_path: yupString().defined(),
    workflow_path: yupString().optional()
}), yupObject({
    type: yupString().oneOf([
        "pushed-from-unknown"
    ]).defined()
}), yupObject({
    type: yupString().oneOf([
        "unlinked"
    ]).defined()
}));
/**
* State of a single dashboard→GitHub config agent run, so the dashboard can poll for
* progress and surface the resulting commit (or error). Each run is one row in the
* `ConfigAgentRun` table, addressed by `id`; runs are NOT serialized, so many can
* target the same branch at once and GitHub catches conflicts at push time.
*/ const configAgentRunSchema = yupObject({
    id: yupString().uuid().defined(),
    status: yupString().oneOf([
        "running",
        "awaiting_review",
        "success",
        "no-change",
        "error",
        "cancelled"
    ]).defined(),
    started_at: yupNumber().defined(),
    finished_at: yupNumber().optional(),
    commit_url: urlSchema.optional(),
    error: configAgentSafeErrorMessageSchema.optional(),
    sandbox_id: yupString().optional(),
    progress: yupString().optional(),
    stage: yupString().oneOf([
        "initializing_sandbox",
        "cloning_repo",
        "agent_making_changes",
        "awaiting_review"
    ]).optional(),
    diff: yupString().optional()
});
//#endregion
exports.RESERVED_USER_SPECIFIED_IDS = RESERVED_USER_SPECIFIED_IDS;
exports.ReplaceFieldWithOwnUserId = ReplaceFieldWithOwnUserId;
exports.USER_SPECIFIED_ID_MAX_LENGTH = USER_SPECIFIED_ID_MAX_LENGTH;
exports.USER_SPECIFIED_ID_PATTERN = USER_SPECIFIED_ID_PATTERN;
exports.accessTokenPayloadSchema = accessTokenPayloadSchema;
exports.accessTokenResponseSchema = accessTokenResponseSchema;
exports.adaptSchema = adaptSchema;
exports.adminAuthTypeSchema = adminAuthTypeSchema;
exports.base64Schema = base64Schema;
exports.basicAuthorizationHeaderSchema = basicAuthorizationHeaderSchema;
exports.branchConfigSourceSchema = branchConfigSourceSchema;
exports.clientOrHigherAuthTypeSchema = clientOrHigherAuthTypeSchema;
exports.configAgentRunSchema = configAgentRunSchema;
exports.configAgentSafeErrorMessageSchema = configAgentSafeErrorMessageSchema;
exports.configAgentSafeErrorMessages = configAgentSafeErrorMessages;
exports.contactChannelIdSchema = contactChannelIdSchema;
exports.contactChannelIsPrimarySchema = contactChannelIsPrimarySchema;
exports.contactChannelIsVerifiedSchema = contactChannelIsVerifiedSchema;
exports.contactChannelTypeSchema = contactChannelTypeSchema;
exports.contactChannelUsedForAuthSchema = contactChannelUsedForAuthSchema;
exports.contactChannelValueSchema = contactChannelValueSchema;
exports.containedPermissionIdsSchema = containedPermissionIdsSchema;
exports.countryCodeSchema = countryCodeSchema;
exports.customDashboardsSchema = customDashboardsSchema;
exports.customPermissionDefinitionIdSchema = customPermissionDefinitionIdSchema;
exports.customerTypeSchema = customerTypeSchema;
exports.dayIntervalOrNeverSchema = dayIntervalOrNeverSchema;
exports.dayIntervalSchema = dayIntervalSchema;
exports.emailHostSchema = emailHostSchema;
exports.emailOtpSignInCallbackUrlSchema = emailOtpSignInCallbackUrlSchema;
exports.emailPasswordSchema = emailPasswordSchema;
exports.emailPortSchema = emailPortSchema;
exports.emailSchema = emailSchema;
exports.emailSenderEmailSchema = emailSenderEmailSchema;
exports.emailSenderNameSchema = emailSenderNameSchema;
exports.emailTemplateListSchema = emailTemplateListSchema;
exports.emailThemeListSchema = emailThemeListSchema;
exports.emailThemeSchema = emailThemeSchema;
exports.emailTypeSchema = emailTypeSchema;
exports.emailUsernameSchema = emailUsernameSchema;
exports.emailVerificationCallbackUrlSchema = emailVerificationCallbackUrlSchema;
exports.ensureObjectSchema = ensureObjectSchema;
exports.getUserSpecifiedIdErrorMessage = getUserSpecifiedIdErrorMessage;
exports.handlerPathSchema = handlerPathSchema;
exports.inlineProductSchema = inlineProductSchema;
exports.intervalOrNeverSchema = intervalOrNeverSchema;
exports.intervalSchema = intervalSchema;
Object.defineProperty(exports, "isValidCountryCode", {
    enumerable: true,
    get: function() {
        return __utils_country_codes_js.isValidCountryCode;
    }
});
exports.isValidUserSpecifiedId = isValidUserSpecifiedId;
exports.jsonSchema = jsonSchema;
exports.jsonStringOrEmptySchema = jsonStringOrEmptySchema;
exports.jsonStringSchema = jsonStringSchema;
exports.moneyAmountSchema = moneyAmountSchema;
exports.neonAuthorizationHeaderSchema = neonAuthorizationHeaderSchema;
Object.defineProperty(exports, "normalizeCountryCode", {
    enumerable: true,
    get: function() {
        return __utils_country_codes_js.normalizeCountryCode;
    }
});
exports.oauthAccountMergeStrategySchema = oauthAccountMergeStrategySchema;
exports.oauthAppleBundleIdSchema = oauthAppleBundleIdSchema;
exports.oauthAppleBundleIdsSchema = oauthAppleBundleIdsSchema;
exports.oauthAppleKeyIdSchema = oauthAppleKeyIdSchema;
exports.oauthApplePrivateKeySchema = oauthApplePrivateKeySchema;
exports.oauthAppleTeamIdSchema = oauthAppleTeamIdSchema;
exports.oauthClientIdSchema = oauthClientIdSchema;
exports.oauthClientSecretSchema = oauthClientSecretSchema;
exports.oauthCustomCallbackUrlSchema = oauthCustomCallbackUrlSchema;
exports.oauthEnabledSchema = oauthEnabledSchema;
exports.oauthFacebookConfigIdSchema = oauthFacebookConfigIdSchema;
exports.oauthIdSchema = oauthIdSchema;
exports.oauthIssuerUrlSchema = oauthIssuerUrlSchema;
exports.oauthMicrosoftTenantIdSchema = oauthMicrosoftTenantIdSchema;
exports.oauthProviderAccountIdSchema = oauthProviderAccountIdSchema;
exports.oauthProviderAllowConnectedAccountsSchema = oauthProviderAllowConnectedAccountsSchema;
exports.oauthProviderAllowSignInSchema = oauthProviderAllowSignInSchema;
exports.oauthProviderEmailSchema = oauthProviderEmailSchema;
exports.oauthProviderIdSchema = oauthProviderIdSchema;
exports.oauthProviderProviderConfigIdSchema = oauthProviderProviderConfigIdSchema;
exports.oauthProviderTypeSchema = oauthProviderTypeSchema;
exports.oauthScopeSchema = oauthScopeSchema;
exports.oauthTypeSchema = oauthTypeSchema;
exports.passwordSchema = passwordSchema;
exports.permissionDefinitionIdSchema = permissionDefinitionIdSchema;
exports.pricesSchema = pricesSchema;
exports.primaryEmailAuthEnabledSchema = primaryEmailAuthEnabledSchema;
exports.primaryEmailSchema = primaryEmailSchema;
exports.primaryEmailVerifiedSchema = primaryEmailVerifiedSchema;
exports.productClientMetadataSchema = productClientMetadataSchema;
exports.productClientReadOnlyMetadataSchema = productClientReadOnlyMetadataSchema;
exports.productPriceSchema = productPriceSchema;
exports.productSchema = productSchema;
exports.productSchemaWithMetadata = productSchemaWithMetadata;
exports.productServerMetadataSchema = productServerMetadataSchema;
exports.profileImageUrlSchema = profileImageUrlSchema;
exports.projectAllowLocalhostSchema = projectAllowLocalhostSchema;
exports.projectBranchIdSchema = projectBranchIdSchema;
exports.projectClientTeamCreationEnabledSchema = projectClientTeamCreationEnabledSchema;
exports.projectClientUserDeletionEnabledSchema = projectClientUserDeletionEnabledSchema;
exports.projectConfigIdSchema = projectConfigIdSchema;
exports.projectCreateTeamOnSignUpSchema = projectCreateTeamOnSignUpSchema;
exports.projectCreatedAtMillisSchema = projectCreatedAtMillisSchema;
exports.projectCredentialEnabledSchema = projectCredentialEnabledSchema;
exports.projectDescriptionSchema = projectDescriptionSchema;
exports.projectDisplayNameSchema = projectDisplayNameSchema;
exports.projectIdSchema = projectIdSchema;
exports.projectIsProductionModeSchema = projectIsProductionModeSchema;
exports.projectLogoDarkModeUrlSchema = projectLogoDarkModeUrlSchema;
exports.projectLogoFullDarkModeUrlSchema = projectLogoFullDarkModeUrlSchema;
exports.projectLogoFullUrlSchema = projectLogoFullUrlSchema;
exports.projectLogoUrlSchema = projectLogoUrlSchema;
exports.projectMagicLinkEnabledSchema = projectMagicLinkEnabledSchema;
exports.projectOnboardingStatusSchema = projectOnboardingStatusSchema;
exports.projectOnboardingStatusValues = projectOnboardingStatusValues;
exports.projectPasskeyEnabledSchema = projectPasskeyEnabledSchema;
exports.projectSignUpEnabledSchema = projectSignUpEnabledSchema;
exports.refreshTokenResponseSchema = refreshTokenResponseSchema;
exports.restrictedReasonSchema = restrictedReasonSchema;
exports.restrictedReasonTypes = restrictedReasonTypes;
exports.sanitizeUserSpecifiedId = sanitizeUserSpecifiedId;
exports.selectedTeamIdSchema = selectedTeamIdSchema;
exports.serverOrHigherAuthTypeSchema = serverOrHigherAuthTypeSchema;
exports.signInEmailSchema = signInEmailSchema;
exports.signInResponseSchema = signInResponseSchema;
exports.signedUpAtMillisSchema = signedUpAtMillisSchema;
exports.strictEmailSchema = strictEmailSchema;
exports.teamClientMetadataSchema = teamClientMetadataSchema;
exports.teamClientReadOnlyMetadataSchema = teamClientReadOnlyMetadataSchema;
exports.teamCreatedAtMillisSchema = teamCreatedAtMillisSchema;
exports.teamCreatorUserIdSchema = teamCreatorUserIdSchema;
exports.teamDisplayNameSchema = teamDisplayNameSchema;
exports.teamIdSchema = teamIdSchema;
exports.teamInvitationCallbackUrlSchema = teamInvitationCallbackUrlSchema;
exports.teamInvitationEmailSchema = teamInvitationEmailSchema;
exports.teamMemberDisplayNameSchema = teamMemberDisplayNameSchema;
exports.teamMemberProfileImageUrlSchema = teamMemberProfileImageUrlSchema;
exports.teamPermissionDescriptionSchema = teamPermissionDescriptionSchema;
exports.teamProfileImageUrlSchema = teamProfileImageUrlSchema;
exports.teamServerMetadataSchema = teamServerMetadataSchema;
exports.teamSystemPermissions = teamSystemPermissions;
exports.templateThemeIdSchema = templateThemeIdSchema;
exports.urlSchema = urlSchema;
exports.userClientMetadataSchema = userClientMetadataSchema;
exports.userClientReadOnlyMetadataSchema = userClientReadOnlyMetadataSchema;
exports.userDisplayNameSchema = userDisplayNameSchema;
exports.userHasPasswordSchema = userHasPasswordSchema;
exports.userIdOrMeSchema = userIdOrMeSchema;
exports.userIdSchema = userIdSchema;
exports.userLastActiveAtMillisSchema = userLastActiveAtMillisSchema;
exports.userOAuthProviderSchema = userOAuthProviderSchema;
exports.userOtpAuthEnabledMutationSchema = userOtpAuthEnabledMutationSchema;
exports.userOtpAuthEnabledSchema = userOtpAuthEnabledSchema;
exports.userPasskeyAuthEnabledSchema = userPasskeyAuthEnabledSchema;
exports.userPasswordHashMutationSchema = userPasswordHashMutationSchema;
exports.userPasswordMutationSchema = userPasswordMutationSchema;
exports.userServerMetadataSchema = userServerMetadataSchema;
exports.userSpecifiedIdSchema = userSpecifiedIdSchema;
exports.userTotpSecretMutationSchema = userTotpSecretMutationSchema;
Object.defineProperty(exports, "validateCountryCode", {
    enumerable: true,
    get: function() {
        return __utils_country_codes_js.validateCountryCode;
    }
});
exports.wildcardProtocolAndDomainSchema = wildcardProtocolAndDomainSchema;
exports.wildcardUrlSchema = wildcardUrlSchema;
exports.yupArray = yupArray;
exports.yupBoolean = yupBoolean;
exports.yupDate = yupDate;
exports.yupDefinedAndNonEmptyWhen = yupDefinedAndNonEmptyWhen;
exports.yupDefinedWhen = yupDefinedWhen;
exports.yupMixed = yupMixed;
exports.yupNever = yupNever;
exports.yupNumber = yupNumber;
exports.yupObject = yupObject;
exports.yupObjectWithAutoDefault = yupObjectWithAutoDefault;
exports.yupRecord = yupRecord;
exports.yupString = yupString;
exports.yupTuple = yupTuple;
exports.yupUnion = yupUnion;
exports.yupValidate = yupValidate;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/sessions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const require_rolldown_runtime = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/rolldown-runtime-D6vf50IK.js [app-client] (ecmascript)");
let __schema_fields_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/schema-fields.js [app-client] (ecmascript)");
let __utils_errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let jose = __turbopack_context__.r("[project]/node_modules/jose/dist/webapi/index.js [app-client] (ecmascript)");
jose = require_rolldown_runtime.__toESM(jose);
let __utils_promises_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)");
let __utils_stores_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/stores.js [app-client] (ecmascript)");
//#region src/sessions.ts
function decodeAccessTokenIfValid(token) {
    try {
        const payload = jose.decodeJwt(token);
        return __schema_fields_js.accessTokenPayloadSchema.validateSync(payload);
    } catch (e) {
        return null;
    }
}
var AccessToken = class AccessToken {
    static createIfValid(token) {
        if (!decodeAccessTokenIfValid(token)) return null;
        return new AccessToken(token);
    }
    constructor(token){
        this.token = token;
        if (token === "undefined") throw new __utils_errors_js.HexclaveAssertionError("Access token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!");
    }
    get payload() {
        return decodeAccessTokenIfValid(this.token) ?? (0, __utils_errors_js.throwErr)("Invalid access token in payload (should've been validated in createIfValid)", {
            token: this.token
        });
    }
    get expiresAt() {
        const { exp } = this.payload;
        if (exp === void 0) return /* @__PURE__ */ new Date(864e13);
        return /* @__PURE__ */ new Date(exp * 1e3);
    }
    get issuedAt() {
        const { iat } = this.payload;
        return /* @__PURE__ */ new Date(iat * 1e3);
    }
    /**
	* @returns The number of milliseconds until the access token expires, or 0 if it has already expired.
	*/ get expiresInMillis() {
        return Math.max(0, this.expiresAt.getTime() - Date.now());
    }
    get issuedMillisAgo() {
        return Math.max(0, Date.now() - this.issuedAt.getTime());
    }
    isExpired() {
        return this.expiresInMillis <= 0;
    }
};
var RefreshToken = class {
    constructor(token){
        this.token = token;
        if (token === "undefined") throw new __utils_errors_js.HexclaveAssertionError("Refresh token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!");
    }
};
/**
* An InternalSession represents a user's session, which may or may not be valid. It may contain an access token, a refresh token, or both.
*
* A session never changes which user or session it belongs to, but the tokens in it may change over time.
*/ var InternalSession = class InternalSession {
    constructor(_options){
        this._options = _options;
        this._knownToBeInvalid = new __utils_stores_js.Store(false);
        this._refreshPromise = null;
        this._accessToken = new __utils_stores_js.Store(_options.accessToken ? AccessToken.createIfValid(_options.accessToken) : null);
        this._refreshToken = _options.refreshToken ? new RefreshToken(_options.refreshToken) : null;
        if (_options.accessToken === null && _options.refreshToken === null) this._knownToBeInvalid.set(true);
        this.sessionKey = InternalSession.calculateSessionKey({
            accessToken: _options.accessToken ?? null,
            refreshToken: _options.refreshToken
        });
    }
    static calculateSessionKey(ofTokens) {
        if (ofTokens.refreshToken) return `refresh-${ofTokens.refreshToken}`;
        else if (ofTokens.accessToken) {
            const refreshTokenId = decodeAccessTokenIfValid(ofTokens.accessToken)?.refresh_token_id;
            if (refreshTokenId) return `access-session-${refreshTokenId}`;
            return `access-${ofTokens.accessToken}`;
        } else return "not-logged-in";
    }
    isKnownToBeInvalid() {
        return this._knownToBeInvalid.get();
    }
    /**
	* Marks the session object as invalid, meaning that the refresh and access tokens can no longer be used. There is no
	* way out of this state, and the session object will never return valid tokens again.
	*/ markInvalid() {
        this._accessToken.set(null);
        this._knownToBeInvalid.set(true);
    }
    onInvalidate(callback) {
        return this._knownToBeInvalid.onChange(()=>callback());
    }
    getRefreshToken() {
        if (this.isKnownToBeInvalid()) return null;
        return this._refreshToken;
    }
    /**
	* Returns the access token if it is found in the cache and not expired yet, or null otherwise. Never fetches new tokens.
	*/ getAccessTokenIfNotExpiredYet(minMillisUntilExpiration, maxMillisSinceIssued) {
        if (minMillisUntilExpiration > 45e3) throw new Error(`Required access token expiry ${minMillisUntilExpiration}ms is too long; access tokens are too short to be used for more than 45s`);
        if (maxMillisSinceIssued !== null && maxMillisSinceIssued < 15e3) throw new Error(`Required access token issuance ${maxMillisSinceIssued}ms is too short; assume that access token generation can take at least 15s`);
        const accessToken = this._getPotentiallyInvalidAccessTokenIfAvailable();
        if (!accessToken || accessToken.expiresInMillis < minMillisUntilExpiration) return null;
        if (maxMillisSinceIssued !== null && accessToken.issuedMillisAgo > maxMillisSinceIssued) return null;
        return accessToken;
    }
    /**
	* Returns the access token if it is found in the cache, fetching it otherwise.
	*
	* This is usually the function you want to call to get an access token. Either set `minMillisUntilExpiration` to a reasonable value, or catch errors that occur if it expires, and call `markAccessTokenExpired` to mark the token as expired if so (after which a call to this function will always refetch the token).
	*
	* @returns null if the session is known to be invalid, cached tokens if they exist in the cache and the access token hasn't expired yet (the refresh token might still be invalid), or new tokens otherwise.
	*/ async getOrFetchLikelyValidTokens(minMillisUntilExpiration, maxMillisSinceIssued) {
        if (this.isKnownToBeInvalid()) return null;
        const accessToken = this.getAccessTokenIfNotExpiredYet(minMillisUntilExpiration, maxMillisSinceIssued);
        if (!accessToken) {
            let newTokens = await this.fetchNewTokens();
            let issuedMillisAgo = newTokens?.accessToken.issuedMillisAgo;
            if (maxMillisSinceIssued !== null && issuedMillisAgo !== void 0 && issuedMillisAgo > maxMillisSinceIssued) {
                newTokens = await this.fetchNewTokens();
                issuedMillisAgo = newTokens?.accessToken.issuedMillisAgo;
            }
            const expiresInMillis = newTokens?.accessToken.expiresInMillis;
            if (expiresInMillis !== void 0 && expiresInMillis < minMillisUntilExpiration) throw new __utils_errors_js.HexclaveAssertionError(`Required access token expiry ${minMillisUntilExpiration}ms is too long; access tokens are too short when they're generated (${expiresInMillis}ms)`);
            if (maxMillisSinceIssued !== null && issuedMillisAgo !== void 0 && issuedMillisAgo > maxMillisSinceIssued) throw new __utils_errors_js.HexclaveAssertionError(`Required access token issuance ${maxMillisSinceIssued}ms is too short; access token issuance is too slow (${issuedMillisAgo}ms)`);
            return newTokens;
        }
        return {
            accessToken,
            refreshToken: this.getRefreshToken()
        };
    }
    /**
	* Fetches new tokens that are, at the time of fetching, guaranteed to be valid.
	*
	* The newly generated tokens are short-lived, so it's good practice not to rely on their validity (if possible). However, this function is useful in some cases where you only want to pass access tokens to a service, and you want to make sure said access token has the longest possible lifetime.
	*
	* In most cases, you should prefer `getOrFetchLikelyValidTokens`.
	*
	* @returns null if the session is known to be invalid, or new tokens otherwise (which, at the time of fetching, are guaranteed to be valid).
	*/ async fetchNewTokens() {
        const accessToken = await this._getNewlyFetchedAccessToken();
        return accessToken ? {
            accessToken,
            refreshToken: this._refreshToken
        } : null;
    }
    /**
	* Installs a freshly obtained token pair's access token into this session in place, keeping the session object
	* (and therefore every session-scoped cache) stable instead of constructing a new InternalSession. No-op if the
	* session is invalid, the access token can't be decoded, it's unchanged, or the pair doesn't map to this session
	* (so a foreign token can never be written into this object's cache); never clears an existing token.
	*/ updateAccessToken(tokens) {
        if (this._knownToBeInvalid.get()) return;
        if (!tokens.accessToken) return;
        const newAccessToken = AccessToken.createIfValid(tokens.accessToken);
        if (!newAccessToken) return;
        if (InternalSession.calculateSessionKey(tokens) !== this.sessionKey) return;
        if (this._accessToken.get()?.token === newAccessToken.token) return;
        this._accessToken.set(newAccessToken);
    }
    /**
	* Manually mark the access token as expired, even if the date on its payload may still be valid.
	*
	* You don't usually have to call this function anymore, but you may want to call suggestAccessTokenExpired
	* to hint that the access token should be refreshed as its data may have changed, if possible.
	*/ markAccessTokenExpired(accessToken) {
        if (!accessToken || this._accessToken.get()?.token === accessToken.token) this._accessToken.set(null);
    }
    /**
	* Strongly suggests that the access token should be refreshed as its data may have changed, although it's up to this
	* implementation to decide whether or when the access token will be refreshed.
	*
	* This is particularly useful when the data associated with the access token may have changed for example due to an
	* update to the user's profile.
	*
	* The current implementation marks the access token as expired if and only if a refresh token is available (regardless of
	* whether the refresh token is actually valid or not), although this is not a guarantee and subject to change.
	*
	* If you need a stronger guarantee of revoking an access token, use markAccessTokenExpired instead.
	*/ suggestAccessTokenExpired() {
        if (this._refreshToken) this.markAccessTokenExpired();
    }
    startRefreshingAccessToken(minMillisUntilExpiration, maxMillisSinceIssued) {
        let canceled = false;
        (0, __utils_promises_js.runAsynchronously)(async ()=>{
            while(!canceled){
                const tokens = await this.getOrFetchLikelyValidTokens(minMillisUntilExpiration, maxMillisSinceIssued);
                if (!tokens) return;
                const nextRefreshIn = Math.min(tokens.accessToken.expiresInMillis - minMillisUntilExpiration, (maxMillisSinceIssued ?? Infinity) - tokens.accessToken.issuedMillisAgo);
                await (0, __utils_promises_js.wait)(Math.max(1, nextRefreshIn));
            }
        });
        return {
            unsubscribe: ()=>{
                canceled = true;
            }
        };
    }
    /**
	* Note that a callback invocation with `null` does not mean the session has been invalidated; the access token may just have expired. Use `onInvalidate` to detect invalidation.
	*/ onAccessTokenChange(callback) {
        return this._accessToken.onChange(callback);
    }
    /**
	* @returns An access token, which may be expired or expire soon, or null if it is known to be invalid.
	*/ _getPotentiallyInvalidAccessTokenIfAvailable() {
        if (this.isKnownToBeInvalid()) return null;
        const accessToken = this._accessToken.get();
        if (accessToken && !accessToken.isExpired()) return accessToken;
        return null;
    }
    /**
	* You should prefer `_getOrFetchPotentiallyInvalidAccessToken` in almost all cases.
	*
	* @returns A newly fetched access token (never read from cache), or null if the session either does not represent a user or the session is invalid.
	*/ async _getNewlyFetchedAccessToken() {
        if (!this._refreshToken) return null;
        if (this._knownToBeInvalid.get()) return null;
        if (!this._refreshPromise) this._refreshAndSetRefreshPromise(this._refreshToken);
        return await this._refreshPromise;
    }
    _refreshAndSetRefreshPromise(refreshToken) {
        let refreshPromise = this._options.refreshAccessTokenCallback(refreshToken).then((accessToken)=>{
            if (refreshPromise === this._refreshPromise) {
                this._refreshPromise = null;
                this._accessToken.set(accessToken);
                if (!accessToken) this.markInvalid();
            }
            return accessToken;
        }).finally(()=>{
            if (refreshPromise === this._refreshPromise) this._refreshPromise = null;
        });
        this._refreshPromise = refreshPromise;
    }
};
//#endregion
exports.AccessToken = AccessToken;
exports.InternalSession = InternalSession;
exports.RefreshToken = RefreshToken;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/arrays.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __math_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/math.js [app-client] (ecmascript)");
//#region src/utils/arrays.tsx
function typedIncludes(arr, item) {
    return arr.includes(item);
}
function enumerate(arr) {
    return arr.map((item, index)=>[
            index,
            item
        ]);
}
function isShallowEqual(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++)if (a[i] !== b[i]) return false;
    return true;
}
/**
* Ponyfill for ES2023's findLastIndex.
*/ function findLastIndex(arr, predicate) {
    for(let i = arr.length - 1; i >= 0; i--)if (predicate(arr[i])) return i;
    return -1;
}
function groupBy(arr, key) {
    const result = /* @__PURE__ */ new Map();
    for (const item of arr){
        const k = key(item);
        if (result.get(k) === void 0) result.set(k, []);
        result.get(k).push(item);
    }
    return result;
}
function range(startInclusive, endExclusive, step) {
    if (endExclusive === void 0) {
        endExclusive = startInclusive;
        startInclusive = 0;
    }
    if (step === void 0) step = 1;
    const result = [];
    for(let i = startInclusive; step > 0 ? i < endExclusive : i > endExclusive; i += step)result.push(i);
    return result;
}
function rotateLeft(arr, n) {
    if (arr.length === 0) return [];
    const index = (0, __math_js.remainder)(n, arr.length);
    return [
        ...arr.slice(index),
        ...arr.slice(0, index)
    ];
}
function rotateRight(arr, n) {
    return rotateLeft(arr, -n);
}
function shuffle(arr) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
function outerProduct(arr1, arr2) {
    return arr1.flatMap((item1)=>arr2.map((item2)=>[
                item1,
                item2
            ]));
}
function unique(arr) {
    return [
        ...new Set(arr)
    ];
}
function getChunks(arr, size) {
    const result = [];
    if (size <= 0) return result;
    for(let i = 0; i < arr.length; i += size)result.push(arr.slice(i, i + size));
    return result;
}
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "string");
}
function isNumberArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "number");
}
function isBooleanArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "boolean");
}
function isObjectArray(arr) {
    return Array.isArray(arr) && arr.every((item)=>typeof item === "object" && item !== null);
}
//#endregion
exports.enumerate = enumerate;
exports.findLastIndex = findLastIndex;
exports.getChunks = getChunks;
exports.groupBy = groupBy;
exports.isBooleanArray = isBooleanArray;
exports.isNumberArray = isNumberArray;
exports.isObjectArray = isObjectArray;
exports.isShallowEqual = isShallowEqual;
exports.isStringArray = isStringArray;
exports.outerProduct = outerProduct;
exports.range = range;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.shuffle = shuffle;
exports.typedIncludes = typedIncludes;
exports.unique = unique;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/bytes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
//#region src/utils/bytes.tsx
const crockfordAlphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const crockfordReplacements = /* @__PURE__ */ new Map([
    [
        "o",
        "0"
    ],
    [
        "i",
        "1"
    ],
    [
        "l",
        "1"
    ]
]);
function toHexString(input) {
    return Array.from(input).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
function getBase32CharacterFromIndex(index) {
    if (index < 0 || index >= 32) throw new __errors_js.HexclaveAssertionError(`Invalid base32 index: ${index}`);
    return crockfordAlphabet[index];
}
function getBase32IndexFromCharacter(character) {
    if (character.length !== 1) throw new __errors_js.HexclaveAssertionError(`Invalid base32 character: ${character}`);
    const index = crockfordAlphabet.indexOf(character.toUpperCase());
    if (index === -1) throw new __errors_js.HexclaveAssertionError(`Invalid base32 character: ${character}`);
    return index;
}
function encodeBase32(input) {
    let bits = 0;
    let value = 0;
    let output = "";
    for(let i = 0; i < input.length; i++){
        value = value << 8 | input[i];
        bits += 8;
        while(bits >= 5){
            output += getBase32CharacterFromIndex(value >>> bits - 5 & 31);
            bits -= 5;
        }
    }
    if (bits > 0) output += getBase32CharacterFromIndex(value << 5 - bits & 31);
    if (!isBase32(output)) throw new __errors_js.HexclaveAssertionError("Invalid base32 output; this should never happen");
    return output;
}
function decodeBase32(input) {
    if (!isBase32(input)) throw new __errors_js.HexclaveAssertionError("Invalid base32 string");
    const output = new Uint8Array(input.length * 5 / 8 | 0);
    let bits = 0;
    let value = 0;
    let outputIndex = 0;
    for(let i = 0; i < input.length; i++){
        let char = input[i].toLowerCase();
        if (char === " ") continue;
        if (crockfordReplacements.has(char)) char = crockfordReplacements.get(char);
        const index = getBase32IndexFromCharacter(char);
        value = value << 5 | index;
        bits += 5;
        if (bits >= 8) {
            output[outputIndex++] = value >>> bits - 8 & 255;
            bits -= 8;
        }
    }
    return output;
}
function encodeBase64(input) {
    return btoa([
        ...input
    ].map((b)=>String.fromCharCode(b)).join(""));
}
function decodeBase64(input) {
    return new Uint8Array(atob(input).split("").map((char)=>char.charCodeAt(0)));
}
function encodeBase64Url(input) {
    return encodeBase64(input).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Url(input) {
    if (!isBase64Url(input)) throw new __errors_js.HexclaveAssertionError("Invalid base64url string");
    if (input === "") return /* @__PURE__ */ new Uint8Array(0);
    return decodeBase64(input.replace(/-/g, "+").replace(/_/g, "/") + "====".slice((input.length - 1) % 4 + 1));
}
function decodeBase64OrBase64Url(input) {
    if (isBase64Url(input)) return decodeBase64Url(input);
    else if (isBase64(input)) return decodeBase64(input);
    else throw new __errors_js.HexclaveAssertionError("Invalid base64 or base64url string");
}
function isBase32(input) {
    for (const char of input){
        if (char === " ") continue;
        const upperChar = char.toUpperCase();
        if (!crockfordAlphabet.includes(upperChar)) return false;
    }
    return true;
}
function isBase64(input) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(input);
}
function isBase64Url(input) {
    if (input === "") return true;
    return /^[0-9a-zA-Z_-]+$/.test(input);
}
//#endregion
exports.decodeBase32 = decodeBase32;
exports.decodeBase64 = decodeBase64;
exports.decodeBase64OrBase64Url = decodeBase64OrBase64Url;
exports.decodeBase64Url = decodeBase64Url;
exports.encodeBase32 = encodeBase32;
exports.encodeBase64 = encodeBase64;
exports.encodeBase64Url = encodeBase64Url;
exports.getBase32CharacterFromIndex = getBase32CharacterFromIndex;
exports.getBase32IndexFromCharacter = getBase32IndexFromCharacter;
exports.isBase32 = isBase32;
exports.isBase64 = isBase64;
exports.isBase64Url = isBase64Url;
exports.toHexString = toHexString;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/country-codes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/country-codes.ts
function normalizeCountryCode(countryCode) {
    return countryCode.trim().toUpperCase();
}
function isValidCountryCode(countryCode) {
    const normalized = normalizeCountryCode(countryCode);
    return /^[A-Z]{2}$/.test(normalized);
}
/**
* Validates and normalizes a country code value (single string or array).
* Returns null if valid, or an error message string if invalid.
*/ function validateCountryCode(value) {
    const values = Array.isArray(value) ? value : [
        value
    ];
    if (values.length === 0) return "At least one country code is required";
    return values.every((v)=>isValidCountryCode(v)) ? null : "Country code must be a 2-letter code";
}
//#endregion
exports.isValidCountryCode = isValidCountryCode;
exports.normalizeCountryCode = normalizeCountryCode;
exports.validateCountryCode = validateCountryCode;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/crypto.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __bytes_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/bytes.js [app-client] (ecmascript)");
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __globals_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/globals.js [app-client] (ecmascript)");
let __results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let __typed_arrays_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/typed-arrays.js [app-client] (ecmascript)");
//#region src/utils/crypto.tsx
function generateRandomValues(array) {
    if (!__globals_js.globalVar.crypto) throw new __errors_js.HexclaveAssertionError("Crypto API is not available in this environment. Are you using an old browser?");
    if (!__globals_js.globalVar.crypto.getRandomValues) throw new __errors_js.HexclaveAssertionError("crypto.getRandomValues is not available in this environment. Are you using an old browser?");
    return __globals_js.globalVar.crypto.getRandomValues(array);
}
/**
* Generates a secure alphanumeric string using the system's cryptographically secure
* random number generator.
*/ function generateSecureRandomString(minBitsOfEntropy = 224) {
    const base32CharactersCount = Math.ceil(minBitsOfEntropy / 5);
    const bytesCount = Math.ceil(base32CharactersCount * 5 / 8);
    const str = (0, __bytes_js.encodeBase32)(generateRandomValues(new Uint8Array(bytesCount)));
    return str.slice(str.length - base32CharactersCount).toLowerCase();
}
async function getDerivedSymmetricKey(purpose, secret, salt) {
    const secretBytes = typeof secret === "string" ? new TextEncoder().encode(secret) : (0, __typed_arrays_js.toArrayBufferBacked)(secret);
    const originalSecretKey = await crypto.subtle.importKey("raw", secretBytes, "HKDF", false, [
        "deriveKey"
    ]);
    return await crypto.subtle.deriveKey({
        name: "HKDF",
        salt: (0, __typed_arrays_js.toArrayBufferBacked)(salt),
        hash: "SHA-256",
        info: new TextEncoder().encode(JSON.stringify([
            "stack-crypto-helper-derived-symmetric-key",
            purpose,
            typeof secret === "string" ? "string-key" : "binary-key",
            (0, __bytes_js.encodeBase64)(salt)
        ]))
    }, originalSecretKey, {
        name: "AES-GCM",
        length: 256
    }, false, [
        "encrypt",
        "decrypt"
    ]);
}
async function encrypt({ purpose, secret, value }) {
    const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
    const salt = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
    const derivedSecretKey = await getDerivedSymmetricKey(purpose, secret, salt);
    const cipher = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
    }, derivedSecretKey, (0, __typed_arrays_js.toArrayBufferBacked)(value));
    return new Uint8Array([
        ...[
            1,
            0
        ],
        ...salt,
        ...iv,
        ...new Uint8Array(cipher)
    ]);
}
async function decrypt({ purpose, secret, cipher }) {
    const version = cipher.slice(0, 2);
    if (version[0] !== 1 || version[1] !== 0) throw new __errors_js.HexclaveAssertionError("Invalid ciphertext version in decrypt(...); expected 0x0100", {
        purpose
    });
    const salt = cipher.slice(2, 18);
    const iv = cipher.slice(18, 30);
    const cipherBytes = cipher.slice(30);
    const derivedSecretKey = await getDerivedSymmetricKey(purpose, secret, salt);
    try {
        const plaintext = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv
        }, derivedSecretKey, cipherBytes);
        return __results_js.Result.ok(new Uint8Array(plaintext));
    } catch (e) {
        if (e instanceof DOMException && e.name === "OperationError") return __results_js.Result.error(new Error("Invalid ciphertext or secret when decrypting encrypted value", {
            cause: e
        }));
        throw e;
    }
}
async function hash(options) {
    return await iteratedHash({
        ...options,
        iterations: 1
    });
}
async function iteratedHash(options) {
    const stringOrUint8ArrayToUint8Array = (value)=>typeof value === "string" ? new TextEncoder().encode(value) : (0, __typed_arrays_js.toArrayBufferBacked)(value);
    const stringOrUint8ArrayToBase64 = (value)=>(0, __bytes_js.encodeBase64)(stringOrUint8ArrayToUint8Array(value));
    const input = await crypto.subtle.importKey("raw", stringOrUint8ArrayToUint8Array(options.value), "PBKDF2", false, [
        "deriveBits"
    ]);
    return new Uint8Array(await crypto.subtle.deriveBits({
        name: "PBKDF2",
        salt: new TextEncoder().encode(JSON.stringify([
            "stack-crypto-helper-iterated-hash",
            options.purpose,
            stringOrUint8ArrayToBase64(options.salt ?? ""),
            stringOrUint8ArrayToBase64(options.extra ?? "")
        ])),
        iterations: options.iterations,
        hash: "SHA-256"
    }, input, 256));
}
//#endregion
exports.decrypt = decrypt;
exports.encrypt = encrypt;
exports.generateRandomValues = generateRandomValues;
exports.generateSecureRandomString = generateSecureRandomString;
exports.hash = hash;
exports.iteratedHash = iteratedHash;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/currency-constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/currency-constants.tsx
const SUPPORTED_CURRENCIES = [
    {
        code: "USD",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "EUR",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "GBP",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "JPY",
        decimals: 0,
        stripeDecimals: 0
    },
    {
        code: "INR",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "AUD",
        decimals: 2,
        stripeDecimals: 2
    },
    {
        code: "CAD",
        decimals: 2,
        stripeDecimals: 2
    }
];
//#endregion
exports.SUPPORTED_CURRENCIES = SUPPORTED_CURRENCIES;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/dom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/dom.tsx
function hasClickableParent(element) {
    const parent = element.parentElement;
    if (!parent) return false;
    if (parent.dataset.n2Clickable) return true;
    return hasClickableParent(element.parentElement);
}
/**
* Escape a string so it is safe to use as a CSS identifier (id/class) inside a selector.
* Prefers the native `CSS.escape` when available, falling back to a conservative
* backslash-escape for non-DOM environments (SSR, tests, older runtimes).
*/ function cssEscapeIdent(value) {
    if (typeof CSS !== "undefined" && typeof CSS.escape === "function") return CSS.escape(value);
    let escaped = "";
    for(let i = 0; i < value.length; i += 1){
        const char = value.charAt(i);
        const codeUnit = value.charCodeAt(i);
        if (codeUnit === 0) escaped += "�";
        else if (codeUnit >= 1 && codeUnit <= 31 || codeUnit === 127 || i === 0 && codeUnit >= 48 && codeUnit <= 57 || i === 1 && codeUnit >= 48 && codeUnit <= 57 && value.charCodeAt(0) === 45) escaped += `\\${codeUnit.toString(16)} `;
        else if (i === 0 && codeUnit === 45 && value.length === 1) escaped += "\\-";
        else if (codeUnit >= 128 || codeUnit === 45 || codeUnit === 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) escaped += char;
        else escaped += `\\${char}`;
    }
    return escaped;
}
//#endregion
exports.cssEscapeIdent = cssEscapeIdent;
exports.hasClickableParent = hasClickableParent;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/env.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
//#region src/utils/env.tsx
function isBrowserLike() {
    return typeof window !== "undefined" && typeof document !== "undefined" && typeof document.createElement !== "undefined";
}
const ENV_VAR_RENAME = {
    NEXT_PUBLIC_STACK_API_URL: [
        "STACK_BASE_URL",
        "NEXT_PUBLIC_STACK_URL"
    ]
};
function resolveHexclaveStackEnvVarValue(hexclaveName, stackName, hexclaveValue, stackValue) {
    if (hexclaveValue && stackValue && hexclaveValue !== stackValue) throw new Error(`Environment variables ${hexclaveName} and ${stackName} are both set to different values. Remove one of them or set them to the same value.`);
    return hexclaveValue || stackValue || void 0;
}
/**
* Hexclave rebrand: resolve an env var by reading both the `HEXCLAVE_*` and
* `STACK_*` spellings, preferring the canonical Hexclave value and falling back
* to the legacy Stack value (empty counts as unset). Works in BOTH directions —
* whether the caller passes the legacy `STACK_FOO` name or the canonical
* `HEXCLAVE_FOO` name, the other spelling is still honored. Covers `STACK_FOO`,
* `NEXT_PUBLIC_STACK_FOO`, `NEXT_PUBLIC_BROWSER_STACK_FOO`,
* `NEXT_PUBLIC_SERVER_STACK_FOO`, `VITE_STACK_FOO` and their HEXCLAVE_ twins.
* Names with neither segment behave exactly as before.
*/ function getEnvVarWithHexclaveFallback(name) {
    if (name.includes("STACK_")) {
        const hexclaveName = name.replace("STACK_", "HEXCLAVE_");
        return resolveHexclaveStackEnvVarValue(hexclaveName, name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[hexclaveName], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name]);
    }
    if (name.includes("HEXCLAVE_")) {
        const stackName = name.replace("HEXCLAVE_", "STACK_");
        return resolveHexclaveStackEnvVarValue(name, stackName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[stackName]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[name];
}
/**
* Returns the environment variable with the given name, returning the default (if given) or throwing an error (otherwise) if it's undefined or the empty string.
*/ function getEnvVariable(name, defaultValue) {
    if (isBrowserLike()) throw new Error(__strings_js.deindent`
      Can't use getEnvVariable on the client because Next.js transpiles expressions of the kind process.env.XYZ at build-time on the client.
    
      Use process.env.XYZ directly instead.
    `);
    if (name === "NEXT_RUNTIME") throw new Error(__strings_js.deindent`
      Can't use getEnvVariable to access the NEXT_RUNTIME environment variable because it's compiled into the client bundle.
    
      Use getNextRuntime() instead.
    `);
    for (const [newName, oldNames] of Object.entries(ENV_VAR_RENAME))if (oldNames?.includes(name)) (0, __errors_js.throwErr)(`Environment variable ${name} has been renamed to ${newName}. Please update your configuration to use the new name.`);
    let value = getEnvVarWithHexclaveFallback(name);
    const renamedNames = ENV_VAR_RENAME[name];
    if (!value && renamedNames != null) for (const oldName of renamedNames){
        value = getEnvVarWithHexclaveFallback(oldName);
        if (value) break;
    }
    if (!value) if (defaultValue !== void 0) value = defaultValue;
    else (0, __errors_js.throwErr)(`Missing environment variable: ${name}`);
    return value;
}
function getEnvBoolean(name) {
    const value = getEnvVariable(name, "false");
    if (value === "true") return true;
    else if (value === "false") return false;
    else throw new __errors_js.HexclaveAssertionError(`Environment variable ${name} must be either "true" or "false": found ${JSON.stringify(value)}`);
}
function getNextRuntime() {
    return ("TURBOPACK compile-time value", "") || (0, __errors_js.throwErr)("Missing environment variable: NEXT_RUNTIME");
}
function getNodeEnvironment() {
    return getEnvVariable("NODE_ENV", "");
}
/**
* Browser-safe access to `process.env` for server-only or genuinely dynamic
* env-var lookups. Returns `undefined` when `process` is not defined (e.g. in
* a Vite browser bundle without a `process` shim).
*
* Note: uses `process.env[name]` (bracket form), which is NOT recognized by
* Next.js / webpack DefinePlugin for compile-time inlining. If you need
* build-time inlining for a `NEXT_PUBLIC_*` var, use the literal dot-form at
* the call site, guarded with `typeof process`:
*
*   const value = (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_FOO : undefined);
*/ function getProcessEnv(name) {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") return;
    return getEnvVarWithHexclaveFallback(name);
}
//#endregion
exports.getEnvBoolean = getEnvBoolean;
exports.getEnvVariable = getEnvVariable;
exports.getNextRuntime = getNextRuntime;
exports.getNodeEnvironment = getNodeEnvironment;
exports.getProcessEnv = getProcessEnv;
exports.isBrowserLike = isBrowserLike;
exports.resolveHexclaveStackEnvVarValue = resolveHexclaveStackEnvVarValue;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let __objects_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)");
let __globals_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/globals.js [app-client] (ecmascript)");
//#region src/utils/errors.tsx
function throwErr(...args) {
    if (typeof args[0] === "string") throw new HexclaveAssertionError(args[0], args[1]);
    else if (args[0] instanceof Error) throw args[0];
    else throw new StatusError(...args);
}
function removeStacktraceNameLine(stack) {
    const addsNameLine = /* @__PURE__ */ new Error().stack?.startsWith("Error\n");
    return stack.split("\n").slice(addsNameLine ? 1 : 0).join("\n");
}
/**
* Concatenates the (original) stacktraces of the given errors onto the first.
*
* Note: Very often, the concatStacktracesIfRejected function in promises.tsx is an easier way to use this function.
*
* Useful when you invoke an async function to receive a promise without awaiting it immediately. Browsers are smart
* enough to keep track of the call stack in async function calls when you invoke `.then` within the same async tick,
* but if you don't, the stacktrace will be lost.
*
* Here's an example of the unwanted behavior:
*
* ```tsx
* async function log() {
*   await wait(0);  // put the task on the event loop
*   console.log(new Error().stack);
* }
*
* async function main() {
*   await log();  // good; prints both "log" and "main" on the stacktrace
*   log();  // bad; prints only "log" on the stacktrace
* }
* ```
*/ function concatStacktraces(first, ...errors) {
    const addsEmptyLineAtEnd = first.stack?.endsWith("\n");
    const separator = removeStacktraceNameLine(/* @__PURE__ */ new Error().stack ?? "").split("\n")[0];
    for (const error of errors){
        const toAppend = removeStacktraceNameLine(error.stack ?? "");
        first.stack += (addsEmptyLineAtEnd ? "" : "\n") + separator + "\n" + toAppend;
    }
}
var HexclaveAssertionError = class extends Error {
    constructor(message, extraData){
        const disclaimer = `\n\nThis is likely an error in Hexclave. Please make sure you are running the newest version and report it.`;
        super(`${message}${message.endsWith(disclaimer) ? "" : disclaimer}`, (0, __objects_js.pick)(extraData ?? {}, [
            "cause"
        ]));
        this.extraData = extraData;
        Object.defineProperty(this, "customCaptureExtraArgs", {
            get () {
                return [
                    this.extraData
                ];
            },
            enumerable: false
        });
        const hexclaveDebuggerValue = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HEXCLAVE_DEBUGGER_ON_ASSERTION_ERROR : void 0;
        const stackDebuggerValue = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_STACK_DEBUGGER_ON_ASSERTION_ERROR : void 0;
        if (hexclaveDebuggerValue && stackDebuggerValue && hexclaveDebuggerValue !== stackDebuggerValue) throw new Error("Environment variables NEXT_PUBLIC_HEXCLAVE_DEBUGGER_ON_ASSERTION_ERROR and NEXT_PUBLIC_STACK_DEBUGGER_ON_ASSERTION_ERROR are both set to different values. Remove one of them or set them to the same value.");
        if ((hexclaveDebuggerValue || stackDebuggerValue) === "true") debugger;
    }
};
HexclaveAssertionError.prototype.name = "HexclaveAssertionError";
const hexclaveSetupErrorBrand = "hexclave-setup-error-brand-sentinel";
/**
* An error caused by an incomplete or incorrect Hexclave setup in the developer's own project — a domain that has not
* been added to the project's trusted domains, for example.
*
* These are neither the end user's fault nor a bug in Hexclave, and they are usually fatal for the flow they occur in (an
* auth handoff that can never complete, say). Only logging them would leave the developer with a broken flow and no
* visible explanation, so the SDK also renders them on the page; `title` and `howToFix` end up in that card, so write
* them as instructions to the developer rather than as internal diagnostics.
*/ var HexclaveSetupError = class extends Error {
    constructor(options){
        super(options.message, (0, __objects_js.pick)(options.extraData ?? {}, [
            "cause"
        ]));
        this.title = options.title;
        this.howToFix = options.howToFix;
        Object.defineProperty(this, hexclaveSetupErrorBrand, {
            value: true,
            enumerable: false
        });
        Object.defineProperty(this, "customCaptureExtraArgs", {
            get () {
                return [
                    {
                        ...options.extraData,
                        howToFix: options.howToFix
                    }
                ];
            },
            enumerable: false
        });
    }
    /**
	* Like `instanceof`, but also true for setup errors thrown by another copy of this package — an app can easily end up
	* with two of them, and a setup error from either must still show up as one.
	*/ static isSetupError(error) {
        if (typeof error !== "object" || error === null) return false;
        if (!Object.prototype.hasOwnProperty.call(error, hexclaveSetupErrorBrand)) return false;
        if (Reflect.get(error, hexclaveSetupErrorBrand) !== true) return false;
        return typeof Reflect.get(error, "title") === "string" && Array.isArray(Reflect.get(error, "howToFix"));
    }
};
HexclaveSetupError.prototype.name = "HexclaveSetupError";
function errorToNiceString(error) {
    if (!(error instanceof Error)) return `${typeof error}<${(0, __strings_js.nicify)(error)}>`;
    return (0, __strings_js.nicify)(error, {
        maxDepth: 8
    });
}
const errorSinks = /* @__PURE__ */ new Set();
function registerErrorSink(sink) {
    if (errorSinks.has(sink)) return;
    errorSinks.add(sink);
}
registerErrorSink((location, error, level, ...extraArgs)=>{
    (level === "warning" ? console.warn : console.error)(`${level === "warning" ? "\x1B[43m" : "\x1B[41m"}Captured ${level === "warning" ? "warning" : "error"} in ${location}:`, errorToNiceString(error), ...extraArgs, "\x1B[0m");
});
registerErrorSink((location, error, level, ...extraArgs)=>{
    __globals_js.globalVar.hexclaveCapturedErrors = __globals_js.globalVar.hexclaveCapturedErrors ?? [];
    __globals_js.globalVar.hexclaveCapturedErrors.push({
        location,
        error,
        level,
        extraArgs
    });
});
function dispatchToSinks(location, error, level) {
    for (const sink of errorSinks)sink(location, error, level, ...error && (typeof error === "object" || typeof error === "function") && "customCaptureExtraArgs" in error && Array.isArray(error.customCaptureExtraArgs) ? error.customCaptureExtraArgs : []);
}
/**
* Captures an error and sends it to the error sinks (most notably, Sentry). Errors caught with captureError are
* supposed to be seen by an engineer, so they should be actionable and important.
*
* The location string is a machine-readable ID, and should hence not contain spaces or anything like that. Good
* examples are: "api-route-handler", "renderPart()", etc.
*
* Errors that bubble up to the top of runAsynchronously or a route handler are already captured with captureError.
*/ function captureError(location, error) {
    dispatchToSinks(location, error, "error");
}
/**
* Like captureError, but logs at warning level. Use for issues that an engineer should know about but that aren't
* severe enough to be treated as an error (e.g. recoverable failures in background tasks).
*/ function captureWarning(location, error) {
    dispatchToSinks(location, error, "warning");
}
var StatusError = class extends Error {
    static{
        this.BadRequest = {
            statusCode: 400,
            message: "Bad Request"
        };
    }
    static{
        this.Unauthorized = {
            statusCode: 401,
            message: "Unauthorized"
        };
    }
    static{
        this.PaymentRequired = {
            statusCode: 402,
            message: "Payment Required"
        };
    }
    static{
        this.Forbidden = {
            statusCode: 403,
            message: "Forbidden"
        };
    }
    static{
        this.NotFound = {
            statusCode: 404,
            message: "Not Found"
        };
    }
    static{
        this.MethodNotAllowed = {
            statusCode: 405,
            message: "Method Not Allowed"
        };
    }
    static{
        this.NotAcceptable = {
            statusCode: 406,
            message: "Not Acceptable"
        };
    }
    static{
        this.ProxyAuthenticationRequired = {
            statusCode: 407,
            message: "Proxy Authentication Required"
        };
    }
    static{
        this.RequestTimeout = {
            statusCode: 408,
            message: "Request Timeout"
        };
    }
    static{
        this.Conflict = {
            statusCode: 409,
            message: "Conflict"
        };
    }
    static{
        this.Gone = {
            statusCode: 410,
            message: "Gone"
        };
    }
    static{
        this.LengthRequired = {
            statusCode: 411,
            message: "Length Required"
        };
    }
    static{
        this.PreconditionFailed = {
            statusCode: 412,
            message: "Precondition Failed"
        };
    }
    static{
        this.PayloadTooLarge = {
            statusCode: 413,
            message: "Payload Too Large"
        };
    }
    static{
        this.URITooLong = {
            statusCode: 414,
            message: "URI Too Long"
        };
    }
    static{
        this.UnsupportedMediaType = {
            statusCode: 415,
            message: "Unsupported Media Type"
        };
    }
    static{
        this.RangeNotSatisfiable = {
            statusCode: 416,
            message: "Range Not Satisfiable"
        };
    }
    static{
        this.ExpectationFailed = {
            statusCode: 417,
            message: "Expectation Failed"
        };
    }
    static{
        this.ImATeapot = {
            statusCode: 418,
            message: "I'm a teapot"
        };
    }
    static{
        this.MisdirectedRequest = {
            statusCode: 421,
            message: "Misdirected Request"
        };
    }
    static{
        this.UnprocessableEntity = {
            statusCode: 422,
            message: "Unprocessable Entity"
        };
    }
    static{
        this.Locked = {
            statusCode: 423,
            message: "Locked"
        };
    }
    static{
        this.FailedDependency = {
            statusCode: 424,
            message: "Failed Dependency"
        };
    }
    static{
        this.TooEarly = {
            statusCode: 425,
            message: "Too Early"
        };
    }
    static{
        this.UpgradeRequired = {
            statusCode: 426,
            message: "Upgrade Required"
        };
    }
    static{
        this.PreconditionRequired = {
            statusCode: 428,
            message: "Precondition Required"
        };
    }
    static{
        this.TooManyRequests = {
            statusCode: 429,
            message: "Too Many Requests"
        };
    }
    static{
        this.RequestHeaderFieldsTooLarge = {
            statusCode: 431,
            message: "Request Header Fields Too Large"
        };
    }
    static{
        this.UnavailableForLegalReasons = {
            statusCode: 451,
            message: "Unavailable For Legal Reasons"
        };
    }
    static{
        this.InternalServerError = {
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
    static{
        this.NotImplemented = {
            statusCode: 501,
            message: "Not Implemented"
        };
    }
    static{
        this.BadGateway = {
            statusCode: 502,
            message: "Bad Gateway"
        };
    }
    static{
        this.ServiceUnavailable = {
            statusCode: 503,
            message: "Service Unavailable"
        };
    }
    static{
        this.GatewayTimeout = {
            statusCode: 504,
            message: "Gateway Timeout"
        };
    }
    static{
        this.HTTPVersionNotSupported = {
            statusCode: 505,
            message: "HTTP Version Not Supported"
        };
    }
    static{
        this.VariantAlsoNegotiates = {
            statusCode: 506,
            message: "Variant Also Negotiates"
        };
    }
    static{
        this.InsufficientStorage = {
            statusCode: 507,
            message: "Insufficient Storage"
        };
    }
    static{
        this.LoopDetected = {
            statusCode: 508,
            message: "Loop Detected"
        };
    }
    static{
        this.NotExtended = {
            statusCode: 510,
            message: "Not Extended"
        };
    }
    static{
        this.NetworkAuthenticationRequired = {
            statusCode: 511,
            message: "Network Authentication Required"
        };
    }
    constructor(status, message){
        if (typeof status === "object") {
            message ??= status.message;
            status = status.statusCode;
        }
        super(message);
        this.__stackStatusErrorBrand = "stack-status-error-brand-sentinel";
        this.name = "StatusError";
        this.statusCode = status;
        if (!message) throw new HexclaveAssertionError("StatusError always requires a message unless a Status object is passed", {
            cause: this
        });
    }
    static isStatusError(error) {
        return typeof error === "object" && error !== null && "__stackStatusErrorBrand" in error && error.__stackStatusErrorBrand === "stack-status-error-brand-sentinel";
    }
    isClientError() {
        return this.statusCode >= 400 && this.statusCode < 500;
    }
    isServerError() {
        return !this.isClientError();
    }
    getStatusCode() {
        return this.statusCode;
    }
    getBody() {
        return new TextEncoder().encode(this.message);
    }
    getHeaders() {
        return {
            "Content-Type": [
                "text/plain; charset=utf-8"
            ]
        };
    }
    toDescriptiveJson() {
        return {
            status_code: this.getStatusCode(),
            message: this.message,
            headers: this.getHeaders()
        };
    }
    /**
	* @deprecated this is not a good way to make status errors human-readable, use toDescriptiveJson instead
	*/ toHttpJson() {
        return {
            status_code: this.statusCode,
            body: this.message,
            headers: this.getHeaders()
        };
    }
};
StatusError.prototype.name = "StatusError";
//#endregion
exports.HexclaveAssertionError = HexclaveAssertionError;
exports.HexclaveSetupError = HexclaveSetupError;
exports.StatusError = StatusError;
exports.captureError = captureError;
exports.captureWarning = captureWarning;
exports.concatStacktraces = concatStacktraces;
exports.errorToNiceString = errorToNiceString;
exports.registerErrorSink = registerErrorSink;
exports.throwErr = throwErr;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/functions.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/functions.tsx
function identity(t) {
    return t;
}
function identityArgs(...args) {
    return args;
}
//#endregion
exports.identity = identity;
exports.identityArgs = identityArgs;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/globals.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/globals.tsx
const globalVar = typeof globalThis !== "undefined" ? globalThis : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
if (typeof globalThis === "undefined") globalVar.globalThis = globalVar;
const hexclaveGlobalsSymbol = Symbol.for("__hexclave-globals");
globalVar[hexclaveGlobalsSymbol] ??= {};
function createGlobal(key, init) {
    if (!globalVar[hexclaveGlobalsSymbol][key]) globalVar[hexclaveGlobalsSymbol][key] = init();
    return globalVar[hexclaveGlobalsSymbol][key];
}
/**
* Like createGlobal, but if the asynchronous initialization fails, the global will be reset and recomputed on the next
* invocation.
*/ function createGlobalAsync(key, init) {
    let promise = null;
    if (!globalVar[hexclaveGlobalsSymbol][key]) {
        promise = init().catch((e)=>{
            delete globalVar[hexclaveGlobalsSymbol][key];
            throw e;
        });
        globalVar[hexclaveGlobalsSymbol][key] = promise;
    }
    return promise ?? globalVar[hexclaveGlobalsSymbol][key];
}
function getGlobal(key) {
    return globalVar[hexclaveGlobalsSymbol][key];
}
function setGlobal(key, value) {
    globalVar[hexclaveGlobalsSymbol][key] = value;
}
//#endregion
exports.createGlobal = createGlobal;
exports.createGlobalAsync = createGlobalAsync;
exports.getGlobal = getGlobal;
exports.globalVar = globalVar;
exports.setGlobal = setGlobal;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/http.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __bytes_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/bytes.js [app-client] (ecmascript)");
//#region src/utils/http.tsx
const HTTP_METHODS = {
    "GET": {
        safe: true,
        idempotent: true
    },
    "POST": {
        safe: false,
        idempotent: false
    },
    "PUT": {
        safe: false,
        idempotent: true
    },
    "DELETE": {
        safe: false,
        idempotent: true
    },
    "PATCH": {
        safe: false,
        idempotent: false
    },
    "OPTIONS": {
        safe: true,
        idempotent: true
    },
    "HEAD": {
        safe: true,
        idempotent: true
    },
    "TRACE": {
        safe: true,
        idempotent: true
    },
    "CONNECT": {
        safe: false,
        idempotent: false
    }
};
function decodeBasicAuthorizationHeader(value) {
    const [type, encoded, ...rest] = value.split(" ");
    if (rest.length > 0) return null;
    if (!encoded) return null;
    if (type !== "Basic") return null;
    if (!(0, __bytes_js.isBase64)(encoded)) return null;
    const split = new TextDecoder().decode((0, __bytes_js.decodeBase64)(encoded)).split(":");
    return [
        split[0],
        split.slice(1).join(":")
    ];
}
function encodeBasicAuthorizationHeader(id, password) {
    if (id.includes(":")) throw new Error("Basic authorization header id cannot contain ':'");
    return `Basic ${(0, __bytes_js.encodeBase64)(new TextEncoder().encode(`${id}:${password}`))}`;
}
//#endregion
exports.HTTP_METHODS = HTTP_METHODS;
exports.decodeBasicAuthorizationHeader = decodeBasicAuthorizationHeader;
exports.encodeBasicAuthorizationHeader = encodeBasicAuthorizationHeader;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/maps.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
//#region src/utils/maps.tsx
let _Symbol$toStringTag, _Symbol$toStringTag2, _Symbol$toStringTag3;
var WeakRefIfAvailable = class {
    constructor(value){
        if (typeof WeakRef === "undefined") this._ref = {
            deref: ()=>value
        };
        else this._ref = new WeakRef(value);
    }
    deref() {
        return this._ref.deref();
    }
};
/**
* A WeakMap-like object that can be iterated over.
*
* Note that it relies on WeakRef, and always falls back to the regular Map behavior (ie. no GC) in browsers that don't support it.
*/ var IterableWeakMap = class {
    static{
        _Symbol$toStringTag = Symbol.toStringTag;
    }
    constructor(entries){
        this[_Symbol$toStringTag] = "IterableWeakMap";
        const mappedEntries = entries?.map((e)=>[
                e[0],
                {
                    value: e[1],
                    keyRef: new WeakRefIfAvailable(e[0])
                }
            ]);
        this._weakMap = new WeakMap(mappedEntries ?? []);
        this._keyRefs = new Set(mappedEntries?.map((e)=>e[1].keyRef) ?? []);
    }
    get(key) {
        return this._weakMap.get(key)?.value;
    }
    set(key, value) {
        const updated = {
            value,
            keyRef: this._weakMap.get(key)?.keyRef ?? new WeakRefIfAvailable(key)
        };
        this._weakMap.set(key, updated);
        this._keyRefs.add(updated.keyRef);
        return this;
    }
    delete(key) {
        const res = this._weakMap.get(key);
        if (res) {
            this._weakMap.delete(key);
            this._keyRefs.delete(res.keyRef);
            return true;
        }
        return false;
    }
    has(key) {
        return this._weakMap.has(key) && this._keyRefs.has(this._weakMap.get(key).keyRef);
    }
    *[Symbol.iterator]() {
        for (const keyRef of this._keyRefs){
            const key = keyRef.deref();
            const existing = key ? this._weakMap.get(key) : void 0;
            if (!key) this._keyRefs.delete(keyRef);
            else if (existing) yield [
                key,
                existing.value
            ];
        }
    }
};
/**
* A map that is a IterableWeakMap for object keys and a regular Map for primitive keys. Also provides iteration over both
* object and primitive keys.
*
* Note that, just like IterableWeakMap, older browsers without support for WeakRef will use a regular Map for object keys.
*/ var MaybeWeakMap = class {
    static{
        _Symbol$toStringTag2 = Symbol.toStringTag;
    }
    constructor(entries){
        this[_Symbol$toStringTag2] = "MaybeWeakMap";
        const entriesArray = [
            ...entries ?? []
        ];
        this._primitiveMap = new Map(entriesArray.filter((e)=>!this._isAllowedInWeakMap(e[0])));
        this._weakMap = new IterableWeakMap(entriesArray.filter((e)=>this._isAllowedInWeakMap(e[0])));
    }
    _isAllowedInWeakMap(key) {
        return typeof key === "object" && key !== null || typeof key === "symbol" && Symbol.keyFor(key) === void 0;
    }
    get(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.get(key);
        else return this._primitiveMap.get(key);
    }
    set(key, value) {
        if (this._isAllowedInWeakMap(key)) this._weakMap.set(key, value);
        else this._primitiveMap.set(key, value);
        return this;
    }
    delete(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.delete(key);
        else return this._primitiveMap.delete(key);
    }
    has(key) {
        if (this._isAllowedInWeakMap(key)) return this._weakMap.has(key);
        else return this._primitiveMap.has(key);
    }
    *[Symbol.iterator]() {
        yield* this._primitiveMap;
        yield* this._weakMap;
    }
};
/**
* A map that stores values indexed by an array of keys. If the keys are objects and the environment supports WeakRefs,
* they are stored in a WeakMap.
*/ var DependenciesMap = class {
    constructor(){
        this._inner = {
            map: new MaybeWeakMap(),
            hasValue: false,
            value: void 0
        };
        this[_Symbol$toStringTag3] = "DependenciesMap";
    }
    static{
        _Symbol$toStringTag3 = Symbol.toStringTag;
    }
    _valueToResult(inner) {
        if (inner.hasValue) return __results_js.Result.ok(inner.value);
        else return __results_js.Result.error(void 0);
    }
    _unwrapFromInner(dependencies, inner) {
        if (dependencies.length === 0) return this._valueToResult(inner);
        else {
            const [key, ...rest] = dependencies;
            const newInner = inner.map.get(key);
            if (!newInner) return __results_js.Result.error(void 0);
            return this._unwrapFromInner(rest, newInner);
        }
    }
    _setInInner(dependencies, value, inner) {
        if (dependencies.length === 0) {
            const res = this._valueToResult(inner);
            if (value.status === "ok") {
                inner.hasValue = true;
                inner.value = value.data;
            } else {
                inner.hasValue = false;
                inner.value = void 0;
            }
            return res;
        } else {
            const [key, ...rest] = dependencies;
            let newInner = inner.map.get(key);
            if (!newInner) inner.map.set(key, newInner = {
                map: new MaybeWeakMap(),
                hasValue: false,
                value: void 0
            });
            return this._setInInner(rest, value, newInner);
        }
    }
    *_iterateInner(dependencies, inner) {
        if (inner.hasValue) yield [
            dependencies,
            inner.value
        ];
        for (const [key, value] of inner.map)yield* this._iterateInner([
            ...dependencies,
            key
        ], value);
    }
    get(dependencies) {
        return __results_js.Result.or(this._unwrapFromInner(dependencies, this._inner), void 0);
    }
    set(dependencies, value) {
        this._setInInner(dependencies, __results_js.Result.ok(value), this._inner);
        return this;
    }
    delete(dependencies) {
        return this._setInInner(dependencies, __results_js.Result.error(void 0), this._inner).status === "ok";
    }
    has(dependencies) {
        return this._unwrapFromInner(dependencies, this._inner).status === "ok";
    }
    clear() {
        this._inner = {
            map: new MaybeWeakMap(),
            hasValue: false,
            value: void 0
        };
    }
    *[Symbol.iterator]() {
        yield* this._iterateInner([], this._inner);
    }
};
//#endregion
exports.DependenciesMap = DependenciesMap;
exports.IterableWeakMap = IterableWeakMap;
exports.MaybeWeakMap = MaybeWeakMap;
exports.WeakRefIfAvailable = WeakRefIfAvailable;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/math.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/math.tsx
/**
* Similar to the modulo operator, but always returns a positive number (even when the input is negative).
*/ function remainder(n, d) {
    return (n % d + Math.abs(d)) % d;
}
//#endregion
exports.remainder = remainder;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/oauth.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/oauth.tsx
const standardProviders = [
    "google",
    "github",
    "microsoft",
    "spotify",
    "facebook",
    "discord",
    "gitlab",
    "bitbucket",
    "linkedin",
    "apple",
    "x",
    "twitch"
];
const sharedProviders = [
    "google",
    "github",
    "microsoft",
    "spotify"
];
const allProviders = standardProviders;
const publishableClientKeyNotNecessarySentinel = "__stack_public_client__";
/**
* All provider types including custom OIDC. Standard providers are the
* predefined set with first-class support; "custom_oidc" lets users bring
* any OIDC-compliant identity provider (team plan+ only).
*/ const allProviderTypes = [
    ...standardProviders,
    "custom_oidc"
];
//#endregion
exports.allProviderTypes = allProviderTypes;
exports.allProviders = allProviders;
exports.publishableClientKeyNotNecessarySentinel = publishableClientKeyNotNecessarySentinel;
exports.sharedProviders = sharedProviders;
exports.standardProviders = standardProviders;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let __functions_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/functions.js [app-client] (ecmascript)");
let __types_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/types.js [app-client] (ecmascript)");
//#region src/utils/objects.tsx
function isNotNull(value) {
    return value !== null && value !== void 0;
}
/**
* Assumes both objects are primitives, arrays, or non-function plain objects, and compares them deeply.
*
* Note that since they are assumed to be plain objects, this function does not compare prototypes.
*/ function deepPlainEquals(obj1, obj2, options = {}) {
    if (typeof obj1 !== typeof obj2) return false;
    if (obj1 === obj2) return true;
    switch(typeof obj1){
        case "object":
            {
                if (!obj1 || !obj2) return false;
                if (Array.isArray(obj1) || Array.isArray(obj2)) {
                    if (!Array.isArray(obj1) || !Array.isArray(obj2)) return false;
                    if (obj1.length !== obj2.length) return false;
                    return obj1.every((v, i)=>deepPlainEquals(v, obj2[i], options));
                }
                const entries1 = Object.entries(obj1).filter(([k, v])=>!options.ignoreUndefinedValues || v !== void 0);
                const entries2 = Object.entries(obj2).filter(([k, v])=>!options.ignoreUndefinedValues || v !== void 0);
                if (entries1.length !== entries2.length) return false;
                return entries1.every(([k, v1])=>{
                    const e2 = entries2.find(([k2])=>k === k2);
                    if (!e2) return false;
                    return deepPlainEquals(v1, e2[1], options);
                });
            }
        case "undefined":
        case "string":
        case "number":
        case "boolean":
        case "bigint":
        case "symbol":
        case "function":
            return false;
        default:
            throw new Error("Unexpected typeof " + typeof obj1);
    }
}
function isCloneable(obj) {
    return typeof obj !== "symbol" && typeof obj !== "function";
}
function shallowClone(obj) {
    if (!isCloneable(obj)) throw new __errors_js.HexclaveAssertionError("shallowClone does not support symbols or functions", {
        obj
    });
    if (Array.isArray(obj)) return obj.map(__functions_js.identity);
    return {
        ...obj
    };
}
function deepPlainClone(obj) {
    if (typeof obj === "function") throw new __errors_js.HexclaveAssertionError("deepPlainClone does not support functions");
    if (typeof obj === "symbol") throw new __errors_js.HexclaveAssertionError("deepPlainClone does not support symbols");
    if (typeof obj !== "object" || !obj) return obj;
    if (Array.isArray(obj)) return obj.map(deepPlainClone);
    return Object.fromEntries(Object.entries(obj).map(([k, v])=>[
            k,
            deepPlainClone(v)
        ]));
}
function deepMerge(baseObj, mergeObj) {
    if ([
        baseObj,
        mergeObj,
        ...Object.values(baseObj),
        ...Object.values(mergeObj)
    ].some((o)=>!isCloneable(o))) throw new __errors_js.HexclaveAssertionError("deepMerge does not support functions or symbols", {
        baseObj,
        mergeObj
    });
    const res = shallowClone(baseObj);
    for (const [key, mergeValue] of Object.entries(mergeObj)){
        if (has(res, key)) {
            const baseValue = get(res, key);
            if (isObjectLike(baseValue) && isObjectLike(mergeValue)) {
                set(res, key, deepMerge(baseValue, mergeValue));
                continue;
            }
        }
        set(res, key, mergeValue);
    }
    return res;
}
function typedEntries(obj) {
    return Object.entries(obj);
}
function typedFromEntries(entries) {
    return Object.fromEntries(entries);
}
function typedKeys(obj) {
    return Object.keys(obj);
}
function typedValues(obj) {
    return Object.values(obj);
}
function typedAssign(target, source) {
    return Object.assign(target, source);
}
/**
* Returns a new object with all undefined values removed. Useful when spreading optional parameters on an object, as
* TypeScript's `Partial<XYZ>` type allows `undefined` values.
*/ function filterUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0));
}
/**
* Returns a new object with all undefined and null values removed. Useful when spreading optional parameters on an object, as
* TypeScript's `Partial<XYZ>` type allows `undefined` values.
*/ function filterUndefinedOrNull(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0 && v !== null));
}
(0, __types_js.typeAssertIs)()();
function deepFilterUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v])=>v !== void 0).map(([k, v])=>[
            k,
            isObjectLike(v) ? deepFilterUndefined(v) : v
        ]));
}
function pick(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([k])=>keys.includes(k)));
}
function omit(obj, keys) {
    if (!Array.isArray(keys)) throw new __errors_js.HexclaveAssertionError("omit: keys must be an array", {
        obj,
        keys
    });
    return Object.fromEntries(Object.entries(obj).filter(([k])=>!keys.includes(k)));
}
function split(obj, keys) {
    return [
        pick(obj, keys),
        omit(obj, keys)
    ];
}
function mapValues(obj, fn) {
    if (Array.isArray(obj)) return obj.map((v, i)=>fn(v, i));
    return Object.fromEntries(Object.entries(obj).map(([k, v])=>[
            k,
            fn(v, k)
        ]));
}
function sortKeys(obj) {
    if (Array.isArray(obj)) return [
        ...obj
    ];
    return Object.fromEntries(Object.entries(obj).sort(([a], [b])=>(0, __strings_js.stringCompare)(a, b)));
}
function deepSortKeys(obj) {
    return sortKeys(mapValues(obj, (v)=>isObjectLike(v) ? deepSortKeys(v) : v));
}
function set(obj, key, value) {
    if (!isObjectLike(obj)) throw new __errors_js.HexclaveAssertionError(`set: obj is not an object (found: ${obj === null ? "null" : typeof obj})`, {
        obj,
        key,
        value
    });
    Object.defineProperty(obj, key, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
    });
}
function get(obj, key) {
    if (obj == null) throw new __errors_js.HexclaveAssertionError("get: obj is null or undefined", {
        obj,
        key
    });
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (!descriptor) throw new __errors_js.HexclaveAssertionError(`get: key ${String(key)} does not exist`, {
        obj,
        key
    });
    return descriptor.value;
}
function getOrUndefined(obj, key) {
    if (obj == null) throw new __errors_js.HexclaveAssertionError("getOrUndefined: obj is null or undefined", {
        obj,
        key
    });
    return has(obj, key) ? get(obj, key) : void 0;
}
function has(obj, key) {
    if (obj == null) throw new __errors_js.HexclaveAssertionError("has: obj is null or undefined", {
        obj,
        key
    });
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasAndNotUndefined(obj, key) {
    return has(obj, key) && get(obj, key) !== void 0;
}
function deleteKey(obj, key) {
    if (has(obj, key)) Reflect.deleteProperty(obj, key);
    else throw new __errors_js.HexclaveAssertionError(`deleteKey: key ${String(key)} does not exist`, {
        obj,
        key
    });
}
/**
* Returns true iff the value is an object or a function, but not null.
*/ function isObjectLike(value) {
    return (typeof value === "object" || typeof value === "function") && value !== null;
}
//#endregion
exports.deepFilterUndefined = deepFilterUndefined;
exports.deepMerge = deepMerge;
exports.deepPlainClone = deepPlainClone;
exports.deepPlainEquals = deepPlainEquals;
exports.deepSortKeys = deepSortKeys;
exports.deleteKey = deleteKey;
exports.filterUndefined = filterUndefined;
exports.filterUndefinedOrNull = filterUndefinedOrNull;
exports.get = get;
exports.getOrUndefined = getOrUndefined;
exports.has = has;
exports.hasAndNotUndefined = hasAndNotUndefined;
exports.isCloneable = isCloneable;
exports.isNotNull = isNotNull;
exports.isObjectLike = isObjectLike;
exports.mapValues = mapValues;
exports.omit = omit;
exports.pick = pick;
exports.set = set;
exports.shallowClone = shallowClone;
exports.sortKeys = sortKeys;
exports.split = split;
exports.typedAssign = typedAssign;
exports.typedEntries = typedEntries;
exports.typedFromEntries = typedFromEntries;
exports.typedKeys = typedKeys;
exports.typedValues = typedValues;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let ___index_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/index.js [app-client] (ecmascript)");
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __env_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/env.js [app-client] (ecmascript)");
let __maps_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/maps.js [app-client] (ecmascript)");
let __results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let __telemetry_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/telemetry.js [app-client] (ecmascript)");
let __uuids_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/uuids.js [app-client] (ecmascript)");
//#region src/utils/promises.tsx
function createPromise(callback) {
    let status = "pending";
    let valueOrReason = void 0;
    let resolve = null;
    let reject = null;
    const promise = new Promise((res, rej)=>{
        resolve = (value)=>{
            if (status !== "pending") return;
            status = "fulfilled";
            valueOrReason = value;
            res(value);
        };
        reject = (reason)=>{
            if (status !== "pending") return;
            status = "rejected";
            valueOrReason = reason;
            rej(reason);
        };
    });
    callback(resolve, reject);
    return Object.assign(promise, {
        status,
        ...status === "fulfilled" ? {
            value: valueOrReason
        } : {},
        ...status === "rejected" ? {
            reason: valueOrReason
        } : {}
    });
}
let resolvedCache = null;
/**
* Like Promise.resolve(...), but also adds the status and value properties for use with React's `use` hook, and caches
* the value so that invoking `resolved` twice returns the same promise.
*/ function resolved(value) {
    resolvedCache ??= new __maps_js.DependenciesMap();
    if (resolvedCache.has([
        value
    ])) return resolvedCache.get([
        value
    ]);
    const res = Object.assign(Promise.resolve(value), {
        status: "fulfilled",
        value
    });
    resolvedCache.set([
        value
    ], res);
    return res;
}
let rejectedCache = null;
/**
* Like Promise.reject(...), but also adds the status and value properties for use with React's `use` hook, and caches
* the value so that invoking `rejected` twice returns the same promise.
*/ function rejected(reason) {
    rejectedCache ??= new __maps_js.DependenciesMap();
    if (rejectedCache.has([
        reason
    ])) return rejectedCache.get([
        reason
    ]);
    const promise = Promise.reject(reason);
    ignoreUnhandledRejection(promise);
    const res = Object.assign(promise, {
        status: "rejected",
        reason
    });
    rejectedCache.set([
        reason
    ], res);
    return res;
}
const neverResolvePromise = pending(new Promise(()=>{}));
function neverResolve() {
    return neverResolvePromise;
}
function pending(promise, options = {}) {
    const res = promise.then((value)=>{
        res.status = "fulfilled";
        res.value = value;
        return value;
    }, (actualReason)=>{
        res.status = "rejected";
        res.reason = actualReason;
        throw actualReason;
    });
    res.status = "pending";
    return res;
}
/**
* Should be used to wrap Promises that are not immediately awaited, so they don't throw an unhandled promise rejection
* error.
*
* Vercel kills serverless functions on unhandled promise rejection errors, so this is important.
*/ function ignoreUnhandledRejection(promise) {
    promise.catch(()=>{});
}
/**
* See concatStacktraces for more information.
*/ function concatStacktracesIfRejected(promise) {
    const currentError = /* @__PURE__ */ new Error();
    promise.catch((error)=>{
        if (error instanceof Error) (0, __errors_js.concatStacktraces)(error, currentError);
    });
}
async function wait(ms, options) {
    if (!Number.isFinite(ms) || ms < 0) throw new __errors_js.HexclaveAssertionError(`wait() requires a non-negative integer number of milliseconds to wait. (found: ${ms}ms)`);
    if (ms >= 2 ** 31) throw new __errors_js.HexclaveAssertionError("The maximum timeout for wait() is 2147483647ms (2**31 - 1). (found: ${ms}ms)");
    return await (0, __telemetry_js.traceSpan)({
        description: "wait(...)",
        attributes: {
            "stack.wait.ms": ms
        }
    }, async (span)=>{
        return await new Promise((resolve)=>{
            const timeout = setTimeout(resolve, ms);
            if (options?.unref === true && typeof timeout === "object") timeout.unref();
        });
    });
}
async function waitUntil(date) {
    return await wait(date.getTime() - Date.now());
}
function runAsynchronouslyWithAlert(...args) {
    return runAsynchronously(args[0], {
        ...args[1],
        onError: (error)=>{
            const nodeEnv = (0, __env_js.getProcessEnv)("NODE_ENV");
            if (___index_js.KnownError.isKnownError(error) && nodeEnv?.includes("production")) alert(error.message);
            else alert(`An unhandled error occurred. Please ${nodeEnv === "development" ? `check the browser console for the full error.` : "report this to the developer."}\n\n${error}`);
            args[1]?.onError?.(error);
        }
    }, ...args.slice(2));
}
function runAsynchronously(promiseOrFunc, options = {}) {
    if (typeof promiseOrFunc === "function") promiseOrFunc = promiseOrFunc();
    if (promiseOrFunc) {
        concatStacktracesIfRejected(promiseOrFunc);
        promiseOrFunc.catch((error)=>{
            options.onError?.(error);
            const newError = new __errors_js.HexclaveAssertionError("Uncaught error in asynchronous function: " + (0, __errors_js.errorToNiceString)(error), {
                cause: error
            });
            if (!options.noErrorLogging) (0, __errors_js.captureError)("runAsynchronously", newError);
        });
    }
}
var TimeoutError = class extends Error {
    constructor(ms){
        super(`Timeout after ${ms}ms`);
        this.ms = ms;
        this.name = "TimeoutError";
    }
};
async function timeout(promiseOrFunc, ms) {
    const promise = typeof promiseOrFunc === "function" ? promiseOrFunc() : promiseOrFunc;
    return await Promise.race([
        promise.then((value)=>__results_js.Result.ok(value)),
        wait(ms).then(()=>__results_js.Result.error(new TimeoutError(ms)))
    ]);
}
async function timeoutThrow(promise, ms) {
    return __results_js.Result.orThrow(await timeout(promise, ms));
}
/**
* Maps over `items` with `fn`, running at most `concurrency` invocations at a time.
*
* Unlike `Promise.all(items.map(fn))`, this bounds the number of in-flight
* promises, which matters when `fn` hits a shared resource (e.g. a database) and
* an unbounded fan-out could exhaust connections or overload a replica. Results
* are returned in input order regardless of completion order, and the first
* rejection aborts further scheduling — already in-flight workers still settle
* but no new items are started.
*/ async function mapWithConcurrency(items, concurrency, fn) {
    if (!Number.isInteger(concurrency) || concurrency < 1) throw new __errors_js.HexclaveAssertionError(`mapWithConcurrency requires a positive integer concurrency, got ${concurrency}`);
    const results = new Array(items.length);
    let nextIndex = 0;
    let aborted = false;
    const worker = async ()=>{
        while(!aborted){
            const index = nextIndex++;
            if (index >= items.length) return;
            try {
                results[index] = await fn(items[index], index);
            } catch (error) {
                aborted = true;
                throw error;
            }
        }
    };
    const workerCount = Math.min(concurrency, items.length);
    await Promise.all(Array.from({
        length: workerCount
    }, ()=>worker()));
    return results;
}
function rateLimited(func, options) {
    let waitUntil = performance.now();
    let queue = [];
    let addedToQueueCallbacks = /* @__PURE__ */ new Map();
    const next = async ()=>{
        while(true)if (waitUntil > performance.now()) await wait(Math.max(1, waitUntil - performance.now() + 1));
        else if (queue.length === 0) {
            const uuid = (0, __uuids_js.generateUuid)();
            await new Promise((resolve)=>{
                addedToQueueCallbacks.set(uuid, resolve);
            });
            addedToQueueCallbacks.delete(uuid);
        } else break;
        const nextFuncs = options.batchCalls ? queue.splice(0, queue.length) : [
            queue.shift()
        ];
        const start = performance.now();
        const value = await __results_js.Result.fromPromise(func());
        const end = performance.now();
        waitUntil = Math.max(waitUntil, start + (options.throttleMs ?? 0), end + (options.gapMs ?? 0));
        for (const nextFunc of nextFuncs)if (value.status === "ok") nextFunc[0](value.data);
        else nextFunc[1](value.error);
    };
    runAsynchronously(async ()=>{
        while(true)await next();
    });
    return ()=>{
        return new Promise((resolve, reject)=>{
            waitUntil = Math.max(waitUntil, performance.now() + (options.debounceMs ?? 0));
            queue.push([
                resolve,
                reject
            ]);
            addedToQueueCallbacks.forEach((cb)=>cb());
        });
    };
}
function throttled(func, delayMs) {
    let nextAvailable = null;
    return async (...args)=>{
        while(nextAvailable !== null)await nextAvailable;
        nextAvailable = new Promise((resolve)=>{
            setTimeout(()=>{
                nextAvailable = null;
                resolve(func(...args));
            }, delayMs);
        });
        return await nextAvailable;
    };
}
//#endregion
exports.concatStacktracesIfRejected = concatStacktracesIfRejected;
exports.createPromise = createPromise;
exports.ignoreUnhandledRejection = ignoreUnhandledRejection;
exports.mapWithConcurrency = mapWithConcurrency;
exports.neverResolve = neverResolve;
exports.pending = pending;
exports.rateLimited = rateLimited;
exports.rejected = rejected;
exports.resolved = resolved;
exports.runAsynchronously = runAsynchronously;
exports.runAsynchronouslyWithAlert = runAsynchronouslyWithAlert;
exports.throttled = throttled;
exports.timeout = timeout;
exports.timeoutThrow = timeoutThrow;
exports.wait = wait;
exports.waitUntil = waitUntil;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/react.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
const require_rolldown_runtime = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/rolldown-runtime-D6vf50IK.js [app-client] (ecmascript)");
let react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
react = require_rolldown_runtime.__toESM(react);
let __promises_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)");
//#region src/utils/react.tsx
function componentWrapper(displayName, render) {
    const Component = forwardRefIfNeeded(render);
    Component.displayName = displayName;
    return Component;
}
const react18PromiseCache = /* @__PURE__ */ new WeakMap();
function use(promise) {
    if ("use" in react.default) return react.default.use(promise);
    else if (react18PromiseCache.has(promise)) {
        const result = react18PromiseCache.get(promise);
        if (result.status === "pending") throw promise;
        else if (result.status === "ok") return result.data;
        else throw result.error;
    } else {
        react18PromiseCache.set(promise, {
            "status": "pending",
            progress: void 0
        });
        (0, __promises_js.runAsynchronously)(async ()=>{
            try {
                const res = await promise;
                react18PromiseCache.set(promise, {
                    "status": "ok",
                    data: res
                });
            } catch (e) {
                react18PromiseCache.set(promise, {
                    "status": "error",
                    error: e
                });
            }
        });
        throw promise;
    }
}
function forwardRefIfNeeded(render) {
    const version = react.default.version;
    if (parseInt(version.split(".")[0]) < 19) return react.default.forwardRef(render);
    else return (props)=>render(props, props.ref);
}
function getNodeText(node) {
    if ([
        "number",
        "string"
    ].includes(typeof node)) return `${node}`;
    if (!node) return "";
    if (Array.isArray(node)) return node.map(getNodeText).join("");
    if (react.default.isValidElement(node)) return getNodeText(node.props.children);
    throw new Error(`Unknown node type: ${typeof node}`);
}
/**
* Suspends the currently rendered component indefinitely. Will not unsuspend unless the component rerenders.
*
* You can use this to translate older query- or AsyncResult-based code to new the Suspense system, for example: `if (query.isLoading) suspend();`
*/ function suspend() {
    use((0, __promises_js.neverResolve)());
    throw new Error("Somehow a Promise that never resolves was resolved?");
}
function mapRef(ref, mapper) {
    let last = null;
    return {
        get current () {
            const input = ref.current;
            if (last === null || input !== last[0]) last = [
                input,
                mapper(input)
            ];
            return last[1];
        }
    };
}
/**
* Like useState, but its value is immediately available on refState.current after being set.
*
* Like useRef, but setting the value will cause a rerender.
*
* Note that useRefState returns a new object every time a rerender happens due to a value change, which is intentional
* as it allows you to specify it in a dependency array like this:
*
* ```tsx
* useEffect(() => {
*   // do something with refState.current
* }, [refState]);  // instead of refState.current
* ```
*
* If you don't want this, you can wrap the result in a useMemo call.
*/ function useRefState(initialValue) {
    const lazyInitRef = react.default.useRef(null);
    if (lazyInitRef.current === null) lazyInitRef.current = {
        v: typeof initialValue === "function" ? initialValue() : initialValue
    };
    const resolvedInitialValue = lazyInitRef.current.v;
    const [, setState] = react.default.useState({
        "useRefState.useState": ()=>resolvedInitialValue
    }["useRefState.useState"]);
    const ref = react.default.useRef(resolvedInitialValue);
    const setValue = react.default.useCallback({
        "useRefState.useCallback[setValue]": (updater)=>{
            const value = typeof updater === "function" ? updater(ref.current) : updater;
            ref.current = value;
            setState(value);
        }
    }["useRefState.useCallback[setValue]"], []);
    return react.default.useMemo({
        "useRefState.useMemo": ()=>({
                get current () {
                    return ref.current;
                },
                set: setValue
            })
    }["useRefState.useMemo"], [
        setValue
    ]);
}
function mapRefState(refState, mapper, reverseMapper) {
    let last = null;
    return {
        get current () {
            const input = refState.current;
            if (last === null || input !== last[0]) last = [
                input,
                mapper(input)
            ];
            return last[1];
        },
        set (updater) {
            const value = typeof updater === "function" ? updater(this.current) : updater;
            refState.set(reverseMapper(refState.current, value));
        }
    };
}
function useQueryState(key, defaultValue) {
    const getValue = ()=>new URLSearchParams(window.location.search).get(key) ?? defaultValue ?? null;
    const [value, setValue] = react.default.useState(getValue);
    react.default.useEffect({
        "useQueryState.useEffect": ()=>{
            const onPopState = {
                "useQueryState.useEffect.onPopState": ()=>setValue(getValue())
            }["useQueryState.useEffect.onPopState"];
            window.addEventListener("popstate", onPopState);
            return ({
                "useQueryState.useEffect": ()=>window.removeEventListener("popstate", onPopState)
            })["useQueryState.useEffect"];
        }
    }["useQueryState.useEffect"], []);
    const update = (next)=>{
        const params = new URLSearchParams(window.location.search);
        if (next !== null) params.set(key, next);
        else params.delete(key);
        const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
        window.history.pushState(null, "", newUrl);
        setValue(next);
    };
    return [
        value,
        update
    ];
}
//#endregion
exports.componentWrapper = componentWrapper;
exports.forwardRefIfNeeded = forwardRefIfNeeded;
exports.getNodeText = getNodeText;
exports.mapRef = mapRef;
exports.mapRefState = mapRefState;
exports.suspend = suspend;
exports.use = use;
exports.useQueryState = useQueryState;
exports.useRefState = useRefState;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
let __promises_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)");
//#region src/utils/results.tsx
const Result = {
    fromThrowing,
    fromThrowingAsync,
    fromPromise: promiseToResult,
    ok (data) {
        return {
            status: "ok",
            data
        };
    },
    error (error) {
        return {
            status: "error",
            error
        };
    },
    map: mapResult,
    or: (result, fallback)=>{
        return result.status === "ok" ? result.data : fallback;
    },
    orThrow: (result)=>{
        if (result.status === "error") throw result.error;
        return result.data;
    },
    orThrowAsync: async (result)=>{
        return Result.orThrow(await result);
    },
    retry
};
const AsyncResult = {
    fromThrowing,
    fromPromise: promiseToResult,
    ok: Result.ok,
    error: Result.error,
    pending,
    map: mapResult,
    or: (result, fallback)=>{
        if (result.status === "pending") return fallback;
        return Result.or(result, fallback);
    },
    orThrow: (result)=>{
        if (result.status === "pending") throw new Error("Result still pending");
        return Result.orThrow(result);
    },
    retry
};
function pending(progress) {
    return {
        status: "pending",
        progress
    };
}
async function promiseToResult(promise) {
    try {
        const value = await promise;
        return Result.ok(value);
    } catch (error) {
        return Result.error(error);
    }
}
function fromThrowing(fn) {
    try {
        return Result.ok(fn());
    } catch (error) {
        return Result.error(error);
    }
}
async function fromThrowingAsync(fn) {
    try {
        return Result.ok(await fn());
    } catch (error) {
        return Result.error(error);
    }
}
function mapResult(result, fn) {
    if (result.status === "error") return {
        status: "error",
        error: result.error
    };
    if (result.status === "pending") return {
        status: "pending",
        ..."progress" in result ? {
            progress: result.progress
        } : {}
    };
    return Result.ok(fn(result.data));
}
var RetryError = class extends AggregateError {
    constructor(errors){
        const strings = errors.map((e)=>(0, __strings_js.nicify)(e));
        const isAllSame = strings.length > 1 && strings.every((s)=>s === strings[0]);
        super(errors, __strings_js.deindent`
      Error after ${errors.length} attempts.
      
      ${isAllSame ? __strings_js.deindent`
        Attempts 1-${errors.length}:
          ${strings[0]}
      ` : strings.map((s, i)=>__strings_js.deindent`
          Attempt ${i + 1}:
            ${s}
        `).join("\n\n")}
      `, {
            cause: errors[errors.length - 1]
        });
        this.errors = errors;
        this.name = "RetryError";
    }
    get attempts() {
        return this.errors.length;
    }
};
RetryError.prototype.name = "RetryError";
async function retry(fn, totalAttempts, { exponentialDelayBase = 1e3 } = {}) {
    const errors = [];
    for(let i = 0; i < totalAttempts; i++){
        const res = await fn(i);
        if (res.status === "ok") return Object.assign(Result.ok(res.data), {
            attempts: i + 1
        });
        else {
            errors.push(res.error);
            if (i < totalAttempts - 1) await (0, __promises_js.wait)((Math.random() + .5) * exponentialDelayBase * 2 ** i);
        }
    }
    return Object.assign(Result.error(new RetryError(errors)), {
        attempts: totalAttempts
    });
}
//#endregion
exports.AsyncResult = AsyncResult;
exports.Result = Result;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/stores.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __promises_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/promises.js [app-client] (ecmascript)");
let __results_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/results.js [app-client] (ecmascript)");
let __uuids_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/uuids.js [app-client] (ecmascript)");
//#region src/utils/stores.tsx
var Store = class {
    constructor(_value){
        this._value = _value;
        this._callbacks = /* @__PURE__ */ new Map();
    }
    get() {
        return this._value;
    }
    set(value) {
        const oldValue = this._value;
        this._value = value;
        this._callbacks.forEach((callback)=>callback(value, oldValue));
    }
    update(updater) {
        const value = updater(this._value);
        this.set(value);
        return value;
    }
    onChange(callback) {
        const uuid = (0, __uuids_js.generateUuid)();
        this._callbacks.set(uuid, callback);
        return {
            unsubscribe: ()=>{
                this._callbacks.delete(uuid);
            }
        };
    }
    onceChange(callback) {
        const { unsubscribe } = this.onChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
};
var AsyncStore = class AsyncStore {
    constructor(...args){
        this._mostRecentOkValue = void 0;
        this._isRejected = false;
        this._waitingRejectFunctions = /* @__PURE__ */ new Map();
        this._callbacks = /* @__PURE__ */ new Map();
        this._updateCounter = 0;
        this._lastSuccessfulUpdate = -1;
        if (args.length === 0) this._isAvailable = false;
        else {
            this._isAvailable = true;
            this._mostRecentOkValue = args[0];
        }
    }
    isAvailable() {
        return this._isAvailable;
    }
    isRejected() {
        return this._isRejected;
    }
    get() {
        if (this.isRejected()) return __results_js.AsyncResult.error(this._rejectionError);
        else if (this.isAvailable()) return __results_js.AsyncResult.ok(this._mostRecentOkValue);
        else return __results_js.AsyncResult.pending();
    }
    getOrWait() {
        const uuid = (0, __uuids_js.generateUuid)();
        if (this.isRejected()) return (0, __promises_js.rejected)(this._rejectionError);
        else if (this.isAvailable()) return (0, __promises_js.resolved)(this._mostRecentOkValue);
        return (0, __promises_js.pending)(new Promise((resolve, reject)=>{
            this.onceChange((value)=>{
                resolve(value);
            });
            this._waitingRejectFunctions.set(uuid, reject);
        }).finally(()=>{
            this._waitingRejectFunctions.delete(uuid);
        }));
    }
    _setIfLatest(result, curCounter) {
        const oldState = this.get();
        const oldValue = this._mostRecentOkValue;
        if (curCounter > this._lastSuccessfulUpdate) switch(result.status){
            case "ok":
                if (!this._isAvailable || this._isRejected || this._mostRecentOkValue !== result.data) {
                    this._lastSuccessfulUpdate = curCounter;
                    this._isAvailable = true;
                    this._isRejected = false;
                    this._mostRecentOkValue = result.data;
                    this._rejectionError = void 0;
                    this._callbacks.forEach((callback)=>callback({
                            state: this.get(),
                            oldState,
                            lastOkValue: oldValue
                        }));
                    return true;
                }
                return false;
            case "error":
                this._lastSuccessfulUpdate = curCounter;
                this._isAvailable = false;
                this._isRejected = true;
                this._rejectionError = result.error;
                this._waitingRejectFunctions.forEach((reject)=>reject(result.error));
                this._callbacks.forEach((callback)=>callback({
                        state: this.get(),
                        oldState,
                        lastOkValue: oldValue
                    }));
                return true;
        }
        return false;
    }
    set(value) {
        this._setIfLatest(__results_js.Result.ok(value), ++this._updateCounter);
    }
    update(updater) {
        const value = updater(this._mostRecentOkValue);
        this.set(value);
        return value;
    }
    async setAsync(promise) {
        const curCounter = ++this._updateCounter;
        const result = await __results_js.Result.fromPromise(promise);
        return this._setIfLatest(result, curCounter);
    }
    setUnavailable() {
        this._lastSuccessfulUpdate = ++this._updateCounter;
        this._mostRecentOkValue = void 0;
        this._isAvailable = false;
        this._isRejected = false;
        this._rejectionError = void 0;
    }
    setRejected(error) {
        this._setIfLatest(__results_js.Result.error(error), ++this._updateCounter);
    }
    map(mapper) {
        const store = new AsyncStore();
        this.onChange((value)=>{
            store.set(mapper(value));
        });
        return store;
    }
    onChange(callback) {
        return this.onStateChange(({ state, lastOkValue })=>{
            if (state.status === "ok") callback(state.data, lastOkValue);
        });
    }
    onStateChange(callback) {
        const uuid = (0, __uuids_js.generateUuid)();
        this._callbacks.set(uuid, callback);
        return {
            unsubscribe: ()=>{
                this._callbacks.delete(uuid);
            }
        };
    }
    onceChange(callback) {
        const { unsubscribe } = this.onChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
    onceStateChange(callback) {
        const { unsubscribe } = this.onStateChange((...args)=>{
            unsubscribe();
            callback(...args);
        });
        return {
            unsubscribe
        };
    }
};
//#endregion
exports.AsyncStore = AsyncStore;
exports.Store = Store;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __objects_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/objects.js [app-client] (ecmascript)");
let __arrays_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/arrays.js [app-client] (ecmascript)");
//#region src/utils/strings.tsx
function typedJoin(strings, separator) {
    return strings.join(separator);
}
function typedToLowercase(s) {
    if (typeof s !== "string") throw new __errors_js.HexclaveAssertionError("Expected a string for typedToLowercase", {
        s
    });
    return s.toLowerCase();
}
function typedToUppercase(s) {
    if (typeof s !== "string") throw new __errors_js.HexclaveAssertionError("Expected a string for typedToUppercase", {
        s
    });
    return s.toUpperCase();
}
function typedCapitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
* Compares two strings in a way that is not dependent on the current locale.
*/ function stringCompare(a, b) {
    if (typeof a !== "string" || typeof b !== "string") throw new __errors_js.HexclaveAssertionError(`Expected two strings for stringCompare, found ${typeof a} and ${typeof b}`, {
        a,
        b
    });
    const cmp = (a, b)=>a < b ? -1 : a > b ? 1 : 0;
    return cmp(a.toUpperCase(), b.toUpperCase()) || cmp(b, a);
}
/**
* Returns all whitespace character at the start of the string.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function getWhitespacePrefix(s) {
    return s.substring(0, s.length - s.trimStart().length);
}
/**
* Returns all whitespace character at the end of the string.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function getWhitespaceSuffix(s) {
    return s.substring(s.trimEnd().length);
}
/**
* Returns a string with all empty or whitespace-only lines at the start removed.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimEmptyLinesStart(s) {
    const lines = s.split("\n");
    const firstNonEmptyLineIndex = lines.findIndex((line)=>line.trim() !== "");
    if (firstNonEmptyLineIndex === -1) return "";
    return lines.slice(firstNonEmptyLineIndex).join("\n");
}
/**
* Returns a string with all empty or whitespace-only lines at the end removed.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimEmptyLinesEnd(s) {
    const lines = s.split("\n");
    const lastNonEmptyLineIndex = (0, __arrays_js.findLastIndex)(lines, (line)=>line.trim() !== "");
    return lines.slice(0, lastNonEmptyLineIndex + 1).join("\n");
}
/**
* Returns a string with all empty or whitespace-only lines trimmed at the start and end.
*
* Uses the same definition for whitespace as `String.prototype.trim()`.
*/ function trimLines(s) {
    return trimEmptyLinesEnd(trimEmptyLinesStart(s));
}
/**
* A template literal tag that returns the same string as the template literal without a tag.
*
* Useful for implementing your own template literal tags.
*/ function templateIdentity(strings, ...values) {
    if (values.length !== strings.length - 1) throw new __errors_js.HexclaveAssertionError("Invalid number of values; must be one less than strings", {
        strings,
        values
    });
    return strings.reduce((result, str, i)=>result + str + (values[i] ?? ""), "");
}
function deindent(strings, ...values) {
    if (typeof strings === "string") return deindent([
        strings
    ]);
    return templateIdentity(...deindentTemplate(strings, ...values));
}
function deindentTemplate(strings, ...values) {
    if (values.length !== strings.length - 1) throw new __errors_js.HexclaveAssertionError("Invalid number of values; must be one less than strings", {
        strings,
        values
    });
    const trimmedStrings = [
        ...strings
    ];
    trimmedStrings[0] = trimEmptyLinesStart(trimmedStrings[0] + "+").slice(0, -1);
    trimmedStrings[trimmedStrings.length - 1] = trimEmptyLinesEnd("+" + trimmedStrings[trimmedStrings.length - 1]).slice(1);
    const indentation = trimmedStrings.join("${SOME_VALUE}").split("\n").filter((line)=>line.trim() !== "").map((line)=>getWhitespacePrefix(line).length).reduce((min, current)=>Math.min(min, current), Infinity);
    const deindentedStrings = trimmedStrings.map((string, stringIndex)=>{
        return string.split("\n").map((line, lineIndex)=>stringIndex !== 0 && lineIndex === 0 ? line : line.substring(indentation)).join("\n");
    });
    return [
        deindentedStrings,
        ...values.map((value, i)=>{
            const firstLineIndentation = getWhitespacePrefix(deindentedStrings[i].split("\n").at(-1));
            return `${value}`.replaceAll("\n", `\n${firstLineIndentation}`);
        })
    ];
}
function extractScopes(scope, removeDuplicates = true) {
    const filtered = scope.trim().split(/\s+/).filter((scope)=>scope.length > 0);
    return removeDuplicates ? [
        ...new Set(filtered)
    ] : filtered;
}
function mergeScopeStrings(...scopes) {
    return extractScopes(scopes.map((s)=>extractScopes(s)).flat().join(" ")).join(" ");
}
function escapeTemplateLiteral(s) {
    return s.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
}
/**
* Some classes have different constructor names in different environments (eg. `Headers` is sometimes called `_Headers`,
* so we create an object of overrides to handle these cases.
*/ const nicifiableClassNameOverrides = new Map(Object.entries({
    Headers
}).map(([k, v])=>[
        v,
        k
    ]));
function nicify(value, options = {}) {
    const fullOptions = {
        maxDepth: 5,
        currentIndent: "",
        lineIndent: "  ",
        multiline: true,
        refs: /* @__PURE__ */ new Map(),
        path: "value",
        parent: null,
        overrides: ()=>null,
        keyInParent: null,
        hideFields: [],
        ...(0, __objects_js.filterUndefined)(options)
    };
    const { maxDepth, currentIndent, lineIndent, multiline, refs, path, overrides, hideFields } = fullOptions;
    const nl = `\n${currentIndent}`;
    const overrideResult = overrides(value, options);
    if (overrideResult !== null) return overrideResult;
    if ([
        "function",
        "object",
        "symbol"
    ].includes(typeof value) && value !== null) {
        if (refs.has(value)) return `Ref<${refs.get(value)}>`;
        refs.set(value, path);
    }
    const newOptions = {
        maxDepth: maxDepth - 1,
        currentIndent,
        lineIndent,
        multiline,
        refs,
        path: path + "->[unknown property]",
        overrides,
        parent: {
            value,
            options: fullOptions
        },
        keyInParent: null,
        hideFields: []
    };
    const nestedNicify = (newValue, newPath, keyInParent, options = {})=>{
        return nicify(newValue, {
            ...newOptions,
            path: newPath,
            currentIndent: currentIndent + lineIndent,
            keyInParent,
            ...options
        });
    };
    switch(typeof value){
        case "boolean":
        case "number":
            return JSON.stringify(value);
        case "string":
            {
                const isDeindentable = (v)=>deindent(v) === v && v.includes("\n");
                const wrapInDeindent = (v)=>deindent`
        deindent\`
        ${currentIndent + lineIndent}${escapeTemplateLiteral(v).replaceAll("\n", nl + lineIndent)}
        ${currentIndent}\`
      `;
                if (isDeindentable(value)) return wrapInDeindent(value);
                else if (value.endsWith("\n") && isDeindentable(value.slice(0, -1))) return wrapInDeindent(value.slice(0, -1)) + " + \"\\n\"";
                else return JSON.stringify(value);
            }
        case "undefined":
            return "undefined";
        case "symbol":
            return value.toString();
        case "bigint":
            return `${value}n`;
        case "function":
            if (value.name) return `function ${value.name}(...) { ... }`;
            return `(...) => { ... }`;
        case "object":
            {
                if (value === null) return "null";
                if (Array.isArray(value)) {
                    const extraLines = getNicifiedObjectExtraLines(value);
                    const resValueLength = value.length + extraLines.length;
                    if (resValueLength === 0) return "[]";
                    if (maxDepth <= 0) return `[...]`;
                    const resValues = value.map((v, i)=>nestedNicify(v, `${path}[${i}]`, i));
                    resValues.push(...extraLines);
                    if (resValues.length !== resValueLength) throw new __errors_js.HexclaveAssertionError("nicify of object: resValues.length !== resValueLength", {
                        value,
                        resValues,
                        resValueLength
                    });
                    if (resValues.length > 4 || resValues.some((x)=>resValues.length > 1 && x.length > 4 || x.includes("\n"))) return `[${nl}${resValues.map((x)=>`${lineIndent}${x},${nl}`).join("")}]`;
                    else return `[${resValues.join(", ")}]`;
                }
                if (value instanceof Date) return `Date(${nestedNicify(value.toISOString(), `${path}.toISOString()`, null)})`;
                if (value instanceof URL) return `URL(${nestedNicify(value.toString(), `${path}.toString()`, null)})`;
                if (ArrayBuffer.isView(value)) return `${value.constructor.name}([${value.toString()}])`;
                if (value instanceof ArrayBuffer) return `ArrayBuffer [${new Uint8Array(value).toString()}]`;
                if (value instanceof Error) {
                    let stack = value.stack ?? "";
                    const toString = value.toString();
                    if (!stack.startsWith(toString)) stack = `${toString}\n${stack}`;
                    stack = stack.trimEnd();
                    stack = stack.replace(/\n\s+/g, `\n${lineIndent}${lineIndent}`);
                    stack = stack.replace("\n", `\n${lineIndent}Stack:\n`);
                    if (Object.keys(value).length > 0) stack += `\n${lineIndent}Extra properties: ${nestedNicify(Object.fromEntries(Object.entries(value)), path, null)}`;
                    if (value.cause) stack += `\n${lineIndent}Cause:\n${lineIndent}${lineIndent}${nestedNicify(value.cause, path, null, {
                        currentIndent: currentIndent + lineIndent + lineIndent
                    })}`;
                    stack = stack.replaceAll("\n", `\n${currentIndent}`);
                    return stack;
                }
                const constructorName = [
                    null,
                    Object.prototype
                ].includes(Object.getPrototypeOf(value)) ? null : nicifiableClassNameOverrides.get(value.constructor) ?? value.constructor.name;
                const constructorString = constructorName ? `${constructorName} ` : "";
                const entries = getNicifiableEntries(value).filter(([k])=>!hideFields.includes(k));
                const extraLines = [
                    ...getNicifiedObjectExtraLines(value),
                    ...hideFields.length > 0 ? [
                        `<some fields may have been hidden>`
                    ] : []
                ];
                const resValueLength = entries.length + extraLines.length;
                if (resValueLength === 0) return `${constructorString}{}`;
                if (maxDepth <= 0) return `${constructorString}{ ... }`;
                const resValues = entries.map(([k, v], keyIndex)=>{
                    const keyNicified = nestedNicify(k, `Object.keys(${path})[${keyIndex}]`, null);
                    const keyInObjectLiteral = typeof k === "string" ? nicifyPropertyString(k) : `[${keyNicified}]`;
                    if (typeof v === "function" && v.name === k) return `${keyInObjectLiteral}(...): { ... }`;
                    else return `${keyInObjectLiteral}: ${nestedNicify(v, `${path}[${keyNicified}]`, k)}`;
                });
                resValues.push(...extraLines);
                if (resValues.length !== resValueLength) throw new __errors_js.HexclaveAssertionError("nicify of object: resValues.length !== resValueLength", {
                    value,
                    resValues,
                    resValueLength
                });
                const shouldIndent = resValues.length > 1 || resValues.some((x)=>x.includes("\n"));
                if (resValues.length === 0) return `${constructorString}{}`;
                if (shouldIndent) return `${constructorString}{${nl}${resValues.map((x)=>`${lineIndent}${x},${nl}`).join("")}}`;
                else return `${constructorString}{ ${resValues.join(", ")} }`;
            }
        default:
            return `${typeof value}<${value}>`;
    }
}
function replaceAll(input, searchValue, replaceValue) {
    if (searchValue === "") throw new __errors_js.HexclaveAssertionError("replaceAll: searchValue is empty");
    return input.split(searchValue).join(replaceValue);
}
function nicifyPropertyString(str) {
    return JSON.stringify(str);
}
function getNicifiableKeys(value) {
    const overridden = ("getNicifiableKeys" in value ? value.getNicifiableKeys?.bind(value) : null)?.();
    if (overridden != null) return overridden;
    if (value instanceof Response) return [
        "status",
        "headers"
    ];
    return (0, __arrays_js.unique)(Object.keys(value).sort());
}
function getNicifiableEntries(value) {
    const recordLikes = [
        Headers
    ];
    function isRecordLike(value) {
        return recordLikes.some((x)=>value instanceof x);
    }
    if (isRecordLike(value)) return [
        ...value.entries()
    ].sort(([a], [b])=>stringCompare(`${a}`, `${b}`));
    return getNicifiableKeys(value).map((k)=>[
            k,
            value[k]
        ]);
}
function getNicifiedObjectExtraLines(value) {
    return ("getNicifiedObjectExtraLines" in value ? value.getNicifiedObjectExtraLines : null)?.() ?? [];
}
//#endregion
exports.deindent = deindent;
exports.deindentTemplate = deindentTemplate;
exports.escapeTemplateLiteral = escapeTemplateLiteral;
exports.extractScopes = extractScopes;
exports.getWhitespacePrefix = getWhitespacePrefix;
exports.getWhitespaceSuffix = getWhitespaceSuffix;
exports.mergeScopeStrings = mergeScopeStrings;
exports.nicify = nicify;
exports.replaceAll = replaceAll;
exports.stringCompare = stringCompare;
exports.templateIdentity = templateIdentity;
exports.trimEmptyLinesEnd = trimEmptyLinesEnd;
exports.trimEmptyLinesStart = trimEmptyLinesStart;
exports.trimLines = trimLines;
exports.typedCapitalize = typedCapitalize;
exports.typedJoin = typedJoin;
exports.typedToLowercase = typedToLowercase;
exports.typedToUppercase = typedToUppercase;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/telemetry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
let __env_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/env.js [app-client] (ecmascript)");
let _opentelemetry_api = __turbopack_context__.r("[project]/node_modules/@opentelemetry/api/build/esm/index.js [app-client] (ecmascript)");
//#region src/utils/telemetry.tsx
const tracer = _opentelemetry_api.trace.getTracer("stack-tracer");
function withTraceSpan(optionsOrDescription, fn) {
    return async (...args)=>{
        return await traceSpan(optionsOrDescription, (span)=>fn(...args));
    };
}
async function traceSpan(optionsOrDescription, fn) {
    let options = typeof optionsOrDescription === "string" ? {
        description: optionsOrDescription
    } : optionsOrDescription;
    return await tracer.startActiveSpan(`STACK: ${options.description}`, async (span)=>{
        if (options.attributes) for (const [key, value] of Object.entries(options.attributes))span.setAttribute(key, value);
        try {
            return await fn(span);
        } finally{
            span.end();
        }
    });
}
function log(message, attributes) {
    const span = _opentelemetry_api.trace.getActiveSpan();
    if (span) span.addEvent(message, attributes);
    else if ((0, __env_js.getEnvVariable)("STACK_SEED_MODE", "false") !== "true") throw new __errors_js.HexclaveAssertionError("No active span found");
}
//#endregion
exports.log = log;
exports.traceSpan = traceSpan;
exports.withTraceSpan = withTraceSpan;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/typed-arrays.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __errors_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/errors.js [app-client] (ecmascript)");
//#region src/utils/typed-arrays.tsx
/**
* Ensures a Uint8Array is backed by a regular ArrayBuffer (not SharedArrayBuffer).
*
* TypeScript 5.7+ made typed arrays generic over their buffer type. Bare `Uint8Array`
* defaults to `Uint8Array<ArrayBufferLike>`, which includes SharedArrayBuffer. Web Crypto
* APIs require `BufferSource` which only accepts `ArrayBufferView<ArrayBuffer>`. This
* function narrows the type using an instanceof guard, creating a same-buffer view
* (zero-copy) when the buffer is already an ArrayBuffer.
*/ function toArrayBufferBacked(arr) {
    if (arr.buffer instanceof SharedArrayBuffer) throw new __errors_js.HexclaveAssertionError("SharedArrayBuffer-backed Uint8Arrays are not supported in this context");
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
//#endregion
exports.toArrayBufferBacked = toArrayBufferBacked;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
//#region src/utils/types.tsx
typeAssertIs()();
typeAssertIs()();
typeAssertIs()();
/**
* Can be used to create assertions on types. For example, if passed any T other than `true`, the following will
* show a type error:
*
* ```ts
* typeAssert<T>()();  // the second pair of braces is important!
* ```
*/ function typeAssert() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
/**
* Functionally equivalent to `typeAssert<T extends S ? true : false>()()`, but with better error messages.
*/ function typeAssertExtends() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
function typeAssertIs() {
    return ()=>void 0;
}
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
typeAssertExtends()();
//#endregion
exports.typeAssert = typeAssert;
exports.typeAssertExtends = typeAssertExtends;
exports.typeAssertIs = typeAssertIs;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/urls.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __crypto_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/crypto.js [app-client] (ecmascript)");
let __strings_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/strings.js [app-client] (ecmascript)");
//#region src/utils/urls.tsx
function createUrlIfValid(...args) {
    try {
        return new URL(...args);
    } catch (e) {
        return null;
    }
}
function isValidUrl(url) {
    return !!createUrlIfValid(url);
}
function isValidHostname(hostname) {
    if (!hostname || hostname.startsWith(".") || hostname.endsWith(".") || hostname.includes("..")) return false;
    const url = createUrlIfValid(`https://${hostname}`);
    if (!url) return false;
    return url.hostname === hostname;
}
function isValidHostnameWithWildcards(hostname) {
    if (!hostname) return false;
    if (!hostname.includes("*")) return isValidHostname(hostname);
    if (hostname.startsWith(".") || hostname.endsWith(".")) return false;
    if (hostname.includes("..")) return false;
    const testHostname = hostname.replace(/\*+/g, "wildcard");
    if (!/^[a-zA-Z0-9.-]+$/.test(testHostname)) return false;
    const segments = hostname.split(/\*+/);
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        if (segment === "") continue;
        if (i === 0 && segment.startsWith(".")) return false;
        if (i === segments.length - 1 && segment.endsWith(".")) return false;
        if (segment.includes("..")) return false;
    }
    return true;
}
function matchHostnamePattern(pattern, hostname) {
    if (!pattern.includes("*")) return pattern === hostname;
    let regexPattern = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    const doubleWildcardPlaceholder = "\0DOUBLE_WILDCARD\0";
    regexPattern = regexPattern.replace(/\*\*/g, doubleWildcardPlaceholder);
    regexPattern = regexPattern.replace(/\*/g, "[^.]*");
    regexPattern = regexPattern.replace(new RegExp(doubleWildcardPlaceholder, "g"), ".*");
    regexPattern = "^" + regexPattern + "$";
    try {
        return new RegExp(regexPattern).test(hostname);
    } catch  {
        return false;
    }
}
function getHardcodedFallbackUrls(primaryBaseUrl) {
    if (primaryBaseUrl === "https://api.stack-auth.com") return [
        "https://api1.stack-auth.com",
        "https://api2.stack-auth.com"
    ];
    if (primaryBaseUrl === "https://api.dev.stack-auth.com") return [
        "https://api1.dev.stack-auth.com",
        "https://api2.dev.stack-auth.com"
    ];
    if (primaryBaseUrl === "https://api.hexclave.com") return [
        "https://api1.hexclave.com",
        "https://api2.hexclave.com"
    ];
    if (primaryBaseUrl === "https://api.dev.hexclave.com") return [
        "https://api1.dev.hexclave.com",
        "https://api2.dev.hexclave.com"
    ];
    const localhostMatch = primaryBaseUrl.match(/^http:\/\/localhost:(\d+)02$/);
    if (localhostMatch) return [
        `http://localhost:${localhostMatch[1]}10`
    ];
    return [];
}
function getDefaultApiUrls(primaryBaseUrl) {
    return [
        primaryBaseUrl,
        ...getHardcodedFallbackUrls(primaryBaseUrl)
    ];
}
function isLocalhost(urlOrString) {
    const url = createUrlIfValid(urlOrString);
    if (!url) return false;
    if (url.hostname === "localhost" || url.hostname.endsWith(".localhost")) return true;
    if (url.hostname.match(/^127\.\d+\.\d+\.\d+$/)) return true;
    if (url.hostname === "[::1]" || url.hostname === "::1") return true;
    return false;
}
function isRelative(url) {
    const randomDomain = `${(0, __crypto_js.generateSecureRandomString)()}.stack-auth.example.com`;
    const u = createUrlIfValid(url, `https://${randomDomain}`);
    if (!u) return false;
    if (u.host !== randomDomain) return false;
    if (u.protocol !== "https:") return false;
    return true;
}
function getRelativePart(url) {
    return url.pathname + url.search + url.hash;
}
/**
* A template literal tag that returns a URL.
*
* Any values passed are encoded.
*/ function url(strings, ...values) {
    return new URL(urlString(strings, ...values));
}
/**
* A template literal tag that returns a URL string.
*
* Any values passed are encoded.
*/ function urlString(strings, ...values) {
    return (0, __strings_js.templateIdentity)(strings, ...values.map(encodeURIComponent));
}
function isChildUrl(parentUrl, maybeChildUrl) {
    return parentUrl.origin === maybeChildUrl.origin && isChildPath(parentUrl.pathname, maybeChildUrl.pathname) && [
        ...parentUrl.searchParams
    ].every(([key, value])=>maybeChildUrl.searchParams.get(key) === value) && (!parentUrl.hash || parentUrl.hash === maybeChildUrl.hash);
}
function isChildPath(parentPath, maybeChildPath) {
    parentPath = parentPath.endsWith("/") ? parentPath : parentPath + "/";
    maybeChildPath = maybeChildPath.endsWith("/") ? maybeChildPath : maybeChildPath + "/";
    return maybeChildPath.startsWith(parentPath);
}
//#endregion
exports.createUrlIfValid = createUrlIfValid;
exports.getDefaultApiUrls = getDefaultApiUrls;
exports.getHardcodedFallbackUrls = getHardcodedFallbackUrls;
exports.getRelativePart = getRelativePart;
exports.isChildPath = isChildPath;
exports.isChildUrl = isChildUrl;
exports.isLocalhost = isLocalhost;
exports.isRelative = isRelative;
exports.isValidHostname = isValidHostname;
exports.isValidHostnameWithWildcards = isValidHostnameWithWildcards;
exports.isValidUrl = isValidUrl;
exports.matchHostnamePattern = matchHostnamePattern;
exports.url = url;
exports.urlString = urlString;
}),
"[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/uuids.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
let __crypto_js = __turbopack_context__.r("[project]/node_modules/@hexclave/ui/node_modules/@hexclave/shared/dist/utils/crypto.js [app-client] (ecmascript)");
//#region src/utils/uuids.tsx
function generateUuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c)=>(+c ^ (0, __crypto_js.generateRandomValues)(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
}
const uuidV7RandomMask = (1n << 74n) - 1n;
function createUuidV7Generator() {
    let lastTimestampMs = -1;
    let randomValue = 0n;
    return ()=>{
        let timestampMs = Date.now();
        if (timestampMs > lastTimestampMs) {
            lastTimestampMs = timestampMs;
            const randomBytes = (0, __crypto_js.generateRandomValues)(/* @__PURE__ */ new Uint8Array(10));
            randomValue = 0n;
            for (const byte of randomBytes)randomValue = randomValue << 8n | BigInt(byte);
            randomValue &= uuidV7RandomMask;
        } else {
            timestampMs = lastTimestampMs;
            randomValue++;
            if (randomValue > uuidV7RandomMask) {
                lastTimestampMs++;
                timestampMs = lastTimestampMs;
                randomValue = 0n;
            }
        }
        const uuid = /* @__PURE__ */ new Uint8Array(16);
        let timestamp = BigInt(timestampMs);
        for(let index = 5; index >= 0; index--){
            uuid[index] = Number(timestamp & 255n);
            timestamp >>= 8n;
        }
        const randomA = Number(randomValue >> 62n & 4095n);
        uuid[6] = 112 | randomA >> 8;
        uuid[7] = randomA & 255;
        let randomB = randomValue & (1n << 62n) - 1n;
        uuid[8] = 128 | Number(randomB >> 56n);
        for(let index = 15; index >= 9; index--){
            uuid[index] = Number(randomB & 255n);
            randomB >>= 8n;
        }
        return uuid;
    };
}
function isUuid(str) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(str);
}
//#endregion
exports.createUuidV7Generator = createUuidV7Generator;
exports.generateUuid = generateUuid;
exports.isUuid = isUuid;
}),
]);

//# sourceMappingURL=0gm1_%40hexclave_shared_dist_21bbl5p._.js.map