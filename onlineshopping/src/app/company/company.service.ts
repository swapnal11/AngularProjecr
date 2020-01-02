export class CompanyService{

    list : string[] =["IBM", "Capco", "Infy" , "Accenture","Google", "Apple"];


    getAllCompanies() :  string[]
    {
        return this.list;
    }
}