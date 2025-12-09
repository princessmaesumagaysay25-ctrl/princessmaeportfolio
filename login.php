<?php
session_start();

$error = "";
$success = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Validation sequence
    if (empty($username) || empty($password)) {
        $error = "Both username and password are required.";
    } elseif (!isset($_SESSION['username']) || !isset($_SESSION['password'])) {
        $error = "No registered user found. Please register first.";
    } elseif ($username === $_SESSION['username'] && $password === $_SESSION['password']) {
        $success = "Login successful!";
    } else {
        $error = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <style>
        body { font-family: Arial; background: #f4f4f4; display: flex; justify-content: center; align-items: center; height: 100vh; }
        .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); width: 300px; }
        input { width: 100%; padding: 10px; margin: 8px 0; border: 1px solid #ccc; border-radius: 5px; }
        button { width: 100%; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: #218838; }
        .error { color: red; margin-bottom: 10px; }
        .success { color: green; margin-bottom: 10px; }
        a { text-decoration: none; color: #007bff; font-size: 14px; }
    </style>
</head>
<body>
<div class="container">
    <h2>Login</h2>

    <?php if ($error): ?>
        <p class="error"><?= htmlspecialchars($error) ?></p>
    <?php endif; ?>

    <?php if ($success): ?>
        <p class="success"><?= htmlspecialchars($success) ?></p>
    <?php endif; ?>

    <form method="POST" action="">
        <input type="text" name="username" placeholder="Enter username" value="<?= isset($username) ? htmlspecialchars($username) : '' ?>">
        <input type="password" name="password" placeholder="Enter password">
        <button type="submit">Login</button>
    </form>

    <p><a href="register.php">Don't have an account? Register</a></p>
</div>
</body>
</html>
