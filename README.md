# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Add components to an Oracle JET web app

## Introduction

This tutorial shows you how to add Oracle JavaScript Extension Toolkit (Oracle JET) components to the navdrawer starter template of your Oracle JET web app.

Oracle JET is a development toolkit that you use to build client-side web apps. To create your web app, use the Oracle JET Cookbook to locate the component samples that illustrate the specific functionality you want to add to your app. The Oracle JET Cookbook also provides instructions that you can follow to support behavior specific to the components.

### Objectives

On completion of this tutorial, you will have learned how to use the Oracle JET Cookbook to add Oracle JET Select Single and Chart components to the Dashboard tab of your web app. You will also learn how to connect these two components to add interactivity between them.

### Prerequisites

- A development environment set up to create Oracle JET applications, with the JavaScript runtime, Node.js, and the Oracle JET release 8.0.0, or later, command-line interface installed
- Completion of the previous tutorials in this learning path, so that you have created the JET_Web_Application folder
- Access to the [Oracle JET Cookbook](https://www.oracle.com/pls/topic/lookup?ctx=jetlatest&id=jet-cookbook)

## Task 1: Add a Select Single Component

1. Navigate to the `/JET_Web_Application/src/ts/views` directory and open the `dashboard.html` file in an editor.
2. Within the HTML `div` element of the Dashboard Content Area, add an `oj-label` custom HTML element and an `oj-select-single` element.

```javascript
   <h1>Dashboard Content Area</h1>
     <div>
       <oj-label for="basicSelect">Select Chart:</oj-label>
       <oj-select-single id="basicSelect"
                         style="max-width:20em"
                         data="[[chartTypes]]"
                         value="{{val}}">
       </oj-select-single>
     </div>
   ```

   The square brackets surrounding the `chartTypes` observable on the `data` attribute means the value can be read but not updated by the component. The curly braces surrounding the `val` observable on the value attribute means the value can be read and updated by the component. Thus, square brackets surrounding an observable define a one-way binding, whereas curly braces surrounding an observable define a two-way binding.
