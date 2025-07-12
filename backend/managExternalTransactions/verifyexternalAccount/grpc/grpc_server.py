import grpc
from concurrent import futures
import time
import transaction_pb2
import transaction_pb2_grpc

# Implementación del servicio gRPC para 'verifyexternalAccount'
class VerifyExternalAccountServicer(transaction_pb2_grpc.ExternalTransactionServiceServicer):
    def verifyExternalAccount(self, request, context):
        # Simulando la lógica para verificar la cuenta externa
        print(f"Verificando la cuenta externa con los datos: {request.data}")
        # Aquí podrías agregar la lógica para validar la cuenta (consultas a base de datos, etc.)
        return transaction_pb2.TransactionResponse(status="success", message="Cuenta verificada con éxito")

def serve():
    # Crear el servidor gRPC
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    transaction_pb2_grpc.add_ExternalTransactionServiceServicer_to_server(VerifyExternalAccountServicer(), server)
    server.add_insecure_port('[::]:50052')  # Puerto para verifyexternalAccount
    server.start()
    print('Servidor gRPC ejecutándose en el puerto 50052')
    try:
        while True:
            time.sleep(86400)  # Mantener el servidor activo
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    serve()
