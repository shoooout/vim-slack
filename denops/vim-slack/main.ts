import type { Denops } from "./deps.ts";
import { vars, execute } from "./deps.ts";
import { WebClient } from "https://deno.land/x/slack_web_api@1.0.3/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async postMsg(text: unknown): Promise<unknown> {
      let token: string = await vars.g.get(denops, "vim_slack_usertoken", "")
      let channel: string = await vars.g.get(denops, "vim_slack_channel", "")
      let message: string = `${text}`
      let slack = new WebClient(token)
      await slack.chat.postMessage({
        channel: "#"+channel,
        text: message,
      })
      return await Promise.resolve(text);
    }
  }

  await execute(
    denops,
    `command! -nargs=1 SV echomsg denops#request('${denops.name}', 'postMsg', [<q-args>])`,
   );
}
