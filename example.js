var first=["E001","E002","E003"];

var second = [{"Role":'projectmanagement',"emp_id":'E001'},

                {"Role":'softwareengineer',"emp_id":'E002'},

               {"Role":'consultant',"emp_id":'E003'}]
// callback functions example execution

     function f1(first,c1)

      {

        first.forEach(function(result){

          c1(result)

        })

     

      }

    function f2(result)

    {

      second.filter(function(value){

     

     if(result == value.emp_id){ console.log(result+value.Role); f3(f4); }

    })

      

    }

    function f3(c3)

    {

      c3();

    }

    function f4()

    {

      console.log("done");

    }

    f1(first,f2);