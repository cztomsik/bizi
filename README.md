# bizi
Bootstrap-based UI component library

## Sample applications
  - [bizi site](https://github.com/cztomsik/bizi-www)
  - [simple CRM](https://github.com/cztomsik/bizi-crm)

## Component library
You can use any component directly:

    const btn = new b.Btn({
      text: ...,
      onClick: ...
    });

    document.body.appendChild(btn.el);

## Data-bound templates

    const person = {
      name: 'John Doe',

      greet(){
        alert('Hello' + this.name);
      }
    };

    const view = new b.View({
      model: person,
      tpl: [b.Div, {},
        // one-way
        [b.Heading, {text: '= name'}],

        // two-way
        [b.TextInput, {value: '& name'}],

        // callback
        [b.Btn, {text: 'Click me', onClick: '() greet'}],
      ]
    });

    document.body.appendChild(view.el);

## Custom components

    class Counter extends b.Component{
      init(){
        this.count = 0;
      }

      dec(){
        this.count--;
      },

      inc(){
        this.count++;
      }
    }

    Counter.tpl = [b.Div, {},
      [b.Text, {value: '= count'}],

      [b.Btn, {text: '--', onClick: '() dec'}],
      [b.Btn, {text: '++, onClick: '() inc'}],
    ];

### Promises
It's also possible to return promises from callbacks - in that case, UI will be updated twice.
