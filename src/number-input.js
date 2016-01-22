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

  init({cls, placeholder, value, onValue}){
    this.cls = cls;
    this.placeholder = placeholder;
    this.value = parseNum(value);
    this.onValue = onValue;
  }

  onInputValue(v){
    this.onValue(parseNum(v));
  }

  destroy(){
    $(this.el).off('input keypress');
    super.destroy();
  }
}

NumberInput.tpl = [TextInput, {
  cls: '= cls',
  placeholder: '= placeholder',
  value: '= value',
  onValue: '= onValue'
}];

export default NumberInput;


function parseNum(v){
  return parseFloat(v, 10) || null;
}
