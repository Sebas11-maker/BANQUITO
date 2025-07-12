import grpc
from concurrent import futures
import time
import transaction_pb2
import transaction_pb2_grpc

# Implementación del servicio gRPC para 'externalTransaction'
class ExternalTransactionServicer(transaction_pb2_grpc.ExternalTransactionServiceServicer):
    def externalTransaction(self, request, context):
        # Simulando la lógica de procesamiento de transacciones externas
        print(f"Procesando la transacción externa con los datos: {request.data}")
        # Aquí podrías agregar la lógica para procesar la transacción externa (base de datos, validaciones, etc.)
        return transaction_pb2.TransactionResponse(status="success", message="Transacción procesada con éxito")

def serve():
    # Crear el servidor gRPC
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    transaction_pb2_grpc.add_ExternalTransactionServiceServicer_to_server(ExternalTransactionServicer(), server)
    server.add_insecure_port('[::]:50051')  # Puerto para externalTransaction
    server.start()
    print('Servidor gRPC ejecutándose en el puerto 50051')
    try:
        while True:
            time.sleep(86400)  # Mantener el servidor activo
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    serve()
