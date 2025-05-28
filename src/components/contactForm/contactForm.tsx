// components/ContactForm.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

// Puedes cambiar este email por el destinatario deseado
const DESTINATION_EMAIL = "info@agrobuild.com.ar";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Aquí deberías tener un endpoint en tu backend que procese el envío de emails
      // Por ejemplo: /api/send-email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          to: DESTINATION_EMAIL,
        }),
      });
      // console.log("Response:", response);
      // Verifica si la respuesta es exitosa
      if (response.ok) {
        message.success("¡Consulta enviada correctamente!");
        form.resetFields();
      } else {
        message.error("Hubo un error al enviar la consulta. Intenta nuevamente.");
      }
    } catch (error) {
      message.error("Hubo un error al enviar la consulta. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
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
        <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={loading}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
