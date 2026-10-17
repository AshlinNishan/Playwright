# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webTable.spec.js >> WebTable verification
- Location: tests\webTable.spec.js:3:5

# Error details

```
ReferenceError: contains is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: /
        - img "AssertQA" [ref=e8]
      - navigation [ref=e9]:
        - link "Home" [ref=e10]:
          - /url: /
        - button "Services" [ref=e12] [cursor=pointer]
        - link "Practice" [ref=e15]:
          - /url: /practice
        - link "Blog" [ref=e16]:
          - /url: /blog
        - link "Why Us" [ref=e17]:
          - /url: /why-assertqa
        - link "About Us" [ref=e18]:
          - /url: /about
        - link "Contact Us" [ref=e19]:
          - /url: /contact
      - button "Get Started" [ref=e21] [cursor=pointer]
  - main [ref=e24]:
    - navigation "Breadcrumb" [ref=e25]:
      - list [ref=e26]:
        - listitem [ref=e27]:
          - link "Home" [ref=e28] [cursor=pointer]:
            - /url: /
        - listitem [ref=e29]:
          - generic [ref=e30]: ›
          - link "Practice" [ref=e31] [cursor=pointer]:
            - /url: /practice
        - listitem [ref=e32]:
          - generic [ref=e33]: ›
          - generic [ref=e34]: Web Tables
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]: Automation Practice
        - heading "Web Tables Practice" [level=1] [ref=e45]
        - paragraph [ref=e46]: Practice testing web tables with sorting, filtering, pagination, and various data assertions.
      - generic [ref=e47]:
        - heading "What you can practice here" [level=2] [ref=e48]
        - paragraph [ref=e49]: A free web table with 15 employee records to automate with Selenium, Cypress, or Playwright. No sign-up, no rate limits.
        - list [ref=e50]:
          - listitem [ref=e51]:
            - generic [ref=e52]: +
            - text: The table ships without data-cy hooks, so you locate rows and cells with XPath, CSS, or text matching, the same way you would on a real application.
          - listitem [ref=e53]:
            - generic [ref=e54]: +
            - text: Sorting, search, dropdown filters, and pagination work together, so combined filters and filtered pagination are both testable.
          - listitem [ref=e55]:
            - generic [ref=e56]: +
            - text: The summary values are computed from the filtered rows, so your assertions change as the table changes.
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]:
            - searchbox "Search employees" [ref=e64]
            - generic [ref=e65]:
              - combobox "Filter by department" [ref=e69]:
                - option "All Depts" [selected]
                - option "Design"
                - option "Engineering"
                - option "Executive"
                - option "Finance"
                - option "HR"
                - option "Marketing"
                - option "Product"
                - option "QA"
                - option "Sales"
              - combobox "Filter by status" [ref=e70]:
                - option "All Status" [selected]
                - option "Active"
                - option "On Leave"
                - option "Terminated"
              - button "Reset" [ref=e71] [cursor=pointer]
          - generic [ref=e75]: Showing 15 of 15 results
        - generic [ref=e76]:
          - table [ref=e79]:
            - rowgroup [ref=e80]:
              - row [ref=e81]:
                - columnheader "ID" [ref=e82] [cursor=pointer]
                - columnheader "First Name" [ref=e88] [cursor=pointer]
                - columnheader "Last Name" [ref=e94] [cursor=pointer]
                - columnheader "Email" [ref=e100] [cursor=pointer]
                - columnheader "Age" [ref=e106] [cursor=pointer]
                - columnheader "Salary" [ref=e112] [cursor=pointer]
                - columnheader "Dept" [ref=e118] [cursor=pointer]
                - columnheader "Status" [ref=e124] [cursor=pointer]
            - rowgroup [ref=e130]:
              - row [ref=e131]:
                - cell "1" [ref=e132]
                - cell "John" [ref=e133]
                - cell "Smith" [ref=e134]
                - cell "john.smith@company.com" [ref=e135]
                - cell "35" [ref=e136]
                - cell "$75,000" [ref=e137]
                - cell "Engineering" [ref=e138]
                - cell "Active" [ref=e139]
              - row [ref=e141]:
                - cell "2" [ref=e142]
                - cell "Sarah" [ref=e143]
                - cell "Johnson" [ref=e144]
                - cell "sarah.j@company.com" [ref=e145]
                - cell "28" [ref=e146]
                - cell "$65,000" [ref=e147]
                - cell "Marketing" [ref=e148]
                - cell "Active" [ref=e149]
              - row [ref=e151]:
                - cell "3" [ref=e152]
                - cell "Michael" [ref=e153]
                - cell "Williams" [ref=e154]
                - cell "m.williams@company.com" [ref=e155]
                - cell "42" [ref=e156]
                - cell "$95,000" [ref=e157]
                - cell "Engineering" [ref=e158]
                - cell "Active" [ref=e159]
              - row [ref=e161]:
                - cell "4" [ref=e162]
                - cell "Emily" [ref=e163]
                - cell "Brown" [ref=e164]
                - cell "emily.brown@company.com" [ref=e165]
                - cell "31" [ref=e166]
                - cell "$55,000" [ref=e167]
                - cell "HR" [ref=e168]
                - cell "On Leave" [ref=e169]
              - row [ref=e171]:
                - cell "5" [ref=e172]
                - cell "David" [ref=e173]
                - cell "Jones" [ref=e174]
                - cell "d.jones@company.com" [ref=e175]
                - cell "45" [ref=e176]
                - cell "$120,000" [ref=e177]
                - cell "Executive" [ref=e178]
                - cell "Active" [ref=e179]
              - row [ref=e181]:
                - cell "6" [ref=e182]
                - cell "Lisa" [ref=e183]
                - cell "Garcia" [ref=e184]
                - cell "lisa.g@company.com" [ref=e185]
                - cell "29" [ref=e186]
                - cell "$60,000" [ref=e187]
                - cell "Design" [ref=e188]
                - cell "Active" [ref=e189]
              - row [ref=e191]:
                - cell "7" [ref=e192]
                - cell "James" [ref=e193]
                - cell "Miller" [ref=e194]
                - cell "james.m@company.com" [ref=e195]
                - cell "38" [ref=e196]
                - cell "$85,000" [ref=e197]
                - cell "Engineering" [ref=e198]
                - cell "Active" [ref=e199]
              - row [ref=e201]:
                - cell "8" [ref=e202]
                - cell "Jennifer" [ref=e203]
                - cell "Davis" [ref=e204]
                - cell "jen.davis@company.com" [ref=e205]
                - cell "33" [ref=e206]
                - cell "$70,000" [ref=e207]
                - cell "Sales" [ref=e208]
                - cell "Active" [ref=e209]
              - row [ref=e211]:
                - cell "9" [ref=e212]
                - cell "Robert" [ref=e213]
                - cell "Martinez" [ref=e214]
                - cell "r.martinez@company.com" [ref=e215]
                - cell "51" [ref=e216]
                - cell "$110,000" [ref=e217]
                - cell "Finance" [ref=e218]
                - cell "Active" [ref=e219]
              - row [ref=e221]:
                - cell "10" [ref=e222]
                - cell "Amanda" [ref=e223]
                - cell "Anderson" [ref=e224]
                - cell "amanda.a@company.com" [ref=e225]
                - cell "26" [ref=e226]
                - cell "$50,000" [ref=e227]
                - cell "Marketing" [ref=e228]
                - cell "Active" [ref=e229]
              - row [ref=e231]:
                - cell "11" [ref=e232]
                - cell "Christopher" [ref=e233]
                - cell "Taylor" [ref=e234]
                - cell "chris.t@company.com" [ref=e235]
                - cell "40" [ref=e236]
                - cell "$90,000" [ref=e237]
                - cell "Engineering" [ref=e238]
                - cell "Terminated" [ref=e239]
              - row [ref=e241]:
                - cell "12" [ref=e242]
                - cell "Jessica" [ref=e243]
                - cell "Thomas" [ref=e244]
                - cell "jess.t@company.com" [ref=e245]
                - cell "34" [ref=e246]
                - cell "$72,000" [ref=e247]
                - cell "QA" [ref=e248]
                - cell "Active" [ref=e249]
              - row [ref=e251]:
                - cell "13" [ref=e252]
                - cell "Daniel" [ref=e253]
                - cell "Hernandez" [ref=e254]
                - cell "dan.h@company.com" [ref=e255]
                - cell "27" [ref=e256]
                - cell "$58,000" [ref=e257]
                - cell "Engineering" [ref=e258]
                - cell "Active" [ref=e259]
              - row [ref=e261]:
                - cell "14" [ref=e262]
                - cell "Michelle" [ref=e263]
                - cell "Moore" [ref=e264]
                - cell "m.moore@company.com" [ref=e265]
                - cell "36" [ref=e266]
                - cell "$78,000" [ref=e267]
                - cell "Product" [ref=e268]
                - cell "On Leave" [ref=e269]
              - row [ref=e271]:
                - cell "15" [ref=e272]
                - cell "Kevin" [ref=e273]
                - cell "Jackson" [ref=e274]
                - cell "kevin.j@company.com" [ref=e275]
                - cell "44" [ref=e276]
                - cell "$88,000" [ref=e277]
                - cell "Sales" [ref=e278]
                - cell "Active" [ref=e279]
          - generic [ref=e281]:
            - generic [ref=e282]:
              - generic [ref=e283]: "Rows:"
              - combobox "Rows per page" [ref=e284]:
                - option "5"
                - option "10"
                - option "15"
                - option "25" [selected]
            - generic [ref=e285]:
              - generic [ref=e286]: Page 1 of 1
              - generic [ref=e287]:
                - button [disabled] [ref=e288]
                - button [disabled] [ref=e293]
                - button [disabled] [ref=e296]
                - button [disabled] [ref=e299]
        - generic [ref=e304]:
          - generic [ref=e305]:
            - generic [ref=e306]: Total Employees
            - generic [ref=e307]: "15"
          - generic [ref=e308]:
            - generic [ref=e309]: Active
            - generic [ref=e310]: "12"
          - generic [ref=e311]:
            - generic [ref=e312]: Avg. Salary
            - generic [ref=e313]: $78,067
          - generic [ref=e314]:
            - generic [ref=e315]: Departments
            - generic [ref=e316]: "9"
      - generic [ref=e318]:
        - heading "🧪 Testing Instructions" [level=3] [ref=e319]
        - generic [ref=e320]:
          - generic [ref=e321]:
            - heading "Test Scenarios:" [level=4] [ref=e322]
            - list [ref=e323]:
              - listitem [ref=e324]: • Assert table has correct number of rows
              - listitem [ref=e325]: • Test column sorting (asc/desc)
              - listitem [ref=e326]: • Verify search filtering works
              - listitem [ref=e327]: • Test pagination navigation
              - listitem [ref=e328]: • Assert cell values by row/column
              - listitem [ref=e329]: • Verify status badge colors
              - listitem [ref=e330]: • Test dropdown filters
          - generic [ref=e331]:
            - heading "🎯 Challenge:" [level=4] [ref=e332]
            - paragraph [ref=e333]: The table has no data-cy attributes! Figure out how to locate and assert table elements on your own.
      - paragraph [ref=e335]: This table contains sample data for QA testing practice. All data is fictional.
      - generic [ref=e339]:
        - generic [ref=e340]:
          - paragraph [ref=e341]: Level up your team
          - heading "Practicing is just the beginning." [level=3] [ref=e342]
          - paragraph [ref=e343]: Whether you need to upskill your QA team, introduce test automation, or get expert consulting, we help companies build quality into their process, not just their code.
        - generic [ref=e344]:
          - link "Talk to Our Experts" [ref=e345] [cursor=pointer]:
            - /url: /contact
          - link "Our Services" [ref=e349] [cursor=pointer]:
            - /url: /services
    - generic [ref=e353]:
      - heading "Need this tested professionally?" [level=2] [ref=e354]
      - paragraph [ref=e355]:
        - text: Automating table assertions for production apps? We run
        - link "test automation services" [ref=e356]:
          - /url: /services/test-automation
        - text: for data-heavy apps and
        - link "accessibility testing services" [ref=e357]:
          - /url: /services/accessibility-testing
        - text: that check tables work with screen readers.
        - link "Get in touch" [ref=e358]:
          - /url: /contact
        - text: to discuss your project.
      - button "Talk to our QA team" [ref=e359] [cursor=pointer]
  - contentinfo [ref=e362]:
    - generic [ref=e363]:
      - generic [ref=e364]:
        - generic [ref=e365]:
          - heading "AssertQA" [level=2] [ref=e366]
          - paragraph [ref=e367]: Professional software quality assurance and testing consulting services. We help businesses build reliable, scalable, and high-quality software through comprehensive testing solutions.
          - generic [ref=e368]:
            - generic [ref=e369]: Belgrade, Serbia
            - link "hi@assertqa.com" [ref=e371] [cursor=pointer]:
              - /url: mailto:hi@assertqa.com
            - link "+381 62 926 5082" [ref=e373] [cursor=pointer]:
              - /url: tel:+381629265082
        - generic [ref=e374]:
          - heading "Services" [level=3] [ref=e375]
          - list [ref=e376]:
            - listitem [ref=e377]:
              - link "Test Automation" [ref=e378] [cursor=pointer]:
                - /url: /services/test-automation
            - listitem [ref=e379]:
              - link "Manual Testing" [ref=e380] [cursor=pointer]:
                - /url: /services/manual-testing
            - listitem [ref=e381]:
              - link "API Testing" [ref=e382] [cursor=pointer]:
                - /url: /services/api-testing
            - listitem [ref=e383]:
              - link "Performance Testing" [ref=e384] [cursor=pointer]:
                - /url: /services/performance-testing
            - listitem [ref=e385]:
              - link "Mobile Testing" [ref=e386] [cursor=pointer]:
                - /url: /services/mobile-testing
            - listitem [ref=e387]:
              - link "Accessibility Testing" [ref=e388] [cursor=pointer]:
                - /url: /services/accessibility-testing
            - listitem [ref=e389]:
              - link "Agentic QA" [ref=e390] [cursor=pointer]:
                - /url: /services/agentic-qa
        - generic [ref=e391]:
          - heading "Company" [level=3] [ref=e392]
          - list [ref=e393]:
            - listitem [ref=e394]:
              - link "About Us" [ref=e395] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e396]:
              - link "Team" [ref=e397] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e398]:
              - link "Case Studies" [ref=e399] [cursor=pointer]:
                - /url: /case-studies
            - listitem [ref=e400]:
              - link "Blog" [ref=e401] [cursor=pointer]:
                - /url: /blog
        - generic [ref=e402]:
          - heading "Support" [level=3] [ref=e403]
          - list [ref=e404]:
            - listitem [ref=e405]:
              - link "Contact" [ref=e406] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e407]:
              - link "FAQ" [ref=e408] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e409]:
              - link "Privacy Policy" [ref=e410] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e411]:
              - link "Terms" [ref=e412] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e413]:
              - link "Imprint" [ref=e414] [cursor=pointer]:
                - /url: /imprint
        - generic [ref=e416]:
          - heading "Stay Updated" [level=4] [ref=e417]
          - paragraph [ref=e418]: QA insights and news, straight to your inbox.
          - generic [ref=e419]:
            - generic [ref=e420]: Email address
            - textbox "Email address" [ref=e421]:
              - /placeholder: your@email.com
            - button "Subscribe" [disabled] [ref=e422]
      - generic [ref=e424]:
        - generic [ref=e425]:
          - img "AssertQA Logo" [ref=e426]
          - generic [ref=e427]:
            - generic [ref=e428]: © 2026 AssertQA. All rights reserved.
            - button "Cookie settings" [ref=e430] [cursor=pointer]
            - generic [ref=e431]: v0.106.3
        - link "View ISO/IEC 27001:2022 Certified certificate (opens PDF in new tab)" [ref=e433]:
          - /url: /documents/iso-27001-certificate.pdf
        - generic [ref=e434]:
          - link "Visit our LinkedIn page (opens in new tab)" [ref=e435]:
            - /url: https://www.linkedin.com/company/assertqa
          - link "Visit our X page (opens in new tab)" [ref=e440]:
            - /url: https://x.com/assertqa
          - link "Visit our GitHub page (opens in new tab)" [ref=e443]:
            - /url: https://github.com/assertqa
          - link "Visit our Instagram page (opens in new tab)" [ref=e446]:
            - /url: https://instagram.com/assertqa
          - link "Visit our Clutch page (opens in new tab)" [ref=e450]:
            - /url: https://clutch.co/profile/assertqa
  - alert [ref=e453]
  - dialog "Cookie consent" [ref=e454]:
    - generic [ref=e455]:
      - paragraph [ref=e456]:
        - text: We use analytics cookies (Google Analytics) to understand how visitors use our site. No advertising or tracking across other sites.
        - link "Privacy Policy" [ref=e457] [cursor=pointer]:
          - /url: /privacy
      - generic [ref=e458]:
        - button "Decline" [ref=e459] [cursor=pointer]
        - button "Accept" [ref=e460] [cursor=pointer]
        - button "Close" [ref=e461] [cursor=pointer]
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('WebTable verification' , async ({browser}) => {
  4  | 
  5  |     const context = await browser.newContext()
  6  |     const page = await context.newPage()
  7  | 
  8  |     await page.goto('https://assertqa.com/practice/webtables')
  9  | 
  10 |     const rowDropdown = await page.locator('//select[@aria-label="Rows per page"]')
  11 | 
  12 |     await rowDropdown.selectOption({label:'25'})
  13 | 
  14 |     const table = await page.locator('//table[@id="employees-table"]')
  15 | 
  16 |     const valuesInTable = await table.allTextContents()
  17 | 
  18 |     console.log(valuesInTable)
  19 | 
> 20 |    const availabllity =  await valuesInTable.allTextContents(contains("john.smith@company.com"))
     |                                              ^ ReferenceError: contains is not defined
  21 | 
  22 | 
  23 | 
  24 | })
```