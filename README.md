# Unclear Port Binding Error in Node.js Server

This repository demonstrates a common, yet often unclear, error in Node.js server development:  failure to start due to a port already being in use. The default error message can be unhelpful in diagnosing the problem.

## Bug
The `bug.js` file contains a simple HTTP server that attempts to bind to port 3000. If another application (e.g., another Node.js server or a browser extension) is already using that port, the server will fail to start, providing a non-specific error message.  The solution addresses this by handling the `EADDRINUSE` error gracefully and providing more informative error messages.

## Solution
The `bugSolution.js` file demonstrates how to handle the `EADDRINUSE` error using the `'error'` event listener.  The improved error handling provides more informative messages to assist developers in debugging port conflicts.