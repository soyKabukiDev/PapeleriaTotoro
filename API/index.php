<?php
// index.php

// Incluir archivos necesarios
require_once 'includes/conexion.php';
// Obtener la ruta de la petición
$request_uri = $_SERVER['REQUEST_URI'];

// Eliminar la parte inicial del URI que corresponde al script index.php
$base_path = str_replace('/index.php', '', $_SERVER['SCRIPT_NAME']);
$url = str_replace($base_path, '', $request_uri);
// Obtenemos el método de la petición (GET, POST, PUT, DELETE)
$method = $_SERVER['REQUEST_METHOD'];

// Manejar la petición según el método
switch ($method) {
    case 'GET':
        // Ruta para obtener todos los productos
        if ($url == '/detail_venta') {
            // Lógica para obtener todos los productos
            // Ejemplo básico:
            $stmt = $conn->query("SELECT p.code, p.name, p.price_unit, d.quantity FROM `detail_venta` d, `producto` p, `venta` v WHERE  p.id_prod = d.id_prod AND
d.id_sell=v.id_venta");
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($results);
        }
        // Ruta para obtener todos los usuarios
        elseif ($url == '/usuarios') {
            // Lógica para obtener todos los usuarios
            // Ejemplo básico:
            $stmt = $conn->query("SELECT * FROM usuarios");
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($results);
        }
        break;
        case 'POST':
            // Ruta para crear un producto nuevo
            if ($_GET['url'] == 'productos') {
                // Lógica para crear un producto nuevo
                // Ejemplo básico:
                $data = json_decode(file_get_contents('php://input'), true);
                $code = $data['code'];
                $name = $data['name'];
                $price_unit = $data['price_unit'];
                $inventary = $data['inventary'];
    
                $stmt = $conn->prepare("INSERT INTO productos (code, name, price_unit, inventary) VALUES (?, ?, ?, ?)");
                $stmt->execute([$code, $name, $price_unit, $inventary]);
                echo json_encode(array('message' => 'Producto creado correctamente'));
            }
            // Ruta para crear un usuario nuevo
            elseif ($_GET['url'] == 'usuarios') {
                // Lógica para crear un usuario nuevo
                // Ejemplo básico:
                $data = json_decode(file_get_contents('php://input'), true);
                $username = $data['username'];
                $email = $data['email'];
                $password = $data['password'];
    
                $stmt = $conn->prepare("INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)");
                $stmt->execute([$username, $email, $password]);
                echo json_encode(array('message' => 'Usuario creado correctamente'));
            }
            break;
        case 'PUT':
            // Ruta para actualizar un producto por su ID
            if ($_GET['url'] == 'productos') {
                // Lógica para actualizar un producto
                // Ejemplo básico:
                parse_str(file_get_contents("php://input"), $put_vars);
                $id_prod = $put_vars['id_prod'];
                $code = $put_vars['code'];
                $name = $put_vars['name'];
                $price_unit = $put_vars['price_unit'];
                $inventary = $put_vars['inventary'];
    
                $stmt = $conn->prepare("UPDATE productos SET code=?, name=?, price_unit=?, inventary=? WHERE id_prod=?");
                $stmt->execute([$code, $name, $price_unit, $inventary, $id_prod]);
                echo json_encode(array('message' => 'Producto actualizado correctamente'));
            }
            // Ruta para actualizar un usuario por su ID
            elseif ($_GET['url'] == 'usuarios') {
                // Lógica para actualizar un usuario
                // Ejemplo básico:
                parse_str(file_get_contents("php://input"), $put_vars);
                $id_usuario = $put_vars['id_usuario'];
                $username = $put_vars['username'];
                $email = $put_vars['email'];
    
                $stmt = $conn->prepare("UPDATE usuarios SET username=?, email=? WHERE id_usuario=?");
                $stmt->execute([$username, $email, $id_usuario]);
                echo json_encode(array('message' => 'Usuario actualizado correctamente'));
            }
            break;
        case 'DELETE':
            // Ruta para eliminar un producto por su ID
            if ($_GET['url'] == 'productos') {
                // Lógica para eliminar un producto
                // Ejemplo básico:
                parse_str(file_get_contents("php://input"), $delete_vars);
                $id_prod = $delete_vars['id_prod'];
    
                $stmt = $conn->prepare("DELETE FROM productos WHERE id_prod=?");
                $stmt->execute([$id_prod]);
                echo json_encode(array('message' => 'Producto eliminado correctamente'));
            }
            // Ruta para eliminar un usuario por su ID
            elseif ($_GET['url'] == 'usuarios') {
                // Lógica para eliminar un usuario
                // Ejemplo básico:
                parse_str(file_get_contents("php://input"), $delete_vars);
                $id_usuario = $delete_vars['id_usuario'];
    
                $stmt = $conn->prepare("DELETE FROM usuarios WHERE id_usuario=?");
                $stmt->execute([$id_usuario]);
                echo json_encode(array('message' => 'Usuario eliminado correctamente'));
            }
            break;
        default:
            // Método no soportado
            http_response_code(405);
            echo json_encode(array('error' => 'Método no permitido'));
            break;
    }
    ?>