class UI
{
    constructor()
    {
        this.profile = document.getElementById('profile')
    }

    showprofile(user)
    {
        this.profile.innerHTML =
        `<div class="card card-body mb-3 bg-dark">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-3 mx-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-warning text-primary btn-block mx-10">View Profile</a>
                </div>
                
                <div class="col-md-9">
                    <span class="badge badge-warning badge-pill text-primary">Public Repos : ${user.public_repos} </span>
                    <span class="badge badge-warning badge-pill text-primary">Public Gists : ${user.public_gists} </span>
                    <span class="badge badge-warning badge-pill text-primary">Followers : ${user.followers} </span>
                    <span class="badge badge-warning badge-pill text-primary">Following : ${user.following} </span>
                    <br><br>
                    <ul class = "list-group bg-dark text-light"
                        <li class="list-group-item bg-dark">Company : ${user.company} </li>
                        <li class="list-group-item bg-dark">Website/Blog : ${user.blog} </li>
                        <li class="list-group-item bg-dark">Location : ${user.location} </li>
                        <li class="list-group-item bg-dark">Member Since : ${user.created_at} </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <h3 class ="page-heading mb-3">Latest Repos</h3>
        <div id="repos">
        </div>`
    }


    // show alert message

    showalert(message,classname)
    {
        // remove remaining alerts 

        this.clearalert()
        
        // create div

        const div = document.createElement('div')

        // add classes

        div.className = classname

        // add text

        div.appendChild(document.createTextNode(message))

        // get parent 

        const container = document.querySelector('.searchContainer')

        // get search box 

        const search = document.querySelector('.search')

        // insert alert


        container.insertBefore(div,search)

        // timeout after 3s

        setTimeout(() =>
        {
            this.clearalert()
        },3000)
    }


    // repos 


    showrepos(repos)
    {
        let output = ''

        repos.forEach(function(repo)
        {
            output += `<div class="card card-body mb-2 bg-dark">
                            <div class="row">
                                <div class="col-md-6">
                                    <a class="text-light" href="${repo.html_url}" target="_blank">${repo.name} : </a>
                                
                                </div>
                                <div class="col-md-9">
                                    <span class="badge badge-pill badge-warning text-primary mx-auto" id="span1">Stars - ${repo.stargazers_count} </span>
                                    <span class="badge badge-pill badge-warning text-primary id="span2">Watchers - ${repo.watchers_count} </span>
                                    <span class="badge badge-pill badge-warning text-primary id="span3">Forks - ${repo.forks_count} </span>
                                </div>
                            </div>
                        </div>

                        `
                            
        })


        // output repos

        document.getElementById('repos').innerHTML = output


    }

    // clear alert message

    clearalert()
    {
        const alert = document.querySelector('.alert')
        if(alert)
        {
            alert.remove()
        }
    }

    clearprofile()
    {
        this.profile.innerHTML=''
    }


}