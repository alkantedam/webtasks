<?php
/*$fruits = ['apple','plum','banana','ananas'];

print_r($fruits);


foreach ($fruits as $fruit){
	echo $fruit."<br/>";
}*/

$student = ["name"=>"Bill","surname"=>"Gates","grades"=>[90,70,60]];
print_r($student);
echo $student["grades"][0];

echo json_encode($student);

?>
