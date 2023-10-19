-- initialization from docker-compose.yml:
-- POSTGRES_USER: root
-- POSTGRES_PASSWORD: root
-- POSTGRES_DB: optics_core_dev

-- additional initialization:
CREATE DATABASE optics_core_test;

-- if another database is needed after initialization, you can run the following command (note that `optics_core_dev` is used to login before the command is executed):
-- `docker-compose exec postgres psql -c 'CREATE DATABASE new_db_name' optics_core_dev`
