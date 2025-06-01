// components/ContactForm.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovwqqdj";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

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
        <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#30632F" }} loading={loading}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
