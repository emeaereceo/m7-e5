-- Crear la tabla de cuentas
CREATE TABLE cuentas (
    id SERIAL PRIMARY KEY,
    titular VARCHAR(100) NOT NULL,
    saldo DECIMAL(10, 2) CHECK (saldo >= 0) -- El saldo no puede ser negativo
);

-- Insertar dos cuentas de ejemplo
INSERT INTO cuentas (titular, saldo) VALUES
('Juan Pérez', 1000.00),
('María López', 500.00);