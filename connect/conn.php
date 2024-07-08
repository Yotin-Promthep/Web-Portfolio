<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'my_collection';
    private $username = 'root';
    private $password = '';
    private $conn;


    // Constructor
    public function __construct() {
        $this->connect();
    }

    // Method to establish a database connection
    private function connect() {
        $this->conn = null;

        try {
            $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_PERSISTENT => true,
            ];

            $this->conn = new PDO($dsn, $this->username, $this->password, $options);
        } catch (PDOException $e) {
            echo 'Connection error: ' . $e->getMessage();
        }
    }

    // Method to get the PDO connection instance
    public function getConnection() {
        return $this->conn;
    }
}
// Example usage:
$db = new Database();
$conn = $db->getConnection();

