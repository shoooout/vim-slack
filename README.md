# vim-slack

The vim-slack plugin for vim by denops.vim.
Using [denops](https://deno.land/x/denops@v0.12).

## Installation 

- dein.vim
If you are using toml.
```
[[plugins]]
repos = 'shoooout/vim-slack'
```

## Usage

```
let g:vim_slack_channel = "{channel_name}"
let g:vim_slack_usertoken = "{your_slack_user_token}"
```

- `g:vim_slack_channel`
The channel name you want to post.

- `g:vim_slack_usertoken`
The token for your slack account.
Click [here](https://api.slack.com/authentication/rotation) to see how to get a token.
