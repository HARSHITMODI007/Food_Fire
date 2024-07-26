const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement('h1',{id:'nest'},'nested h1 element'),React.createElement('h2',{id:'nest2'},'nested h2 element')]
), React.createElement(
    'div',
    {id:'child2'},
    [React.createElement('h1',{id:'nest3'},'nested h1 element'),React.createElement('h2',{id:'nest4'},'nested h2 element')]
)
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);