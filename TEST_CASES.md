# EarlyCare Test Cases

| ID | Test | Steps | Expected Result |
|---|---|---|---|
| TC-01 | Initial dashboard | Open `index.html` | Dashboard loads with Low risk and no active alerts |
| TC-02 | Simulate unusual event | Click **Simulate event** | Risk changes to Needs attention and an alert appears |
| TC-03 | Activity update | After simulation, inspect activity score | Score changes from the normal demo value to the attention state |
| TC-04 | Alert count | Simulate event | Caregiver alert count becomes 1 |
| TC-05 | Resolve alert | Click **Mark alert as resolved** | Alert disappears and dashboard returns to Low risk |
| TC-06 | Reset demo | Click **Simulate event** again after resolution | Attention state can be demonstrated again |
| TC-07 | Routine checklist | Tick/untick a routine | Checkbox state changes correctly |
| TC-08 | Responsive layout | Open browser at a narrow/mobile width | Content remains readable and adapts to screen width |
| TC-09 | Direct browser launch | Double-click `index.html` | Prototype opens without a server or package installation |
| TC-10 | Missing external dependencies | Run with no internet connection | Core prototype interaction still works because it uses local HTML/CSS/JS |

## Test Scope
These are prototype functional/UI test cases. They are not medical validation tests. A production healthcare system would require device validation, model validation, security testing, usability testing, privacy review, and appropriate clinical/regulatory evaluation.
