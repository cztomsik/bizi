import $ from 'jquery';
import Component from './component';
import TextInput from './text-input';

class NumberInput extends Component{
  constructor(opts){
    super(opts);

    $(this.el).on('input keypress', () => {
      const num = parseNum(this.el.value);
      const numStr = num && ('' + num);

      if (this.el.value !== numStr){
        this.el.value = numStr;
      }
    });
  }

  init({cls, value, onValue}){
    this.cls = cls;
    this.value = parseNum(value);
    this.onValue = onValue;
  }

  onInputValue(v){
    this.onValue(parseNum(v));
  }
}

NumberInput.tpl = [TextInput, {
  cls: '= cls',
  value: '= value',
  onValue: '= onValue'
}];

export default NumberInput;


function parseNum(v){
  return parseFloat(v, 10) || null;
}
