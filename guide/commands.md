# Staff Command & Permission List
A list of all commands and permissions available to Starlight staff members.

:::tip
All commands with the `>` prefix (provided by Fyre bot) are also available as slash commands (`/`).

Most commands with the `.` prefix (provided by Sapphire) are also available as slash commands (`/`).
:::

### Jail Commands
- `>jail @user <reason>` - Jail a member in the server [all staff].
- `>unjail @user` - Unjail a member in the server [all staff].
- `>close <reason>` - Close a member's jail ticket in the server [all staff].

### Ticket Commands
- `/open` - Open a ticket in any category [mod+].
- `>claim` - Claim the ticket in the current channel [all staff].
- `>release` - Unclaim the ticket in the current channel [all staff].
- `>add @user` - Add a user to the ticket in the current channel [all staff].
- `>remove @user` - Remove a user from the ticket in the current channel [all staff].
- `>move <category>` - Move the ticket to a different ticket category [all staff].
- `>transfer @user` - Transfer the ticket to a different user [all staff].
- `>close <reason>` - Close the ticket in the current channel [all staff].

### Moderation Commands
- `,warn @user <reason>` - Warn a member in the server [all staff].
- `,kick @user <reason>` - Kick a member from the server [mod+].
- `,ban @user <reason>` - Ban a user from the server [sr. mod+].
- `,unban @user <reason>` - Unban a user in the server [sr. mod+].
- `,mute @user <time> <reason>` Mute/timeout a member in the server [mod+].

#### Moderation Case Commands
- `,warns @user` - View all of a user's warns (all staff).
- `,caselist @user` - View all of a user's moderation cases (warns, kicks, bans, etc.) [all staff].
- `,caseinfo <case-id>` - View additional information about a case (reason, proof, messages, etc.) [all staff].
- `,caseedit <case-id>` - Update a moderation case's information (reason, proof, etc.) [admin+].
- `,caseclose <case-id>` - Close a moderation case (will unban/unwarn the user) [admin+].
- `,casedelete <case-id>` - Delete a moderation case (will unban/unwarn the user) [admin+].
- `,setproof <case-id> <attachments>` - Set the proof for a moderation case [admin+].

#### Note Commands
- `,note @user <note>` - Add a new note to a user [all staff].
- `,notes @user` - View a user's notes [all staff].

### Utility Commands
- `>r @user <roles>` - Add or remove roles from a member [sr. mod+].
- `>rcolor @role <primary-color> [secondary-color]` - Update a role's colors [admin+].
- `>nsfw` - Toggle age-restriction in the current channel [admin+].
- `>steal <emoji>` - Steal an emoji and add it to the server [mod+] 
- `>restore @user` - Restore a member's roles and nickname [admin+].
- `>unafk @user` - Un-afk a member in the server [sr. mod+].
- `>setafk @user <status>` - Set a member as AFK in the server [sr. mod+].


### Native Discord Permissions
Permissions given on Discord that aren't connected to a specific command or feature.

#### Helper+
- Manage Messages (Discord)
- Bypass Slowmode (Discord)

#### Moderator+
- Pin Messages (Discord)
- Create Expressions (Discord)
- Manage Nicknames (Discord)
- Move Members (Discord)
- Voice Mute Members (Discord)
- Voice Deafen Members (Discord)
- Priority Speaker (Discord)

#### Sr. Moderator+
- Manage Expressions (Discord)
- Manage Threads (Discord)

#### Admin+
- Mention All Roles (Discord)
- Create and Manage Events (Discord)
- Ban Members (Discord)
- Kick Members (Discord)
- Timeout Members (Discord)

#### Team Lead
- Manage Roles (Discord)
- Manage Server (Discord) 
- Manage Channels (Discord) 
- View Server Insights (Discord)
