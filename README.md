## Portfolio

Run `npm install` and `npm run dev` to start the site locally.

### Updating portfolio content

The editable portfolio records are kept in the root `data/` directory:

- `profile.json` contains contact details, role, introduction, and the portrait path.
- `experience.json` contains roles and their highlights.
- `projects.json` contains project descriptions, highlights, links, dates, and stack tags. Each project has a generated detail page; cards show a short summary and link to the full details. Use `url` for one project link or `links` for multiple labeled links. Lower `order` values appear first; the first three are featured on the home page.
- `skills.json` contains skill groups and their skills.
- `education.json` contains education records.
- `approach.json` contains the steps shown in the “How I work” section.

Keep these files as valid JSON when editing them. Project `id` values should be unique. Project `url` and `period` are optional.
