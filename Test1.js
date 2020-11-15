// Test workspace.
console.log('Om Shri Shakti Chottopadhyay!' )

// Test ClosureS 

function megh(){
    var message = 'Jete pari.'

    function bojro ()
    {
        console.log(message);
    }

    return bojro   
}

var agun = megh();
agun();