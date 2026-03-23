# Staff Command List
A list of all commands available to EP staff members.

:::tip
All commands with the `>` prefix (provided by Fyre bot) are also available as slash commands (`/`).
:::

### Utility Commands
- `>r @user <roles>` - Add or remove roles from a member (moderator+).

### Jail Commands
- `>jail @user <reason>` - Jail a member in the server (all staff).
- `>unjail @user` - Unjail a member in the server (all staff).
- `>close <reason>` - Close a member's jail ticket in the server (all staff).

### Ticket Commands
- `/open` - Open a ticket in any category (moderator+).
- `>claim` - Claim the ticket in the current channel (all staff).
- `>release` - Unclaim the ticket in the current channel (all staff).
- `>add @user` - Add a user to the ticket in the current channel (all staff).
- `>remove @user` - Remove a user from the ticket in the current channel (all staff).
- `>move <category>` - Move the ticket to a different ticket category (all staff).
- `>transfer @user` - Transfer the ticket to a different user (all staff).
- `>close <reason>` - Close the ticket in the current channel (all staff).

### Moderation Commands
- `,warn @user <reason>` - Warn a member in the server (all staff).
- `,kick @user <reason>` - Kick a member from the server (mod+).
- `,ban @user <reason>` - Ban a user from the server (sr. mod+).
- `,mute @user <time> <reason>` Mute/timeout a member in the server (mod+).

#### Moderation Case Commands
- `,warns @user` - View all of a user's warns (all staff).
- `,caselist @user` - View all of a user's moderation cases (warns, kicks, bans, etc.) (all staff).
- `,caseinfo <case-id>` - View additional information about a case (reason, proof, messages, etc.) (all staff).
- `,caseedit <case-id>` - Update a moderation case's information (reason, proof, etc.) (admin+).
- `,caseclose <case-id>` - Close a moderation case (will unban/unwarn the user) (admin+).
- `,casedelete <case-id>` - Delete a moderation case (will unban/unwarn the user) (admin+).

#### Note Commands
- `,note @user <note>` - Add a new note to a user (all staff).
- `,notes @user` - View a user's notes (all staff).
