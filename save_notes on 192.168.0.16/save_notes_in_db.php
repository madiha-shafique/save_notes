<?php

if(isset($_REQUEST['value']))
{

	if(insert($_POST['value']))
	    echo 1;

	else       
	    echo 0;       

}

function insert($params)
{

	if(mysql_connect("localhost","root",'ashiq123'))
		if(mysql_select_db("test_dec2010"))
		{
                $sql ="insert into table1 (value) values('".$params."')";
                if(mysql_query($sql))
                                return true ;

                else
                                return false;

                mysql_close();
		
		}
    
}


?>