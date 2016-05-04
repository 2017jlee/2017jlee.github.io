
<!DOCTYPE html>
<html>

<head>
    <title>
        SQL Form Lab
    </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.1.2/foundation.min.css">
</head>

<body>
	<div class ="row">
        <h1>Tutor List</h1>
	</div>

    <div class="row">

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Instrument</th>
                    <th width="100">Grade</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr>
                    <td>Niccolo Paganini</td>
                    <td>npaganini@hell.gov</td>
                    <td>Violin</td>
                    <td>216</td>
                </tr>
			<?php
			$db = new SQLite3("mydb.db");


			$name = $_REQUEST["name"];
			$email = $_REQUEST["email"];
			$grade = $_REQUEST["grade"];
			$instrument = $_REQUEST["instrument"];
			$input_var = '"'.$name.'", "'.$email.'", '.$grade.', "'.$instrument.'"';
			$db->exec('INSERT INTO APPLICANTS (NAME, EMAIL, GRADE, INSTRUMENT) VALUES ('.$input_var.')');

			$raw_table = $db->query("SELECT * FROM APPLICANTS");
			while ($row = $raw_table->fetchArray(SQLITE3_ASSOC) ){
				echo "<tr>";
				echo "<td>".$row['NAME'];
				echo "<td>".$row['EMAIL'];
				echo "<td>".$row['INSTRUMENT'];
				echo "<td>".$row['GRADE'];
				echo "</tr>";
				}
			?>
            </tbody>
        </table>
    </div>
</body>

</html>