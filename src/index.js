import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://00f878864e861ff4ffcea40e40fb2779@o4507955203997696.ingest.us.sentry.io/4508694217031680",
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);