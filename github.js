

class Github 
{
    constructor()
    {
        
        this.repo_count = 5
        this.repo_sort = 'created: asc'
        this.client_id = 'c6450c635078e731a1a2'
        this.secret_id = '12f6bd91491fe2889150cdf7a709fcd1e1a1bd7f'
    }

    async getuser(user)
    {
        const profileres = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&secret_id=${this.secret_id}`)



        const repores = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&secret_id=${this.secret_id}`)



        const profile = await profileres.json()
        const reposs = await repores.json()
        return
        {

            profile,
            reposs
        }
        
        

    }
}