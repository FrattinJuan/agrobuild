import { Button, Divider, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Result
        status={404}
        title="404"
        subTitle="Lo sentimos, la pagina que buscas no existe."
        extra={
          <Link href="/">
            <Button type="default">Volver</Button>
          </Link>
        }
      />
      <Divider />
    </>
  );
}
