// init github

const github = new Github

// init ui

const ui = new UI

const input = document.getElementById('searchuser')
const searchu = document.getElementById('button1')

// search input event listener 

searchu.addEventListener('click', (e) =>
{
    e.preventDefault()
    // get input value

    const usertext = input.value

    if(usertext !== '')
    {
        // make http call

        github.getuser(usertext)
            .then(data => 
                {
                    if(data.profile.message === 'Not Found')
                    {
                       // show alert 
                       ui.showalert('User Not Found', 'alert alert-danger')
                    }
                    else
                    {
                        // show profile

                        ui.showprofile(data.profile)
                        ui.showrepos(data.reposs)
                    }
                    
                    //console.log(data)
                    

                })

    }
    else
    {
        // clear profile

        ui.clearprofile()
    }
})