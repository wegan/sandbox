

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
