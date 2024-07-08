<?php

require_once("./connect/conn.php");

?>

<!doctype html>
<html lang="en">

<head>
    <title>My Website</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<style>
    body {
        background-image: url("./image/6204503.jpg");
    }
</style>

<body>
    <main>

        <?php

        require_once("./connect/conn.php");
        require_once("./class/userLogin.php");

        $db = new Database();
        $conn = $db->getConnection();

        $users  = new UserLogin($conn);

        if (isset($_POST["signin"])) {
            $users->login($_POST["login_username"], $_POST["login_password"]);

            if ($users->emailNotExists()) {
                echo "<div class='alert alert-danger' role='alert'>Email is not exists</div>";
            } else {
                if ($users->verifyPassword()) {
                    echo "<div class='alert alert-success' role='alert'>password is exists</div>";
                } else {
                    echo "<div class='alert alert-danger' role='alert'>password is not exists</div>";
                }
                echo "<div class='alert alert-success' role='alert'>Email is exists</div>";
            }
        }



        ?>

        <div class="container">
            <div class="login-laout">
                <div class="login-text">
                    <h2>ACCOUNT LOGIN</h2>
                </div>
                <div class="login-from mt-3">
                    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" Method="POST">
                        <div class="mb-3 ">
                            <label for="username" class="form-label">USERNAME</label>
                            <input type="text" name="login_username" class="form-control" aria-describedby="username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">PASSWORD</label>
                            <input type="password" name="login_password" class="form-control" aria-describedby="password">
                        </div>
                        <div class="singin-login">
                            <button type="submit" name="signin" class="btn btn-primary">Sign In</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </main>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>

</html>