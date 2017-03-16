var users = {
        'u0':{
            'mdp':'0000',
            'fname':'Benhatchi',
            'name':'Moukhtar',
            'age':22,
            'friends':['u1','u2'],
            'groups':['g1'],
            'icon':'benhatchi.jpg'
        },
        'u1':{
            'mdp':'1111',
            'fname':'Bahri',
            'name':'Aimene',
            'age':23,
            'friends':['u0','u2','u3'],
            'groups':['g1'],
            'icon':'bahri.jpg'
        },
        'u2':{
            'mdp':'2222',
            'fname':'Kissi',
            'name':'Nazim',
            'age':22,
            'friends':['u0','u1'],
            'groups':['g1'],
            'icon':''
        },
        'u3':{
            'mdp':'3333',
            'fname':'Banana',
            'name':'Abidawi',
            'age':45,
            'friends':['u1'],
            'groups':[],
            'icon':''
        }

}

module.exports = users;
