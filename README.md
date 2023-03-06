# FreeCodeCamp - Back End Development and APIs Course

- [x] You should provide your own project, not the example URL.
- [ ] You can submit a form that includes a file upload.
- [ ] The form file input field has the name attribute set to upfile.
- [ ] When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

## Certification Project - File Metadata Microservice

Build a full stack JavaScript app that is functionally similar to this: [https://file-metadata-microservice.freecodecamp.rocks](https://file-metadata-microservice.freecodecamp.rocks/). Working on this project will involve you writing your code using one of the following methods:

- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/) and complete your project locally.
- Use [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-filemetadata) to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

If you use Replit, follow these steps to set up the project:

- Start by importing the project on Replit.
- Next, you will see a `.replit` window.
- Select `Use run command` and click the `Done` button.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

---

**HINT:** You can use the `multer` npm package to handle file uploading.

## Integration Tests

```text
 PASS  __tests__/integration/Api.spec.ts
  File upload endpoint
    ✓ should upload a file and return its metadata (43 ms)
    ✓ should return an error if no file is uploaded (10 ms)

-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |   81.57 |       50 |      40 |   83.78 |
 src                     |   69.56 |        0 |       0 |   72.72 |
  server.ts              |   69.56 |        0 |       0 |   72.72 | 24-25,30-31,36-37
 src/Controllers         |     100 |      100 |     100 |     100 |
  App.Controller.ts      |     100 |      100 |     100 |     100 |
  HttpStatusCode.Enum.ts |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.359 s, estimated 3 s
```
