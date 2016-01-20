# bizi2
Bootstrap-based UI component library

## Sample applications
  - [bizi site](https://github.com/cztomsik/bizi-www)
  - [simple CRM](https://github.com/cztomsik/bizi-crm)

## Showcase

### Templates

    TODO: example

### One-way binding

    var viewModel = {
      num: 0
    };

    setInterval(function(){
      viewModel.num++;
    }, 1000);

    // template
    [b.Text, {value: '= num'}]

### Two-way binding

    // template
    [b.FormGroup, {label: 'Your name'},
      [b.TextInput, {value: '& name'}],
      [b.Text, {value: '= name'}]
    ]

### Callbacks

    var viewModel = {
      count: 0,

      dec(){
        this.count--;
      },

      inc(){
        this.count++;
      }
    };

    // template
    [b.Div, {},
      [b.Text, {value: '= count'}],
      [b.Btn, {text: '--', onClick: '() dec'}],
      [b.Btn, {text: '++', onClick: '() inc'}]
    ]

### Promises

    var viewModel = {
      text: 'Click me',

      go(){
        this.text = 'running';

        return wait(1000).then(() => {
          this.text = 'done';
        });
      }
    }

    function wait(millis){
      return new Promise(function(resolve){
        setTimeout(function(){
          resolve();
        }, millis)
      });
    }

    [b.Div, {},
      [b.Btn, {text: ''}]
    ]
