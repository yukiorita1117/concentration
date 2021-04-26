import React from "react";
import { rest } from "msw";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import { cache } from "swr";
import { server } from "../../.mocks/server";

import SampleForm from "../components/SampleForm";

// 実行コマンド: npm run test  -- "./src/pages/index.test.js"

beforeEach(() => cache.clear());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MSW and useSWR are in connect.", () => {
  console.log("ああああ");

  test("テストブロック", async () => {
    console.log("いいい");

    render(<SampleForm />);

    // await waitFor(() => screen.getByRole("title"));
    expect(screen.getByText("送信"));
  });
});
