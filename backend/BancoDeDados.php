<?php
// Conexão com MySQL (XAMPP)
$host = "localhost";
$user = "root";
$pass = "";
$db = "Trabalho_Def";

$conn = new mysqli($host, $user, $pass, $db);

// Verifica se clicou em "Registrar"
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $email = $_POST["email"];
    $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);
    $telefone = $_POST["telefone"];

    $sql = "INSERT INTO contas (usuario, email, senha, telefone)
            VALUES ('$usuario', '$email', '$senha', '$telefone')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color:green;'>Registro realizado com sucesso!</p>";
    } else {
        echo "<p style='color:red;'>Erro: " . $conn->error . "</p>";
    }
}
?>