// components/ContactForm.js
import React from "react";
import { Form, Input, Button } from "antd";

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Formulario enviado:", values);
    // Aquí puedes manejar el envío de datos, como enviarlos a un backend o API
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
      >
        <Input placeholder="Ingresa tu nombre" />
      </Form.Item>

      <Form.Item
        label="Correo Electrónico"
        name="email"
        rules={[
          { required: true, message: "Por favor ingresa tu correo electrónico" },
          { type: "email", message: "Por favor ingresa un correo válido" },
        ]}
      >
        <Input placeholder="Ingresa tu correo electrónico" />
      </Form.Item>

      <Form.Item
        label="Mensaje"
        name="message"
        rules={[{ required: true, message: "Por favor ingresa tu mensaje" }]}
      >
        <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
