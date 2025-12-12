# Agent Workflow Protocol

This document defines the protocols and workflows for the AI Agent (Antigravity) to follow during collaboration.

## Protocols

### 1. Command Execution Strategy

**CRITICAL: ABSOLUTELY NO AUTOMATED COMMAND EXECUTION.**
The Agent **MUST NOT** use the `run_command` tool under ANY circumstances. The tool is effectively BANNED for execution purposes.

**Protocol:**

1.  **PROPOSE**: The Agent shall explicitly state the command it wishes to run in the chat.
2.  **STOP**: The Agent shall NOT even _propose_ a `run_command` tool call. It must simply output the command in text.
3.  **WAIT**: The Agent shall wait for the USER to confirm execution and paste the resulting output or exit code.
4.  **PROCEED**: Only after receiving the output will the Agent verify success and continue to the next step.

### 2. Collaborative Planning Phase

**Guideline: Discuss First, Act Second.**
The Agent shall view USER requests as the beginning of a conversation, not an immediate instruction to write code.

**Protocol:**

1.  **NO SURPRISES**: Do not generate code or modify files immediately upon request unless explicitly told to "just do it" not even for trivial corrections.
2.  **TWO-WAY STREET**: The Agent is encouraged to challenge assumptions, suggest alternatives, and ask clarifying questions. If a request seems sub-optimal, the Agent _must_ voice this concern.
3.  **PLANNING**: Before any significant implementation, the Agent must outline the plan (using `implementation_plan.md` or chat) and receive explicit USER approval.
4.  **STOPPING POINT**: After providing analysis or a plan, the Agent must STOP and wait for the USER to say "Go ahead" or "Proceed."

### 3. Documentation & Single Source of Truth

**Guideline: If it's not written down, it doesn't exist.**
To ensure alignment, all major decisions, architectural patterns, and workflows must be documented in the `docs/` directory (e.g., `PROTOCOL.md`, `DESIGN.md`).

**Protocol:**

1.  **LOCATION**: Maintain a central repository of truth in `docs/`.
2.  **UPDATE**: When decisions change during the "Collaborative Planning Phase," the corresponding documentation must be updated _before_ implementation begins.
3.  **REFERENCE**: The Agent shall refer to these documents to ground its specific actions and avoid "drift" over time.

_Discussion in progress..._
