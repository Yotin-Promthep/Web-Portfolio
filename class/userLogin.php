<?php

class UserLogin
{
    private $conn;
    private $table_name = "mc_login";
    public $login_username;
    public $login_password;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function login($login_username, $login_password)
    {
        $this->login_username = $login_username;
        $this->login_password = $login_password;
    }

    public function emailNotExists()
    {
        $query = "SELECT id FROM {$this->table_name} WHERE login_username = :login_username LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":login_username", $this->login_username , PDO::PARAM_STR);    
        $stmt->execute();

        if ($stmt->rowCount() == 0) {
            return true;
        } else {
            return false;
        }
    }

    public function verifyPassword()
    {
        $query = "SELECT id, login_password FROM {$this->table_name} WHERE login_username = :login_username LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":login_username", $this->login_username , PDO::PARAM_STR); // Corrected parameter binding
        $stmt->execute();

        if ($stmt->rowCount() == 1) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $hashedPassword = $row['login_password'];

            echo "<pre>";
            echo "database ";
            print_r($hashedPassword);
            echo "\n";
            echo "Input ";
            print_r($this->login_password);
            echo "</pre>";

            if (password_verify($hashedPassword, $this->login_password)) {
                $_SESSION['userid'] = $row['id'];
                // header("Location: ./back_end/dashboard.php");
                return true; // Return true if the password is verified
            } else {
                return false; // Return false if the password is not verified
            }
        }

        return false; // Return false if no matching user is found
    }
}
